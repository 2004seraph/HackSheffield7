function createTag() {
    let tagName = document.getElementById("create-tag-name").value
    let tagDesc = document.getElementById("create-tag-desc").value
    let tagExcl = document.getElementById("create-tag-excl").value
    let tagType = document.getElementById("create-tag-type").value

    GlobalUserData.tags[tagName] = new Tag(tagName, tagDesc, tagExcl, tagType, [])
}

function drawTag(tag, parent) {
    let tagElement = document.createElement("div")
}