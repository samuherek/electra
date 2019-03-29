import { ipcMain, app, BrowserWindow } from 'electron';
import { resolve, join } from 'path';
import { platform, homedir } from 'os';
// import { AppWindow } from './app-window';
import { autoUpdater } from 'electron-updater';

ipcMain.setMaxListeners(0);

app.setPath('userData', resolve(homedir(), '.multrin'));

let win: BrowserWindow | null;
// export let appWindow: AppWindow;

async function createWindow() {
  win = new BrowserWindow({
    frame: process.env.ENV === 'dev' || platform() === 'darwin',
    minWidth: 400,
    minHeight: 450,
    width: 900,
    height: 700,
    show: true,
    titleBarStyle: 'hiddenInset',
    webPreferences: {
      plugins: true,
      nodeIntegration: true,
    },
    icon: resolve(app.getAppPath(), 'static/app-icons/icon.png'),
  });

  // tray = new Tray(path.join(__dirname, 'assets', 'btcTemplate.png'));
  // const contextMenu = Menu.buildFromTemplate([
  //   { label: 'Item1', type: 'radio' },
  //   { label: 'Item2', type: 'radio' },
  //   { label: 'Item3', type: 'radio', checked: true },
  //   { label: 'Item4', type: 'radio' },
  // ]);
  // tray.setToolTip('This is my application.');
  // tray.setContextMenu(contextMenu);

  if (process.env.ENV === 'dev') {
    win.webContents.openDevTools({ mode: 'detach' });
    win.loadURL('http://localhost:4444/app.html');
  } else {
    win.loadURL(join('file://', app.getAppPath(), 'build/app.html'));
  }

  // win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', () => {
  // Create our menu entries so that we can use macOS shortcuts
  // Menu.setApplicationMenu(
  //   Menu.buildFromTemplate([
  //     {
  //       label: 'Edit',
  //       submenu: [
  //         { role: 'undo' },
  //         { role: 'redo' },
  //         { type: 'separator' },
  //         { role: 'cut' },
  //         { role: 'copy' },
  //         { role: 'paste' },
  //         { role: 'pasteandmatchstyle' },
  //         { role: 'delete' },
  //         { role: 'selectall' },
  //         { role: 'quit' },
  //         { role: 'reload' },
  //         {
  //           type: 'normal',
  //           accelerator: 'CmdOrCtrl+Shift+R',
  //           label: 'Reload main process',
  //           click() {
  //             app.relaunch();
  //             app.exit();
  //           },
  //         },
  //       ],
  //     },
  //   ]),
  // );

  app.on('activate', () => {
    if (win === null) {
      createWindow();
    }
  });

  createWindow();

  autoUpdater.on('update-downloaded', ({ version }) => {
    win.webContents.send('update-available', version);
  });

  ipcMain.on('update-install', () => {
    autoUpdater.quitAndInstall();
  });

  ipcMain.on('update-check', () => {
    if (process.env.ENV !== 'dev') {
      autoUpdater.checkForUpdates();
    }
  });

  ipcMain.on('window-focus', () => {
    win.webContents.focus();
  });
});

app.on('window-all-closed', () => {
  if (platform() !== 'darwin') {
    app.quit();
  }
});