var titleText = document.getElementById("report-title")

var cashSales = document.getElementById("cash-sales").parentElement
cashSales.removeChild()

var insertionData = []

function updateTitle(name, yearEnd){
    titleText.textContent = "Income Statement for " + name + " for the Year Ended " + yearEnd
}


updateTitle("Jakub Bala", "22/04/22")