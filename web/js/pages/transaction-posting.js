"use strict"

function createTransactionEntry(dateVal, tagVal, nameVal, amountVal, referenceVal=""){

    let transactionsContainer = document.getElementById("transactions-container")

    let transactionEntry = document.createElement("div")
    transactionEntry.className = "transaction-div"
    transactionsContainer.appendChild(transactionEntry)


    let dateAndTag = document.createElement("div")
    dateAndTag.className = "date-and-tag"

    transactionEntry.appendChild(dateAndTag)
    let date = document.createElement("span")
    date.className = "tr-date"
    date.textContent = dateVal
    dateAndTag.appendChild(date)
    let tag = document.createElement("span")
    tag.className = "tr-tag"
    tag.textContent = "Tag: " + tagVal
    dateAndTag.appendChild(tag)


    let nameAndAmount = document.createElement("div")
    nameAndAmount.className = "name-and-amount"

    transactionEntry.appendChild(nameAndAmount)
    let name = document.createElement("span")
    name.className = "tr-name"
    name.textContent = nameVal
    nameAndAmount.appendChild(name)
    let amount = document.createElement("span")
    amount.classList.add("tr-amount")

    if(amountVal < 0){
        amount.textContent = "-£" + Math.abs(amountVal)
        amount.classList.add("value-neg")
    }
    else{
        amount.textContent = amountVal
        amount.classList.add("value-pos")
    }
    nameAndAmount.appendChild(amount)


    let reference = document.createElement("div")
    reference.className = "tr-reference"
    reference.textContent = referenceVal
    transactionEntry.appendChild(reference)

}


function postTransactions(allUserData){

    let allTransactions = allUserData.transactions

    if(allTransactions == undefined){
        console.log("NO TRANSACTIN DATA")
        return
    }

    console.log(allTransactions)

    for(let tr in allTransactions){
        let data = allTransactions[tr].rawTransactionData

        let timeDate = data.timestamp.substring(0, data.timestamp.indexOf(" "))
        
        let tag = allTransactions[tr].tag
        if(tag == null){
            tag = ""
        }

        let name = data.merchant.name

        let amount = data.amount

        let reference = data.message

        createTransactionEntry(timeDate, tag, name, amount, reference)
    }

    updateIncomeStatement(allUserData)
}

function updateIncomeStatement(allUserData){

    console.log("USER DATA")
    console.log(allUserData.basicConfig)

    updateTitle(allUserData.basicConfig.businessName, allUserData.basicConfig.financialYearEnd);

    updateRevenueSection(400, 0, 0, 0, 400);

    updateCostOfSalesSection(300, 0, 100, 0, 200);

    updateGrossProfit(6000);

    updateOtherIncomesTotal(260);

    updateExpensesTotal(500);

    updateProfitLoss(3400);

    AddEntryToIncomes("Rent Recieved", 260);

    AddEntryToExpenses("Wages", 980);
    AddEntryToExpenses("Marketing", 410);
    AddEntryToExpenses("Rahman Gupta appointments", 9400);
}