
const buttons = document.querySelectorAll("[data-justify]")
const buttonsDir = document.querySelectorAll("[data-direction]")
const buttonsAlign = document.querySelectorAll("[data-align]")
const containerJustify = document.querySelector(".container-justify")
const containerDirection = document.querySelector(".container-direction")
const containerAlign = document.querySelector(".container-align")
const buttonsWrap = document.querySelectorAll("[data-wrap]")
const buttonsContent = document.querySelectorAll("[data-content]")
const containerWrap = document.querySelector(".container-wrap")
const containerContent = document.querySelector(".container-content")

setupControls(buttonsWrap, containerWrap, [
    "wrap",
    "nowrap",
    "wrap-reverse"
], "wrap")
setupControls(buttons, containerJustify, [
    "justify-start",
    "justify-center",
    "justify-end",
    "justify-between",
    "justify-around",
    "justify-evenly"
], "justify")
setupControls(buttonsDir, containerDirection, [
    "row",
    "row-reverse",
    "column",
    "column-reverse"
], "direction")
setupControls(buttonsAlign, containerAlign, [
    "align-start",
    "align-center",
    "align-end",
    "align-stretch",
    "align-baseline"
]
    , "align")
setupControls(buttonsWrap, containerWrap, [
    "wrap",
    "nowrap",
    "wrap-reverse"
], "wrap")
setupControls(buttonsContent, containerContent, [
    "content-start",
    "content-center",
    "content-end",
    "content-between",
    "content-around",
    "content-stretch"
], "content")
function setupControls(buttons, container, classes, dataKey) {
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            container.classList.remove(...classes)
            container.classList.add(button.dataset[dataKey])
        })
    })


    let activeBox = document.querySelector(".active")

    document.querySelectorAll(".container-items .box").forEach(box => {
        box.addEventListener("click", () => {
            document.querySelector(".active")?.classList.remove("active")
            box.classList.add("active")
            activeBox = box
        })
    })

    setupItemControls("[data-grow]", "flexGrow", "grow")
    setupItemControls("[data-shrink]", "flexShrink", "shrink")
    setupItemControls("[data-basis]", "flexBasis", "basis")
    setupItemControls("[data-order]", "order", "order")
    setupItemControls("[data-self]", "alignSelf", "self")
    function setupItemControls(selector, property, dataKey) {
        const buttonsF = document.querySelectorAll(selector)

        buttonsF.forEach(btn => {
            btn.addEventListener("click", () => {
                activeBox.style[property] = btn.dataset[dataKey]
            })
        })
    }
}

