"use strict";

const unirest = require("unirest");
const path = require("path");
const fs = require("fs");

const log = require("electron-log");
const { app, BrowserWindow, ipcMain } = require("electron");
const AWT = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJuYmYiOjE2NjI0MjI0MDAsImFwaV9zdWIiOiIzNzU5NzA2ZjQxMGMyMTdjODYyMTZhOGZhZGIzMDY1NDc0YmRmZjNkNDdiNDg5ZGM1OTk1NzQyYTE0ZTY5ZDQxMTY3NTEyMzIwMDAwMCIsInBsYyI6IjVkY2VjNzRhZTk3NzAxMGUwM2FkNjQ5NSIsImV4cCI6MTY3NTEyMzIwMCwiZGV2ZWxvcGVyX2lkIjoiMzc1OTcwNmY0MTBjMjE3Yzg2MjE2YThmYWRiMzA2NTQ3NGJkZmYzZDQ3YjQ4OWRjNTk5NTc0MmExNGU2OWQ0MSJ9.Mijhmrl5GOeD6qrSpj4NHZlT3hx6DT8WE-OqP-5kwcS7EIA_DScaaRVpqCflKJraLbFaNXz7DJR6lliN9VrQJvnu-4aLQonFfazLk8Nf8Fujd2C81Z-BenNSTY1PApFS18WVHaS2VNolC_UufXNfCigBDkr5emEB1Q52gLdQBPdGb_YMO04g0ln5YNIe0YARzDniT37NjF6rux6iguUbajGF35hVJkzIfpvMPz-FCXcehBsocPAhUyhakeBS-0cjeCcTTRMAgB_O3zKPSQ6QyOtVjQsqxIS6rRThTk1hu9pbRvR4amoe73ZYt_yjFYQM68IYdpRldZi9kjnGhdrUKQ"

const NODE_ENV = "development";

const DATA_DIR = path.join(__dirname + "/SAM_Data");

//file logging
log.transports.file.resolvePath = () => path.join(DATA_DIR, "mainlog.txt");
Object.assign(console, log.functions);
// if (NODE_ENV == "production") {
//     Object.assign(console, log.functions)
// }

//create user data file if not exists (or if it fails to parse)
const userDataFilePath = path.join(DATA_DIR, "UserSoleStats.json");
var GlobalUserData = {};
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR);
}
if (!fs.existsSync(userDataFilePath)) {
  fs.writeFileSync(userDataFilePath, "{}");
} else {
  try {
    GlobalUserData = JSON.parse(
      fs.readFileSync(userDataFilePath, { encoding: "utf8", flag: "r" })
    );
  } catch {
    fs.writeFileSync(userDataFilePath, "{}");
  }
}
/**
 * Saves the user data object to the user data path
 * @param {object} data
 */
function saveUserData(data) {
  fs.writeFileSync(userDataFilePath, JSON.stringify(data));
}

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 600,
    minWidth: 1000,
    minHeight: 500,

    titleBarStyle: "hidden",
    titleBarOverlay: {
      color: "#989898",
      symbolColor: "#00",
      height: 30,
    },

    autoHideMenuBar: true,

    webPreferences: {
      enableBlinkFeatures: false,
      contextIsolation: true,
      backgroundThrottling: false,

      preload: path.join(__dirname, "preload.js"),

      devTools: NODE_ENV == "development" ? true : false,
    },

    show: false,
  });

  ipcMain.on("saveUserData", (event, data) => {
    saveUserData(data);
    console.log("User data saved");
  });
  ipcMain.handle("getUserData", async (event, data) => {
    return GlobalUserData;
  });
  ipcMain.on("getUserPurchases", (event, data) => {
    console.log(data);
    let req = unirest
      .get(
        "https://sandbox.capitalone.co.uk/developer-services-platform-pr/api/data/transactions/accounts/" +
          data.id +
          "/transactions"
      )
      .headers({
        "Content-Type": "application/json",
        "Authorization": "Bearer " + AWT,
        "version": "1.0",
      })
      .end((transaction_res) => {
        var req = unirest('GET', 'https://sandbox.capitalone.co.uk/developer-services-platform-pr/api/data/accounts/' + data.id)
        .headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + AWT,
            'version': '1.0'
        })
        .end((account_res) => {
            win.webContents.send("transactionData", {account: account_res.raw_body, transactions: transaction_res.raw_body});
        });
      });
  });
  ipcMain.on("saveUserData", (event, data) => {
    saveUserData(data);
    console.log("User data saved");
  });

  win.once("ready-to-show", () => {
    win.show();
  });

  win.loadFile("web/intro.html");
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  try {
    if (process.platform !== "darwin") app.quit();
  } catch (error) {
    console.log(error);
  }
});
