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

    const headers = new Headers()
    headers.append("Content-Type", "application/json")
    headers.append("Authorization", "Bearer " + AUTHJWT)
    headers.append("version", "1.0")

    const myInit = {
        method: 'GET',
        headers: headers
    }

    const myRequest = new Request('https://sandbox.capitalone.co.uk/developer-services-platform-pr/api/data/accounts/' + document.getElementById("accountID").value)

    fetch(myRequest, myInit)
    .then((response) => {
        console.log(response)
    });

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