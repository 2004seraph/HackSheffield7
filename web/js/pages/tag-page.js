function createTag() {
    let tagName = document.getElementById("create-tag-name").value
    let tagDesc = document.getElementById("create-tag-desc").value
    let tagExcl = document.getElementById("create-tag-excl").value
    let tagType = document.getElementById("create-tag-type").value

    let newTag = new Tag(tagName, tagDesc, tagExcl, tagType, [])
    GlobalUserData.tags[tagName] = newTag
    drawTag(newTag)
}

function drawTag(tag) {
    let container = document.getElementById("tag-list")

    let tagElement = document.createElement("div")
    tagElement.classList.add("tag-div")
    container.appendChild(tagElement)

    let tagName = document.createElement("h3")
    tagName.textContent = tag.name
    tagElement.appendChild(tagName)

    let tagDesc = document.createElement("p")
    tagDesc.textContent = tag.desc
    tagElement.appendChild(tagDesc)

    let tagExcl = document.createElement("input")
    tagExcl.type = "checkbox"
    tagExcl.value = tag.excl
    tagElement.appendChild(tagExcl)

    let tagType = document.createElement("h4")
    tagType.textContent = tag.type
    tagElement.appendChild(tagType)
}