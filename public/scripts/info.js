let informationButton = document.getElementById("informationButton")

const ipc = window.require('electron').ipcRenderer;

// Function that will be called on click
// event of "Go to settings window" button
function goToSettingsWindow(){

    // Make sure to do ipc.send('some String'),
    // where 'some String' must be same with
    // the first parameter of ipcMain.on() in app.js
    ipc.send('openChildWindow');
}


informationButton.addEventListener('click', () => {
    goToSettingsWindow()
});
