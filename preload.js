"use strict"

const { contextBridge, ipcRenderer } = require('electron')

// contextBridge.exposeInMainWorld('electronAPI', {
    // saveUserData: (data) => {
    //     console.log("Save")
    //     ipcRenderer.send('saveUserData', data)
    // }
// })
console.log("send")
contextBridge.exposeInMainWorld('api', {
    send: (channel, data) => {
      console.log("send")
      ipcRenderer.send(channel, data)
    },
    receive: (channel, func) => {
      ipcRenderer.on(channel, (event, ...args) => func(...args))
    },
  })

// window.addEventListener('DOMContentLoaded', () => {
//     const replaceText = (selector, text) => {
//       const element = document.getElementById(selector)
//       if (element) element.innerText = text
//     }
  
//     for (const dependency of ['chrome', 'node', 'electron']) {
//       replaceText(`${dependency}-version`, process.versions[dependency])
//     }
// })