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
  creditSalesValue,
  cashSalesValue,
  salesReturnsValue,
  cashReturnsValue,
  netRevenueValue
) {
  //if any of the below are 0, they are deleted off of the IS, unless it is credit sales
  creditSales.textContent = creditSalesValue;

  if (cashSales != 0) {
    cashSales.textContent = cashSalesValue;
  } else {
    cashSales.parentElement.parentElement.parentNode.removeChild(
      cashSales.parentNode.parentNode
    );
  }

  if (salesReturns != 0) {
    salesReturns.textContent = salesReturnsValue;
  } else {
    salesReturns.parentElement.parentElement.parentNode.removeChild(
      salesReturns.parentNode.parentNode
    );
  }

  if (cashReturns != 0) {
    cashReturns.textContent = cashReturnsValue;
  } else {
    cashReturns.parentElement.parentElement.parentNode.removeChild(
      cashReturns.parentNode.parentNode
    );
  }

  netRevenue.textContent = netRevenueValue;
}

function updateCostOfSalesSection(
  purchasesValue,
  openingInventoryValue,
  purchaseReturnsValue,
  closingInventoryValue,
  netCostOfSalesValue
) {
  //if any of the below are 0, they are deleted off of the IS, unless it is purchases
  purchases.textContent = purchasesValue;

  if (openingInventory != 0) {
    openingInventory.textContent = openingInventoryValue;
  } else {
    openingInventory.parentElement.parentElement.parentNode.removeChild(
      openingInventory.parentNode.parentNode
    );
  }

  if (purchaseReturnsValue != 0) {
    purchaseReturns.textContent = purchaseReturnsValue;
  } else {
    purchaseReturns.parentElement.parentElement.parentNode.removeChild(
      purchaseReturns.parentNode.parentNode
    );
  }

  if (closingInventoryValue != 0) {
    closingInventory.textContent = closingInventoryValue;
  } else {
    closingInventory.parentElement.parentElement.parentNode.removeChild(
      closingInventory.parentNode.parentNode
    );
  }

  netCostOfSales.textContent = netCostOfSalesValue;
}

function updateGrossProfit(grossProfitValue) {
  grossProfit.textContent = grossProfitValue;
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
