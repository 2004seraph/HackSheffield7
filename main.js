"use strict"

const path = require('path')
const fs = require('fs')

const log = require('electron-log')
const { app, BrowserWindow, ipcMain } = require('electron')
const { exit } = require('process')

const NODE_ENV = 'development'

//file logging
log.transports.file.resolvePath = () => path.join(__dirname, 'mainlog.txt')
Object.assign(console, log.functions)
// if (NODE_ENV == "production") {
//     Object.assign(console, log.functions)
// }

//create user data file if not exists (or if it fails to parse)
const userDataFilePath = "UserSoleStats.json"
var GlobalUserData = {}
if (!fs.existsSync(userDataFilePath)) {
    fs.writeFileSync(userDataFilePath, '{}')
} else {
    try {
        GlobalUserData = JSON.parse(fs.readFileSync(userDataFilePath, {encoding:'utf8', flag:'r'}))
    } catch {
        fs.writeFileSync(userDataFilePath, '{}')
    }
}

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 600,
        minHeight: 500,

        titleBarStyle: 'hidden',
        titleBarOverlay: {
            color: '#989898',
            symbolColor: '#00',
            height: 30
        },

        autoHideMenuBar: true,

        webPreferences: {
            enableBlinkFeatures: false,
            contextIsolation:  true,
            backgroundThrottling: false,
            
            preload: path.join(__dirname, 'preload.js'),

            devTools: (NODE_ENV == "development") ? true : false
        },

        show: false
    })

    ipcMain.on('saveUserData', (event, data) => {
        console.log("User data saved")
        return true;
    })

    ipcMain.handle("getUserData", async (event, data) => {
        return GlobalUserData
    })

    win.once('ready-to-show', () => {
      win.show()
    })
  
    win.loadFile('web/index.html')
}

app.whenReady().then(() => {
    console.log("w")
    // ipcMain.on('load-user-data', loadUserData)
    // ipcMain.on('export-income-statement', exportIncomeStatement)

    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    try {
        if (process.platform !== 'darwin') app.quit()
    } catch (error) {
        console.log(error)
    }
})


////EVENTS

function saveUserData(event, data) {
    console.log("hello")
    console.log(data)

    exit()
}