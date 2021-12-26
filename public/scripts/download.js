
//link:https://www.youtube.com/watch?v=XTgTjDtdW_M

//import {dialog} from "electron";

let youtubeDownloadButton = document.getElementById("youtubeDownloadButton");
let youtubeLinkInput = document.getElementById("youtubeLinkInput");


function validYT(url) {
    let p = /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?(?=.*v=((\w|-){11}))(?:\S+)?$/;
    return (url.match(p)) ? RegExp.$1 : false;
}
const ipcDownload = window.require('electron').ipcRenderer;
let usersFileStatus = true
let usersFilePath = ''
function getUsersDir() {
    ipcDownload.send("createDialog")
    ipcDownload.on("usersDir", (event,arg) => {
        usersFileStatus = arg.canceled
        usersFilePath = arg.filePaths[0]
    })
}
let chooseDirYoutubeButton = document.getElementById("chooseDirYoutube")
chooseDirYoutubeButton.onclick = function() {
    getUsersDir()
}
youtubeDownloadButton.onclick = function(){
    /*let usersFileStatus = true
    let usersFilePath = ''
    ipcDownload.send("createDialog")
    ipcDownload.on("usersDir", (event,arg) => {
        usersFileStatus = (arg.canceled)
        usersFilePath = arg.filePaths[0]
    }).then(

    )*/
    if (usersFileStatus === false) {
    if (validYT(youtubeLinkInput.value)){
        console.log('Started')
        const youtubedl = require('yt-dlp-exec')
        /*youtubedl.default(youtubeLinkInput.value,{
            rmCacheDir: true,
            ver

        },{
            cwd: __dirname,
        })*/
            youtubedl(youtubeLinkInput.value,{
                format: usersYouTubePreferencesList[0]
            },
                {
                cwd: usersFilePath
            }).then(function() {
                console.log("Finish")
                alert("Finished downloading")
                console.log(1)
            }
            ).catch(err => alert("\t Some error occurred!\n Please check your Internet connection or the availability of the video.")
            )//alert("\t Some error occurred!\n Please check your Internet connection or the availability of the video."


    } else {
        alert("Your data is wrong!")
    }
    youtubeLinkInput.value = ""}

    else {
        alert("\t Some error occurred!\n Please, choose your directory!")
    }

}


let youtubePageButton = document.getElementById("youtubePage")
youtubePageButton.onclick = function() {
    ipcDownload.send("createYoutubeDownloadWindow")
}

let tiktokPageButton = document.getElementById("tiktokPage")
tiktokPageButton.onclick = function() {
    ipcDownload.send('createTikTokDownloadWindow')
}

let usersPreferencesButton = document.getElementById("usersPreferencesButton")
let usersYouTubePreferencesList = ['best']
usersPreferencesButton.onclick = function() {
    ipcDownload.send('secondStepChangingUsersYouTubePreferences')
    ipcDownload.on('thirdStepChangingUsersYouTubePreferences', (event,arg)=> {
        usersYouTubePreferencesList = arg
        console.log(usersYouTubePreferencesList)
    })
}

let baseSettingsButton = document.getElementById("basePreferencesButton")
baseSettingsButton.onclick = function() {
    usersYouTubePreferencesList = ['best']
    console.log(usersYouTubePreferencesList)
}




