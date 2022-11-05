let setup = new StagedConfig(document.getElementById("first-time-set-up"), () => {
    document.getElementById("dashboard-redirect").click()
})

function signIn() {
    console.log("sign in")
    next()
}

function next() {
    setup.iterate()
}