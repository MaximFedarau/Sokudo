const path = require('path');
const url = require('url');
const {app, BrowserWindow, ipcMain, Menu} = require('electron');

let win;
function createWindow() {
    win = new BrowserWindow({
        width: 1280,
        height: 720,//720
        resizable: false,

        webPreferences: {
            enableRemoteModule: true,
            nodeIntegration: true,
            contextIsolation: false,//false
        }
    });

    win.loadFile('public/index.html');

    //win.webContents.openDevTools();

    //win.setMenu(null);
    win.setMenuBarVisibility(false)

    win.on('closed', () => {
        win = null;
    });
}



//create Instruction window
let instructionWindow
function createInstructionWindow() {
    instructionWindow = new BrowserWindow({
        width: 1000,
        height: 700,
        modal: true,
        show: false,
        parent: win,
        resizable: false,
        frame: false,// Make sure to add parent window here

        // Make sure to add webPreferences with below configuration
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        },
    });

    instructionWindow.loadFile('public/instruction.html')

    instructionWindow.once("ready-to-show", () => {
        instructionWindow.show();
    });

    //instructionWindow.webContents.openDevTools();
}


app.on('window-all-closed', () => {
    app.quit();
});

const template  = [
    {
        label: 'File',
        submenu: [
            {
                label: "YouTube Downloader",
                accelerator: "Command+Y",
                click() {
                    win.loadFile('public/index.html')
                }
            },
            {
                label: 'Tik Tok Downloader',
                accelerator: 'Command+T',
                click() {
                    win.loadFile('public/tiktok.html')
                }
            },
            {
                label: "URL Downloader",
                accelerator: "Command+U",
                click() {
                    win.loadFile('public/urlDownloaderHTML.html')
                }
            },
            {
                label: 'Quit',
                accelerator: 'Command+Q',
                click() { app.quit(); }
            }
        ]
    },
    {
        label: 'Edit',
        submenu: [
            {
                label: 'Undo',
                accelerator: 'CmdOrCtrl+Z',
                role: 'undo'
            },
            {
                label: 'Redo',
                accelerator: 'Shift+CmdOrCtrl+Z',
                role: 'redo'
            },
            {
                type: 'separator'
            },
            {
                label: 'Cut',
                accelerator: 'CmdOrCtrl+X',
                role: 'cut'
            },
            {
                label: 'Copy',
                accelerator: 'CmdOrCtrl+C',
                role: 'copy'
            },
            {
                label: 'Paste',
                accelerator: 'CmdOrCtrl+V',
                role: 'paste'
            },
            {
                label: 'Select All',
                accelerator: 'CmdOrCtrl+A',
                role: 'selectall'
            },
        ]
    }
]
const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)

ipcMain.on("openChildWindow", (event, arg) => {
    createInstructionWindow();
});

ipcMain.on("closeChildWindow",(event,arg) => {
    instructionWindow.close()
})

ipcMain.on("createDialog", (event,arg) => {

    const {dialog} = require('electron')



    dialog.showOpenDialog({
        title: 'Choose a directory:',
        properties: ['createDirectory','openDirectory']

    }).then((output)=> event.reply("usersDir",output))

})

ipcMain.on('createYoutubeDownloadWindow', (event,arg)=> {
    win.loadFile('public/index.html')
})

ipcMain.on('createTikTokDownloadWindow', (event,arg) => {
    win.loadFile('public/tiktok.html')
})

let youtubePreferencesWindow
function createYouTubePreferencesWindow() {
    youtubePreferencesWindow = new BrowserWindow({
        width: 1000,
        height: 700,
        modal: true,
        show: false,
        parent: win,
        resizable: false,
        frame: false,// Make sure to add parent window here

        // Make sure to add webPreferences with below configuration
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        },
    });

    //youtubePreferencesWindow.webContents.openDevTools()

    youtubePreferencesWindow.loadFile('public/youtubePreferencesHTML.html')

    youtubePreferencesWindow.once("ready-to-show", () => {
        youtubePreferencesWindow.show();
    });
}

ipcMain.on('createYouTubePreferencesWindow', (event,arg) => {
    createYouTubePreferencesWindow()
})

ipcMain.on('closeYouTubePreferencesWindow', (event,arg) => {
    youtubePreferencesWindow.close()
})

app.on('ready', () => {
    createWindow()
});

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

let usersYouTubePreferencesList = ['best',makeid(20)]
ipcMain.on('firstStepChangingUsersYouTubePreferences', (event,arg)=> {
    usersYouTubePreferencesList = arg
    console.log(usersYouTubePreferencesList)
    event.returnValue = "Ok"
})

ipcMain.on('secondStepChangingUsersYouTubePreferences', (event, arg) => {
    if (usersYouTubePreferencesList[1]==='') usersYouTubePreferencesList[1] = makeid(20)
    event.reply('thirdStepChangingUsersYouTubePreferences', usersYouTubePreferencesList)
})

let tiktokPreferencesWindow;
function createTikTokPreferencesWindow() {
    tiktokPreferencesWindow = new BrowserWindow({
        width: 1000,
        height: 700,
        modal: true,
        show: false,
        parent: win,
        resizable: false,
        frame: false,// Make sure to add parent window here

        // Make sure to add webPreferences with below configuration
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        },
    });

    //tiktokPreferencesWindow.webContents.openDevTools()

    tiktokPreferencesWindow.loadFile('public/tiktokPreferencesHTML.html')

    tiktokPreferencesWindow.once("ready-to-show", () => {
        tiktokPreferencesWindow.show();
    });
}

ipcMain.on('createTikTokPreferencesWindow', (event,arg) => {
    createTikTokPreferencesWindow()
})

ipcMain.on('closeTikTokPreferencesWindow', (event,arg) => {
    tiktokPreferencesWindow.close()
})

let usersTikTokPreferencesList = [false,"mp4",makeid(20)]
ipcMain.on('firstStepChangingUsersTikTokPreferences', (event,arg)=> {
    usersTikTokPreferencesList = arg
    console.log(usersTikTokPreferencesList)
    event.returnValue = "Ok"
})

ipcMain.on('secondStepChangingUsersTikTokPreferences', (event, arg) => {
    if (usersTikTokPreferencesList[2]==='') usersTikTokPreferencesList[2] = makeid(20)
    while (usersTikTokPreferencesList[2].indexOf(' ') !== -1) usersTikTokPreferencesList[2] = usersTikTokPreferencesList[2].replace(" ","_")
    event.reply('thirdStepChangingUsersTikTokPreferences', usersTikTokPreferencesList)
})
//add URl Downloader


