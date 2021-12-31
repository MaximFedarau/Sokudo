/*Тут скрипт по скачиванию видео с ТТ и не только.*/

let tiktokDownloadButton = document.getElementById("tiktokDownloadButton")
let tiktokLinkInput = document.getElementById("tiktokLinkInput")

const ipcRendererTikTok =  window.require('electron').ipcRenderer;
let usersFileStatusTikTok = true
let usersFilePathTikTok = ''
function getUsersDir() {
    ipcRendererTikTok.send("createDialog")
    ipcRendererTikTok.on("usersDir", (event,arg) => {
        usersFileStatusTikTok = arg.canceled
        usersFilePathTikTok = arg.filePaths[0]
        console.log(usersFileStatusTikTok,usersFilePathTikTok)
    })
}
let chooseDirTikTokButton = document.getElementById("chooseDirTiktok")
chooseDirTikTokButton.onclick = function() {
    getUsersDir()
}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}
let usersUrl = ""
tiktokDownloadButton.onclick = function() {

    //возможно child_process
    if (usersFileStatusTikTok === true) {
        alert("\t Some error occurred!\n Please, choose your directory!")
    }
    else {
        const {execFile} = require('child_process');
        const {exec} = require('child_process')
        let ttData = [`${usersFilePathTikTok}/${makeid(20)}.mp4` + "~" + tiktokLinkInput.value]
        process.env.PATH = process.env.PATH + ':/usr/local/bin';
        const child = exec(`node ${__dirname + "/scripts/noWMTikTokScript.js"} ${ttData} `,
            (error, stdout, stderr) => {
                console.log(`stdout: ${stdout}`);
                usersUrl = stdout
                console.log(usersUrl)
                console.log(`stderr: ${stderr}`);
                if (error !== null) {
                    console.log(`exec error: ${error}`);//прописать через __dirname
                    alert("\t Some error occurred!\n Please check your Internet connection or the availability of the video.")
                }
                if (error === null) {
                    alert("Finished downloading")
                }
            });


        tiktokLinkInput.value = ""
    }


}


let usersPreferencesTikTokButton = document.getElementById("preferencesTiktok")

usersPreferencesTikTokButton.onclick = function() {
    alert("Developing...")
}
/*const tiktok = require("tiktok-scraper-without-watermark")
const url = "https://www.tiktok.com/@lilhancha/video/7042666995887738117?is_copy_url=1&is_from_webapp=v1"

tiktok.tiktokdownload(url).then(
    result => console.log(result)
).catch(e => console.log(e))*/