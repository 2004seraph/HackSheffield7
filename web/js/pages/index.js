let setup = new StagedConfig(document.getElementById("first-time-set-up"), () => {
    document.getElementById("dashboard-redirect").click()
})

function signIn() {
    console.log("sign in")

    // window.api.send("saveUserData", "penis")

    next()
}

function next() {
    setup.iterate()
}