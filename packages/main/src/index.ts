import { app, BrowserWindow } from 'electron';

let win: BrowserWindow | null;

function createWindow() {
  win = new BrowserWindow({
    height: 600,
    transparent: false,
    webPreferences: {
      contextIsolation: true,
      // <--- (1) Additional preferences
      nodeIntegration: false,
      preload: __dirname + '/preload.js', // <--- (2) Preload script
    },
    width: 800,
  });
  win.loadURL('http://localhost:3000'); // <--- (3) Loading react

  win.webContents.openDevTools();

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
