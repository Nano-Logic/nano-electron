/**
 * Modules Used for @function ElectronWindow `Class`
 * 
 * @author Fire
 */

const electron = require('electron');
const url = require('url');
const path = require('path');
const fs = require('fs');
const $ = require("jquery");

const {
    app,
    BrowserWindow,
    Menu,
    ipcMain
} = electron;

const defaultTemplate = (mainWindow) => [{
    label: "Tools",
    submenu: [{
            label: "Quit",
            accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
            click() {
                app.quit();
            }
        },
        {
            label: 'Reload',
            role: 'reload'
        },
        {
            label: "Dev",
            accelerator: process.platform == 'darwin' ? 'Command+Shift+I' : 'Ctrl+Shift+I',
            click() {
                mainWindow.webContents.openDevTools();
            }
        }
    ]
}];

/**
 * @class ElectronWindow
 * 
 * @param width - BrowserWindow width.
 * @param height - BrowserWindow height.
 * @param mainWindowUrl - A url path to the main window of the electron app.
 * @param menuTemplate - [Optional] Custom template for the main menu.
 * 
 * @author Fire
 */

class ElectronWindow {
    constructor(width, height, mainWindowUrl, menuTemplate) {
        this.width = width;
        this.height = height;
        this.mainWindowUrl = mainWindowUrl;
        this.menuTemplate = menuTemplate || null;

        this.mainWindow = null;
    }

    loadWindow() {
        this.mainWindow = new BrowserWindow({
            width: this.width,
            height: this.height,
            resizable: true,
            fullscreenable: true,
            minimizable: true,
            // fullscreen: true
        });

        this.mainWindow.loadFile(this.mainWindowUrl);
        this.loadTemplate(defaultTemplate(this.mainWindow));
    }

    loadTemplate(template) {
        this.menuTemplate = template;
        var MainMenu = Menu.buildFromTemplate(this.menuTemplate);
        Menu.setApplicationMenu(MainMenu);
    }

}

module.exports = ElectronWindow;