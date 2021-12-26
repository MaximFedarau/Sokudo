let closeInfoWindowButton = document.getElementById("closeInfoWindow")

const ipc = window.require('electron').ipcRenderer;

closeInfoWindowButton.onclick = function() {
    ipc.send("closeChildWindow")
}