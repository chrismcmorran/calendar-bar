let menubar = require('menubar');
let menu = menubar();

menu.on('ready', ()=> {
    console.log('calendar-bar has been loaded into the native menu bar.');
    menu.window.width=800
    menu.window.height=800
});
