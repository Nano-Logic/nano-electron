/**
 * * Ready-made template for electron main browserWindow.
 * 
 * @author Fire
 */

const ElectronWindow = require('./utils/modules');
const {
    app
} = require('electron');

var window = new ElectronWindow(540, 280, 'pages/main.html', null /** No template */ , true);

app.on('ready', () => {

    window.loadWindow();

    /**
     * Change the @func window.defaultTemplate(window.mainWindow) for different custom template.
     * Loads default Template. 
     */
    window.loadTemplate(window.defaultTemplate(window.mainWindow));

    /**
     * Closes application.
     */
    window.mainWindow.on('closed', () => {
        app.quit();
    });
});