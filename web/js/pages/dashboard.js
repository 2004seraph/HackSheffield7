"use strict"

const links = document.querySelectorAll('link[rel="import"]');
links.forEach((link) => {
    let template = link.import.querySelector("template");
    let clone = document.importNode(template.content, true);
    let target = "dashboard";
    document.getElementById(target).appendChild(clone);
});