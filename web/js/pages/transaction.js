"use strict"

class Transaction {
    rawTransactionData = {}

    tag = null

    overridedAmount = false

    /**
     * Transaction factory method
     * @returns a new Transaction instance with default values
     */
    static create() {
        return new Transaction()
    }
}

//Add and delete