var titleText = document.getElementById("report-title")


function updateTitle(name, yearEnd){
    titleText.textContent = "Income Statement for " + name + " for the Year Ended " + yearEnd
}


updateTitle("Jakub Bala", "22/04/22")