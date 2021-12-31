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

let bestQualityAudioYouTubeButton = document.getElementById("bestQualityAudioYouTube")
bestQualityAudioYouTubeButton.onclick = function() {
    usersFormat = `bestaudio[ext=${selectAudioFormatYouTube.value}]`
}

let worstQualityAudioYouTubeButton = document.getElementById("worstQualityAudioYouTube")
worstQualityAudioYouTubeButton.onclick = function() {
    usersFormat = `worstaudio[ext=${selectAudioFormatYouTube.value}]`
}

let bestQualityVideoYouTubeButton = document.getElementById("bestQualityVideoYouTube")
bestQualityVideoYouTubeButton.onclick = function() {
    usersFormat = `bestvideo[ext=${selectVideoFormatYouTube.value}]`
}

let worstQualityVideoYouTubeButton = document.getElementById("worstQualityVideoYouTube")
worstQualityVideoYouTubeButton.onclick = function() {
    usersFormat = `worstvideo[ext=${selectVideoFormatYouTube.value}]`
}

let acceptYouTubePreferencesButton = document.getElementById("acceptYouTubePreferencesButton")

let selectAudioFormatYouTube = document.getElementById("selectAudioFormatYouTube")
let selectVideoFormatYouTube = document.getElementById("selectVideoFormatYouTube")

let usersFilenameYouTubeInput = document.getElementById("usersFilenameYouTube")

acceptYouTubePreferencesButton.onclick = function() {
    ipcPreferencesYouTube.sendSync('firstStepChangingUsersYouTubePreferences',[usersFormat,usersFilenameYouTubeInput.value])//usersInputText.value
    usersFilenameYouTubeInput.value = ""
}
