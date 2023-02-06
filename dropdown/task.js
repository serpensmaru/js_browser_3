
let btnBaseList = document.querySelectorAll(".dropdown__value") // если таких кнопок много

for (let btnBase of btnBaseList) {
    btnBase.onclick = () => {   // открытие/закрытие подменю
        if (document.querySelector(".dropdown__list").className == "dropdown__list dropdown__list_active") {
            document.querySelector(".dropdown__list").className = "dropdown__list"
        } else {
            document.querySelector(".dropdown__list").className = "dropdown__list dropdown__list_active"
        }
    }

    let btnItemList = document.querySelectorAll(".dropdown__item") // замена текста кнопки на подзначение
    for (let elem of btnItemList) {
        const swapName = (e) => {
            document.querySelector(".dropdown__value").textContent = elem.textContent
            document.querySelector(".dropdown__list").className = "dropdown__list"
            e.preventDefault()
        }
        elem.addEventListener("click", swapName) 
    }
}