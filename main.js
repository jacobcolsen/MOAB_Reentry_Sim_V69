const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 900,
    minHeight: 600,
    title: 'MOAB_Reentry_Sim_V69',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  win.loadFile('reentry_simulation_apollo10_physics.html');

  // Allow window.open() calls from the sim to open the viz in a new native window.
  // postMessage between the two windows works because they share the same session.
  win.webContents.setWindowOpenHandler(({ url }) => {
    return {
      action: 'allow',
      overrideBrowserWindowOptions: {
        width: 1400,
        height: 900,
        minWidth: 900,
        minHeight: 600,
        title: 'MOAB_Reentry_Sim_V69 - Visualization',
        webPreferences: {
          nodeIntegration: false,
          contextIsolation: true,
        },
      },
    };
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // Re-open main window when dock icon is clicked with no windows open (macOS convention)
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
