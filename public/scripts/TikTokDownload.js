/*Тут скрипт по скачиванию видео с ТТ и не только.*/

let tiktokDownloadButton = document.getElementById("tiktokDownloadButton")
let tiktokLinkInput = document.getElementById("tiktokLinkInput")


let usersUrl = ""
tiktokDownloadButton.onclick = function() {

    //возможно child_process

    const { execFile } = require('child_process');
    const {exec}  = require('child_process')
    process.env.PATH = process.env.PATH + ':/usr/local/bin';
    const child = exec(`node /Users/maxim/Desktop/webProjects/Sokudo/dist/mac-arm64/Sokudo.app/Contents/Resources/app/public/scripts/testScritpt.js ${tiktokLinkInput.value}`,
        (error, stdout, stderr) => {
            console.log(`stdout: ${stdout}`);
            usersUrl = stdout
            console.log(usersUrl)
            console.log(`stderr: ${stderr}`);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });
    const child1 = exec("node --version",
        (error, stdout, stderr) => {
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });
    const urlDownloader = require("url-downloader")
    const resources  = [{
        "target": "LOCAL",
        "origin": usersUrl,
        "destination": "/Users/maxim/Desktop/funnymeme.mp4"
    }
    ]

    console.log(1)
    const options = {
        maxConcurrency: 30
    }

    urlDownloader.download(resources, options).then((results) => {
        console.log('files downloaded and saved');
        console.log(results);
    })

    tiktokLinkInput.value = ""



}

let testButton = document.getElementById("preferencesTiktok")

testButton.onclick = function() {
    console.log(usersUrl)
    const urlDownloader = require("url-downloader")
    const resources  = [{
        "target": "LOCAL",
        "origin": usersUrl,
        "destination": "/Users/maxim/Desktop/funnymeme.mp4"
    }
    ]

    console.log(1)
    const options = {
        maxConcurrency: 30
    }

    urlDownloader.download(resources, options).then((results) => {
        console.log('files downloaded and saved');
        console.log(results);
    })

    tiktokLinkInput.value = ""
}
/*const tiktok = require("tiktok-scraper-without-watermark")
const url = "https://www.tiktok.com/@lilhancha/video/7042666995887738117?is_copy_url=1&is_from_webapp=v1"

tiktok.tiktokdownload(url).then(
    result => console.log(result)
).catch(e => console.log(e))*/