const path = require("path");
const { app, BrowserWindow, Menu } = require("electron");

const isMac = process.platform === "darwin";

createMainWindow = () => {
  const mainWindow = new BrowserWindow({
    title: "Image Resizer",
    width: 800,
    height: 800,
  });

  // open dev tools
  mainWindow.webContents.openDevTools();

  mainWindow.loadFile(path.join(__dirname, "./renderer/index.html"));
};

app.whenReady().then(() => {
  createMainWindow();

  const mainMenu = Menu.buildFromTemplate(menu);
  Menu.setApplicationMenu(mainMenu);

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });
});

// Menu template
const menu = [
  {
    label: "File",
    submenu: [
      {
        label: "Quit",
        click: () => app.quit(),
        accelerator: "CmdOrCtrl+W",
      },
    ],
  },
];

app.on("window-all-closed", () => {
  if (!isMac) {
    app.quit();
  }
});
