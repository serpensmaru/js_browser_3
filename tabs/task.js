function getIndElem(listElem, elem) {
    return listElem.indexOf(elem)
}

function activeTab(listElem, listContent, ind) {
    listElem[ind].className = "tab tab_active"
    listContent[ind].className = "tab__content tab__content_active"
}

function inActiveAll(listElem, listContent) {
    listElem.forEach((elem) => {elem.className = "tab"})
    listContent.forEach((elem) => {elem.className = "tab__content"})
}

let listElem = Array.from(document.querySelectorAll(".tab"))
let listContent = Array.from(document.querySelectorAll(".tab__content"))

for (let elem of listElem) {
    elem.addEventListener("click", () => {
        let ind = getIndElem(listElem, elem)
        inActiveAll(listElem, listContent)
        activeTab(listElem, listContent, ind)
    })
}



