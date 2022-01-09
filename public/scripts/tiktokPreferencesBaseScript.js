const ipcTikTokPreferences = require("electron").ipcRenderer

let tiktokWatermarkSwitch = document.getElementById("tiktokWatermarkSwitch")

let acceptTikTokPreferencesButton = document.getElementById("acceptTikTokPreferencesButton")

let selectVideoFormatTikTok = document.getElementById("selectVideoFormatTikTok")

let usersFilenameTikTokInput = document.getElementById("usersFilenameTikTok")

acceptTikTokPreferencesButton.onclick = function() {
    ipcTikTokPreferences.sendSync('firstStepChangingUsersTikTokPreferences',[tiktokWatermarkSwitch.checked,selectVideoFormatTikTok.value,usersFilenameTikTokInput.value])
}