"use strict"

class TabsetNotebook {
    constructor(mainElement) {
        this.element = mainElement
        this.tablinks = this.element.querySelector('.tabset-links')
        this.tabcontent = this.element.querySelector('.tabset-contents')

        const tablinks_list = Array.from(this.tablinks.children)
        const tabcontent_list = Array.from(this.tabcontent.children)

        tablinks_list.forEach(tab => {
            tab.addEventListener('click', () => {
                tabcontent_list.forEach(tabInfo => {
                    tabInfo.classList.add('hidden')
                })

                console.log("click: " + tab.name + " " + this.tabcontent + " " + this.tabcontent.id)
                console.log(this.tabcontent.querySelector('#' + tab.name))
                this.tabcontent.querySelector('#' + tab.name).classList.remove("hidden")
            })
        })
    }
}