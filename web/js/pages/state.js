"use strict"

class ProgramState {
    basicConfig = {
        completed: false,

        accountID: -1,
        businessName: "",
        financialYearEnd: ""
    }

    accountData = {}

    /**
     * List of type Transaction
     */
    transactions = []

    /**
     * List of type Tag
     */
    tags = []

    /**
     * A factory method for a fresh program state
     * @returns A new program state instance
     */
    static create() {
        return new ProgramState()
    }
}