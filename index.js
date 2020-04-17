/**
 * * Ready-made template for electron main browserWindow.
 * 
 * @author Fire
 */

const ElectronWindow = require('./utils/modules');
const {
    app
} = require('electron');

var window = new ElectronWindow(540, 280, 'pages/main.html');

app.on('ready', () => {

    window.loadWindow();
});