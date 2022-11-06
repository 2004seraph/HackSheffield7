"use strict"

function loadAllTransactions(allUserData){

    console.log(allUserData)

    let allUserTransactions = allUserData.transactions

    postTransactions(allUserTransactions);
}