"use strict"

let mainNotebook = new TabsetNotebook(document.getElementById("main-notebook"))

let GlobalUserData = {}

window.api.sendInvoke('getUserData', null).then((data) => {
    GlobalUserData = data


    //program state

    //invoke chart functions
})