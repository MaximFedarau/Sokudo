let usersFormat = 'best'

let closeYouTubePreferencesWindowButton = document.getElementById("closeYouTubePreferencesWindow")

const ipcPreferencesYouTube = window.require('electron').ipcRenderer;

closeYouTubePreferencesWindowButton.onclick = function() {
    ipcPreferencesYouTube.send('closeYouTubePreferencesWindow')
}

//let usersInputText = document.getElementById("textTest")

let bestQualityYouTubeButton = document.getElementById("bestQualityYouTube")
bestQualityYouTubeButton.onclick = function() {
    usersFormat = 'best'
}

let worstQualityYouTubeButton = document.getElementById("worstQualityYouTube")
worstQualityYouTubeButton.onclick = function() {
    usersFormat = 'worst'
}

let acceptYouTubePreferencesButton = document.getElementById("acceptYouTubePreferencesButton")

acceptYouTubePreferencesButton.onclick = function() {
    ipcPreferencesYouTube.sendSync('firstStepChangingUsersYouTubePreferences',[usersFormat])//usersInputText.value
}
