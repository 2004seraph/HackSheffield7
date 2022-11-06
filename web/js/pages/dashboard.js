"use strict";

let mainNotebook = new TabsetNotebook(document.getElementById("main-notebook"));

let GlobalUserData = {};
let pieChart = null;

window.api.sendInvoke("getUserData", null).then((data) => {
  GlobalUserData = data;
  console.log(GlobalUserData);

  //program state

  //invoke chart functions

  let dataset = [0, 0];
  let labels = ["Income", "Outflow"];

  for (let i = 0; i < GlobalUserData.transactions.length; i++) {
    console.log();
    let ts = GlobalUserData.transactions[i].rawTransactionData.timestamp;
    let amt = GlobalUserData.transactions[i].rawTransactionData;
    if (new Date().toISOString().substring(0, 4) - ts.substring(0, 4) < 1) {
      console.log(amt.amount);
      if (amt.amount > 0) {
        dataset[0] += amt.amount;
      } else {
        dataset[1] -= amt.amount;
      }
    }
  }
  console.log(dataset);

  pieChart = new Chart(canvas, {
    type: "pie",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Transactions in the last year",
          backgroundColor: ["rgb(100, 50, 250)", "rgb(255, 0, 0)"],
          data: dataset,
        },
      ],
      hoverOffset: 5,
    },
  });
});
