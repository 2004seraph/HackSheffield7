"use strict"

let firstTimeSetupElement = document.getElementById("first-time-set-up")

let setup = new StagedConfig(firstTimeSetupElement, () => {
    window.api.send("saveUserData", {
        basicConfig: {
            completed: true
        }
    })
    //save state to file

    gotoDashboard()
})

//check if state exists, if so, skip to dash
window.api.sendInvoke('getUserData', null).then((data) => {
    if (Object.hasOwn(data, "basicConfig")) {
        if (data.basicConfig.completed) {
            gotoDashboard()
        }
    }

    firstTimeSetupElement.classList.remove("hidden")
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
    setup.iterate()
}