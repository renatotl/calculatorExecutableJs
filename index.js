const { app, BrowserWindow } = require("electron");

let mainWindow;

// aerrow function
app.on("ready", () => {
  mainWindow = new BrowserWindow({
    // tamanho da tela e largura
    width: 700,
    height: 400,
  });

  // concatenacao com crase
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});
