const tiktok = require("tiktok-scraper-without-watermark")
const urlDownloader = require("url-downloader");
//const url = "https://www.tiktok.com/@kjxvier/video/7043992701116763397?is_copy_url=1&is_from_webapp=v1"

let args = process.argv.slice(2);
console.log(args[0],typeof args[0],args[0].indexOf("~"))
let usersTikTokPath = args[0].slice(0,args[0].indexOf("~"))
let usersTTUrl = args[0].slice(args[0].indexOf("~")+1)
console.log(usersTikTokPath,usersTTUrl)

tiktok.tiktokdownload(usersTTUrl).then(result => {
        const urlDownloader = require("url-downloader")
        const resources  = [{
            "target": "LOCAL",
            "origin": result.wm,
            "destination": usersTikTokPath
        }
        ]
        console.log(args)
        const options = {
            maxConcurrency: 10
        }

        urlDownloader.download(resources, options).then((results) => {
            console.log('files downloaded and saved');
            console.log(results);
        })
    }
).catch(e => console.log(e))

let usersPrefernce