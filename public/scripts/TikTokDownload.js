const ipcDownload = window.require('electron').ipcRenderer;

let youtubePageButton = document.getElementById("youtubePage")
youtubePageButton.onclick = function() {
    ipcDownload.send("createYoutubeDownloadWindow")
}

let tiktokPageButton = document.getElementById("tiktokPage")
tiktokPageButton.onclick = function() {
    ipcDownload.send('createTikTokDownloadWindow')
}
