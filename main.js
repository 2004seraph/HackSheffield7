"use strict"

const path = require('path')
const { app, BrowserWindow } = require('electron')
const log = require('electron-log');

const NODE_ENV = 'development'

log.transports.file.resolvePath = () => path.join(__dirname, 'mainlog.txt')
Object.assign(console, log.functions)

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 400,
        minHeight: 300,

        titleBarStyle: 'hidden',
        titleBarOverlay: {
            color: '#989898',
            symbolColor: '#00',
            height: 30
        },

        autoHideMenuBar: true,

        webPreferences: {
            devTools: (NODE_ENV == "development") ? true : false,
            preload: path.join(__dirname, 'preload.js')
        },

        show: false
    })

    win.once('ready-to-show', () => {
      win.show()
    })
  
    win.loadFile('web/index.html')
}

app.whenReady().then(() => {
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