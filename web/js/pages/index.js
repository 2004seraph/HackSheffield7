"use strict"

function gotoDashboard() {
    document.getElementById("dashboard-redirect").click()
}

let setup = new StagedConfig(document.getElementById("first-time-set-up"), () => {
    // window.api.send("saveUserData", )
    //save state to file

    gotoDashboard()
})

function signIn() {
    console.log("sign in")

    //fetch transaction data
    //put it into a state

    next()
}

function next() {
    setup.iterate()
}

//check if state exists, if so, skip to dash