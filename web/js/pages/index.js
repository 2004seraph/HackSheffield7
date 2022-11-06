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

window.api.receive("transactionData", (event, data) => {
    console.log(data)
})

function signIn() {
    console.log("sign in")

    document.getElementById("loading-indicator").classList.remove("hidden")

    window.api.send('getUserPurchases', {id: document.getElementById("accountID").value})
    //     console.log(data)
    // })

    // const headers = new Headers()
    // headers.append("Content-Type", "application/json")
    // headers.append("Authorization", "Bearer " + AUTHJWT)
    // headers.append("version", "1.0")

    // const myInit = {
    //     method: 'GET',
    //     headers: headers
    // }

    // const myRequest = new Request('https://sandbox.capitalone.co.uk/developer-services-platform-pr/api/data/transactions/accounts/' + document.getElementById("accountID").value + "/transactions")
    // let status
    // fetch(myRequest, myInit)
    //     .then((response) => {
    //         console.log("response")
    //         console.log(response)
    //         console.log(response.body)

    //         status = response.status
            
    //         const reader = response.body.getReader();
    //         let x = new ReadableStream({
    //             start(controller) {
    //                 return pump();
    //                 function pump() {
    //                 return reader.read().then(({ done, value }) => {
    //                     // When no more data needs to be consumed, close the stream
    //                     if (done) {
    //                     controller.close();
    //                     return;
    //                     }
    //                     // Enqueue the next data chunk into our target stream
    //                     controller.enqueue(value);
    //                     return pump();
    //                 });
    //                 }
    //             }
    //         })
    //     })
    //     .then((stream) => new Response(stream))
    //     .then((response) => {
    //         response.blob().then((result) => {
    //             console.log(result)

    //             if (status == 200) {
    //                 const fr = new FileReader()

    //                 fr.onload = (e) => {
    //                     console.log(JSON.parse(e.target.result))
    //                 }

    //                 fr.readAsText(result)
    //                 next()
    //             }
    //         })
    //     })
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