const urlDownloader = require("url-downloader")
const ipcRenderer = window.require('electron').ipcRenderer;


const urlDownloadButton = document.getElementById("urlDownloadButton")

urlDownloadButton.onclick = function() {


    let usersURL = document.getElementById("urlLinkInput").value

    const resources  = [{
        "target": "LOCAL",
        "origin": usersURL,
        "destination": '/Users/maxim/Desktop/abobus.png'
    }
    ]
    console.log(usersURL)
    const options = {
        maxConcurrency: 30
    }

    urlDownloader.download(resources, options).then((results) => {
        //console.log('files downloaded and saved');
        //console.log(results);
    }).catch(e => alert(e))

    document.getElementById("urlLinkInput").value = ""
}

let chooseDirectoryURLButton = document.getElementById("chooseDirURL")

chooseDirectoryURLButton.onclick = function() {
    alert("Developing...")
}

let urlPreferencesButton = document.getElementById("preferencesURL")

urlPreferencesButton.onclick = function() {
    alert("Developing...")
}
