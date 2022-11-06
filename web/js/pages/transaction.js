"use strict";

class Transaction {
    rawTransactionData = {};

    tag = null;
    // date = null;
    // name = null;
    // amount = 0;
    reference = null;
    overridedAmount = false;
    valueSign = "pos";

    constructor() {
        if(amount > 0) {
            valueSign = "pos";
        } else {
            valueSign = "neg";
        }
    }

    html = `<div class="transaction-div">\
                <div class="date-and-tag">\
                    <span class="tr-date">{date}</span><span class="tr-tag">{tag}</span>\
                </div>\
                <div class="name-and-amount">\
                    <span class="tr-name">{name}</span><span class="tr-amount value-{valueSign}">£{amount}</span>\
                </div>\
                <div class="tr-reference">\
                    {reference}\
                </div>\
            </div>`;



    /**
     * Transaction factory method
     * @returns a new Transaction instance with default values
     */
    static create() {
        t = new Transaction();
        t.append();
        return t;
    };

    append() {
        document.getElementById("transactions-container").appendChild(html);
    }
}

// transactions = [Transaction()];
//Add and delete
