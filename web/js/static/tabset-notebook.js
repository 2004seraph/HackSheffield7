"use strict"

class TabsetNotebook {
    constructor(mainElement) {
        this.element = mainElement
        this.tablinks = this.element.querySelector('.tabset-links')
        this.tabcontent = this.element.querySelector('.tabset-contents')

        this.tablinks_list = Array.from(this.tablinks.children)
        this.tabcontent_list = Array.from(this.tabcontent.children)

        this.tablinks_list.forEach(tab => {
            tab.addEventListener('click', () => {
                this.tabcontent_list.forEach(tabInfo => {
                    tabInfo.classList.add('hidden')
                })

                console.log("click: " + tab.name + " " + this.tabcontent + " " + this.tabcontent.id)
                console.log(this.tabcontent.querySelector('#' + tab.name))
                this.tabcontent.querySelector('#' + tab.name).classList.remove("hidden")
            })
        })

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