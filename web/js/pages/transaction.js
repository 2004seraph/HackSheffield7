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

    constructor(data) {
        this.rawTransactionData = data

        if(data.amount > 0) {
            this.valueSign = "pos";
        } else {
            this.valueSign = "neg";
        }

        this.html = `
        <div class="transaction-div">
            <div class="date-and-tag">
                <span class="tr-date">` + data.timestamp + `</span><span class="tr-tag">` + this.tag + `</span>
            </div>
            <div class="name-and-amount">
                <span class="tr-name">` + data.message + `</span><span class="tr-amount value-` + this.valueSign + `">£` + data.amount + `</span>
            </div>
            <div class="tr-reference">
                ` + data.message + `
            </div>
        </div>`;
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

    append() {
        document.getElementById("transactions-container").appendChild(html);
    }
}

// transactions = [Transaction()];
//Add and delete
