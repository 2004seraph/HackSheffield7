"use strict"

let UserDataCache = {basicConfig: {}}

let firstTimeSetupElement = document.getElementById("first-time-set-up")

let setup = new StagedConfig(firstTimeSetupElement, () => {
    UserDataCache.basicConfig.completed = true

    window.api.send("saveUserData", UserDataCache)
    //save state to file

    gotoDashboard()
})

//check if state exists, if so, skip to dash
window.api.sendInvoke('getUserData', null).then((data) => {
    if (Object.hasOwn(data, "basicConfig")) {
        if (data.basicConfig.completed) {
            gotoDashboard()
        } else {
            UserDataCache = ProgramState.create()
            firstTimeSetupElement.classList.remove("hidden")
        }
    } else {
        UserDataCache = ProgramState.create()
        firstTimeSetupElement.classList.remove("hidden")
    }
})

function gotoDashboard() {
    document.getElementById("dashboard-redirect").click()
}

function signIn() {
    console.log("sign in")

    //fetch transaction data
    //put it into a state

    next()
}

function next() {
    switch (setup.stage) {
        case 0:
            UserDataCache.basicConfig.accountID = document.getElementById("accountID").value
            break
        case 1:
            UserDataCache.basicConfig.businessName = document.getElementById("businessName").value
            UserDataCache.basicConfig.financialYearEnd = document.getElementById("finyeardate").value
            break
        case 2:
            break
    }

    setup.iterate()
}