"use strict";

class Transaction {
    rawTransactionData = {};

    tag = null;
    overridedAmount = false;

    constructor(data) {
        this.rawTransactionData = data
    }

    /**
     * Transaction factory method
     * @returns a new Transaction instance with default values
     */
    static create(data) {
        let t = new Transaction(data);
        // t.append();
        return t;
    };

    append(element) {
        document.getElementById("transactions-container").appendChild(html);
    }
}