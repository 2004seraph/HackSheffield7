var titleText = document.getElementById("report-title")

var creditSales = document.getElementById("credit-sales")
var cashSales = document.getElementById("cash-sales")
var salesReturns = document.getElementById("sales-returns")
var cashReturns = document.getElementById("cash-returns")
var netRevenue = document.getElementById("net-revenue")
var revenueSectionElements = [cashSales, salesReturns, cashReturns]

var purchases = document.getElementById("purchases")
var openingInventory = document.getElementById("opening-inventory")
var purchaseReturns = document.getElementById("purchase-returns")
var closingInventory = document.getElementById("closing-inventory")
var netCostOfSales = document.getElementById("net-cost-of-sales")

var grossProfit = document.getElementById("gross-profit")


// var cashSales = document.getElementById("cash-sales").parentElement.parentElement
// cashSales.parentNode.removeChild(cashSales)

var insertionData = []

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

}


// FUNCTION CALLS TO UDPATE EVERYTHING

updateTitle("Jakub Bala", "22/04/22")

updateRevenueSection(400, 0, 0, 0, 0)


