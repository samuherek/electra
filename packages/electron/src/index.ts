import { app, BrowserWindow, Tray, Menu } from 'electron';
import path from 'path';

let win: BrowserWindow | null;
let tray: Tray | null;

async function createWindow() {
  win = new BrowserWindow({
    height: 600,
    transparent: false,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      preload: __dirname + '/preload.js',
    },
    width: 800,
  });

  tray = new Tray(path.join(__dirname, 'assets', 'btcTemplate.png'));
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Item1', type: 'radio' },
    { label: 'Item2', type: 'radio' },
    { label: 'Item3', type: 'radio', checked: true },
    { label: 'Item4', type: 'radio' },
  ]);
  tray.setToolTip('This is my application.');
  tray.setContextMenu(contextMenu);

  win.loadURL('http://localhost:3000');

  // win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
