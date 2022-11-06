let titleText = document.getElementById("report-title");

let tableElement = document.getElementById("table-contents");
let incomesEnd = document.getElementById("other-incomes-section-end");
let expensesEnd = document.getElementById("expenses-section-end");

let creditSales = document.getElementById("credit-sales");
let cashSales = document.getElementById("cash-sales");
let salesReturns = document.getElementById("sales-returns");
let cashReturns = document.getElementById("cash-returns");
let netRevenue = document.getElementById("net-revenue");

let purchases = document.getElementById("purchases");
let openingInventory = document.getElementById("opening-inventory");
let purchaseReturns = document.getElementById("purchase-returns");
let closingInventory = document.getElementById("closing-inventory");
let netCostOfSales = document.getElementById("net-cost-of-sales");

let grossProfit = document.getElementById("gross-profit");

let netOtherIncomes = document.getElementById("net-other-incomes");
let netExpenses = document.getElementById("net-expenses");

let profitLoss = document.getElementById("profit-loss");

// let cashSales = document.getElementById("cash-sales").parentElement.parentElement
// cashSales.parentNode.removeChild(cashSales)

let insertionData = [];

function updateTitle(name, yearEnd) {
  titleText.textContent =
    "Income Statement for " + name + " for the Year Ended " + yearEnd;
}

function updateRevenueSection(
  creditSales,
  cashSales,
  salesReturns,
  cashReturns,
  netRevenue
) {
  //if any of the below are 0, they are deleted off of the IS, unless it is credit sales
  creditSales.textContent = creditSales;

  if (cashSales != 0) {
    cashSales.textContent = cashSales;
  } else {
    cashSales.parentElement.parentElement.parentNode.removeChild(
      cashSales.parentNode.parentNode
    );
  }

  if (salesReturns != 0) {
    salesReturns.textContent = salesReturns;
  } else {
    salesReturns.parentElement.parentElement.parentNode.removeChild(
      salesReturns.parentNode.parentNode
    );
  }

  if (cashReturns != 0) {
    cashReturns.textContent = cashReturns;
  } else {
    cashReturns.parentElement.parentElement.parentNode.removeChild(
      cashReturns.parentNode.parentNode
    );
  }

  netRevenue.textContent = netRevenue;
}

function updateCostOfSalesSection(
  purchases,
  openingInventory,
  purchaseReturns,
  closingInventory,
  netCostOfSales
) {
  //if any of the below are 0, they are deleted off of the IS, unless it is purchases
  purchases.textContent = purchases;

  if (openingInventory != 0) {
    openingInventory.textContent = openingInventory;
  } else {
    openingInventory.parentElement.parentElement.parentNode.removeChild(
      openingInventory.parentNode.parentNode
    );
  }

  if (purchaseReturns != 0) {
    purchaseReturns.textContent = purchaseReturns;
  } else {
    purchaseReturns.parentElement.parentElement.parentNode.removeChild(
      purchaseReturns.parentNode.parentNode
    );
  }

  if (closingInventory != 0) {
    closingInventory.textContent = closingInventory;
  } else {
    closingInventory.parentElement.parentElement.parentNode.removeChild(
      closingInventory.parentNode.parentNode
    );
  }

  netCostOfSales.textContent = netCostOfSales;
}

function updateGrossProfit(grossProfit) {
  grossProfit.textContent = grossProfit;
}

function updateOtherIncomesTotal(value) {
  netOtherIncomes.textContent = value;
}

function updateExpensesTotal(value) {
  netExpenses.textContent = value;
}

function updateProfitLoss(value) {
  profitLoss.textContent = value;
}

function AddEntryToIncomes(name, value) {
  let parentNode = tableElement;

  let newRow = document.createElement("tr");
  let referenceNode = incomesEnd;

  console.log(referenceNode);
  console.log(newRow);

  let insertedRow = parentNode.insertBefore(newRow, referenceNode);

  for (let i = 0; i < 3; i++) {
    let td = document.createElement("td");

    if (i == 0) {
      td.textContent = name + ":";
    }
    if (i == 1) {
      td.textContent = value;
    }
    insertedRow.appendChild(td);
  }
}

function AddEntryToExpenses(name, value) {
  let parentNode = tableElement;

  let newRow = document.createElement("tr");
  let referenceNode = expensesEnd;

  console.log(referenceNode);
  console.log(newRow);

  let insertedRow = parentNode.insertBefore(newRow, referenceNode);

  for (let i = 0; i < 3; i++) {
    let td = document.createElement("td");

    if (i == 0) {
      td.textContent = name + ":";
    }
    if (i == 1) {
      td.textContent = value;
    }
    insertedRow.appendChild(td);
  }
}

// function print() {
//   var newcontent = document.getElementById("report-container").innerHTML;
//   var actContents = document.body.innerHTML;
//   document.body.innerHTML = newcontent;
//   console.log("asd");
//   window.print();
//   console.log("xcv");
//   document.body.innerHTML = actContents;
// }

// FUNCTION CALLS TO UDPATE EVERYTHING

updateTitle("Jakub Bala", "22/04/22");

updateRevenueSection(400, 0, 0, 0, 400);

updateCostOfSalesSection(300, 0, 100, 0, 200);

updateGrossProfit(6000);

updateOtherIncomesTotal(260);

updateExpensesTotal("who knows");

updateProfitLoss("like 2 dorra");

AddEntryToIncomes("Rent Recieved", 260);

AddEntryToExpenses("Wages", 980);
AddEntryToExpenses("Marketing", 410);
AddEntryToExpenses("Rahman Gupta appointments", 9400);
