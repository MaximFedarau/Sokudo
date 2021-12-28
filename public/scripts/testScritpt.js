const tiktok = require("tiktok-scraper-without-watermark")
//const url = "https://www.tiktok.com/@kjxvier/video/7043992701116763397?is_copy_url=1&is_from_webapp=v1"

let args = process.argv.slice(2);

tiktok.tiktokdownload(args[0]).then(result => console.log(result.nowm))