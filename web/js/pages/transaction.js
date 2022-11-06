"use strict";

class Transaction {
    rawTransactionData = {};

    tag = null;

    overridedAmount = false;

    value = document.getElementById("tr-amount");
    amount = this.value.value;
    if(amount > 0) {
        value.style.color = "green";
} else {
    value.style.color = "red";
    }

    /**
     * Transaction factory method
     * @returns a new Transaction instance with default values
     */
    static create() {
        return new Transaction();
    }
}

//Add and delete
