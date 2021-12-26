let preferencesButton = document.getElementById("preferencesYoutube")

const ipcPreferencesYouTube = window.require('electron').ipcRenderer;

preferencesButton.onclick = function() {
    ipcPreferencesYouTube.send('createYouTubePreferencesWindow')
}

