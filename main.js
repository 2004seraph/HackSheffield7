"use strict"

const path = require('path')
const { app, BrowserWindow, ipcMain } = require('electron')
const log = require('electron-log');
const { exit } = require('process');

const NODE_ENV = 'development'

//file logging
log.transports.file.resolvePath = () => path.join(__dirname, 'mainlog.txt')
Object.assign(console, log.functions)
// if (NODE_ENV == "production") {
//     Object.assign(console, log.functions)
// }

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
        
        return true;
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