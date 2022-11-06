"use strict";

let UserDataCache = { basicConfig: {} };

let firstTimeSetupElement = document.getElementById("first-time-set-up");

let setup = new StagedConfig(firstTimeSetupElement, () => {
  UserDataCache.basicConfig.completed = true;

  window.api.send("saveUserData", UserDataCache);
  //save state to file

  gotoDashboard();
});

//check if state exists, if so, skip to dash
window.api.sendInvoke("getUserData", null).then((data) => {
  if (Object.hasOwn(data, "basicConfig")) {
    if (data.basicConfig.completed) {
      gotoDashboard();
    } else {
      UserDataCache = ProgramState.create();
      firstTimeSetupElement.classList.remove("hidden");
    }
  } else {
    UserDataCache = ProgramState.create();
    firstTimeSetupElement.classList.remove("hidden");
  }
});

function gotoDashboard() {
  document.getElementById("dashboard-redirect").click();
}

//Only show the next UI when the data is recieved
window.api.receive("transactionData", (event, data) => {
  document.getElementById("sign-in").classList.add("hidden");
  document.getElementById("info").classList.remove("hidden");

  let transactions = JSON.parse(data)
  for (let element of transactions.Transactions) {
    
  }
})

function signIn() {
  console.log("sign in");

  document.getElementById("loading-indicator").classList.remove("hidden");

  window.api.send("getUserPurchases", {
    id: document.getElementById("accountID").value,
  });
}

function next() {
  switch (setup.stage) {
    case 0:
      UserDataCache.basicConfig.accountID =
        document.getElementById("accountID").value;
      document.getElementById("info").classList.add("hidden");
      document.getElementById("prefs").classList.remove("hidden");
      break;
    case 1:
      UserDataCache.basicConfig.businessName =
        document.getElementById("businessName").value;
      UserDataCache.basicConfig.financialYearEnd =
        document.getElementById("finyeardate").value;
      break;
    case 2:
      break;
  }

  setup.iterate();
}
