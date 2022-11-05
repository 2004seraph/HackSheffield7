var titleText = document.getElementById("report-title")

var tableElement = document.getElementById("table-contents")
var incomesEnd = document.getElementById("other-incomes-section-end")
var expensesEnd = document.getElementById("expenses-section-end")

var creditSales = document.getElementById("credit-sales")
var cashSales = document.getElementById("cash-sales")
var salesReturns = document.getElementById("sales-returns")
var cashReturns = document.getElementById("cash-returns")
var netRevenue = document.getElementById("net-revenue")

var purchases = document.getElementById("purchases")
var openingInventory = document.getElementById("opening-inventory")
var purchaseReturns = document.getElementById("purchase-returns")
var closingInventory = document.getElementById("closing-inventory")
var netCostOfSales = document.getElementById("net-cost-of-sales")

var grossProfit = document.getElementById("gross-profit")


// var cashSales = document.getElementById("cash-sales").parentElement.parentElement
// cashSales.parentNode.removeChild(cashSales)

let insertionData = []

function updateTitle(name, yearEnd){
    titleText.textContent = "Income Statement for " + name + " for the Year Ended " + yearEnd
}

function updateRevenueSection(creditSales, cashSales, salesReturns, cashReturns, netRevenue){

    //if any of the below are 0, they are deleted off of the IS, unless it is credit sales
    this.creditSales.textContent = creditSales

    if(cashSales != 0){
        this.cashSales.textContent = cashSales
    }
    else{
        this.cashSales.parentElement.parentElement.parentNode.removeChild(this.cashSales.parentNode.parentNode)
    }

    if(salesReturns != 0){
        this.salesReturns.textContent = salesReturns
    }
    else{
        this.salesReturns.parentElement.parentElement.parentNode.removeChild(this.salesReturns.parentNode.parentNode)
    }

    if(cashReturns != 0){
        this.cashReturns.textContent = cashReturns
    }
    else{
        this.cashReturns.parentElement.parentElement.parentNode.removeChild(this.cashReturns.parentNode.parentNode)
    }

    this.netRevenue.textContent = netRevenue
}

function updateCostOfSalesSection(purchases, openingInventory, purchaseReturns, closingInventory, netCostOfSales){
    //if any of the below are 0, they are deleted off of the IS, unless it is purchases
    this.purchases.textContent = purchases

    if(openingInventory != 0){
        this.openingInventory.textContent = openingInventory
    }
    else{
        this.openingInventory.parentElement.parentElement.parentNode.removeChild(this.openingInventory.parentNode.parentNode)
    }

    if(purchaseReturns != 0){
        this.purchaseReturns.textContent = purchaseReturns
    }
    else{
        this.purchaseReturns.parentElement.parentElement.parentNode.removeChild(this.purchaseReturns.parentNode.parentNode)
    }

    if(closingInventory != 0){
        this.closingInventory.textContent = closingInventory
    }
    else{
        this.closingInventory.parentElement.parentElement.parentNode.removeChild(this.closingInventory.parentNode.parentNode)
    }

    this.netCostOfSales.textContent = netCostOfSales
}

function updateGrossProfit(grossProfit){
    this.grossProfit.textContent = grossProfit
}

function AddEntryToIncomes(name, value){

    let parentNode = tableElement

    let newRow = document.createElement("tr")
    let referenceNode = incomesEnd

    console.log(referenceNode)
    console.log(newRow)

    let insertedRow = parentNode.insertBefore(newRow, referenceNode);

    for(let i = 0; i < 3; i++){
        let td = document.createElement("td")

        if(i == 0){
            td.textContent = name + ":"
        }
        if(i == 1){
            td.textContent = value
        }
        insertedRow.appendChild(td)
    }
}


// FUNCTION CALLS TO UDPATE EVERYTHING

updateTitle("Jakub Bala", "22/04/22")

updateRevenueSection(400, 0, 0, 0, 400)

updateCostOfSalesSection(300, 0, 100, 0, 200)

updateGrossProfit(6000)

AddEntryToIncomes("Rent Recieved", 260)
