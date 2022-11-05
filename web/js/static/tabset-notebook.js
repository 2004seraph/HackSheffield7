"use strict"

class TabsetNotebook {
    constructor(mainElement) {
        this.element = mainElement

        this.tablinks = this.element.querySelector('.tabset-links')
        this.tabcontent = this.element.querySelector('.tabset-contents')

        this.tablinks_list = Array.from(this.tablinks.children)
        this.tabcontent_list = Array.from(this.tabcontent.children)

        //tab button event listener
        this.tablinks_list.forEach(tab => {
            tab.addEventListener('click', () => {
                //hide every other tab
                this.tabcontent_list.forEach(tabInfo => {
                    tabInfo.classList.add('hidden')
                })
                //show the desired tab
                this.tabcontent.querySelector('#' + tab.name).classList.remove("hidden")
            })
        })

        //show the default tab
        this.selectDefault()
    }

    selectDefault() {
        //start out with all tabs hidden
        this.tabcontent_list.forEach(tabInfo => {
            tabInfo.classList.add('hidden')
        })
        //show the default tab
        this.tablinks.querySelector('.tabset-link-default').click()
    }
}

//automatically set up all notebooks in the document
var TabsetNotebooks = []
const tabsetnotebooks = Array.from(document.getElementsByClassName('tabset-notebook')).forEach(notebook => {
    TabsetNotebooks.push(new TabsetNotebook(notebook))
})