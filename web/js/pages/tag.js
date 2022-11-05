"use strict"

class Tag {
    /**
     * Tag data type
     * @param {string} name 
     * @param {string} desc 
     * @param {boolean} excl 
     * @param {string} type 
     * @param {object} rules 
     */
    constructor(name, desc, excl, type, rules) {
        this.name = name
        this.desc = desc
        this.excl = excl
        this.type = type
        this.rules = rules
    }
    /**
     * Tag factory method
     * @returns a new tag instance with default values
     */
    static create() {
        return new Tag("Un-named tag", "", false)
    }
}

//Undefined inflow = treat as other income - indentified by account name
//