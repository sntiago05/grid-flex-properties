
const buttonsCols = document.querySelectorAll("[data-cols]")
const containerTemplate = document.querySelector(".container-template")

buttonsCols.forEach(btn => {
    btn.addEventListener("click", () => {
        containerTemplate.style.gridTemplateColumns = btn.dataset.cols
    })
})

const buttonsRows = document.querySelectorAll("[data-rows]")

buttonsRows.forEach(btn => {
    btn.addEventListener("click", () => {
        containerTemplate.style.gridTemplateRows = btn.dataset.rows
    })
})


const containerGap = document.querySelector(".container-gap")

document.querySelectorAll("[data-gap]").forEach(btn => {
    btn.addEventListener("click", () => {
        containerGap.style.gap = btn.dataset.gap
    })
})

document.querySelectorAll("[data-col-gap]").forEach(btn => {
    btn.addEventListener("click", () => {
        containerGap.style.columnGap = btn.dataset.colGap
    })
})

document.querySelectorAll("[data-row-gap]").forEach(btn => {
    btn.addEventListener("click", () => {
        containerGap.style.rowGap = btn.dataset.rowGap
    })
})


let activeBox = document.querySelector(".container-position .active")

document.querySelectorAll(".container-position .box").forEach(box => {
    box.addEventListener("click", () => {
        document.querySelector(".container-position .active")?.classList.remove("active")
        box.classList.add("active")
        activeBox = box
    })
})

document.querySelectorAll("[data-grid-col]").forEach(btn => {
    btn.addEventListener("click", () => {
        activeBox.style.gridColumn = btn.dataset.gridCol
    })
})

document.querySelectorAll("[data-grid-row]").forEach(btn => {
    btn.addEventListener("click", () => {
        activeBox.style.gridRow = btn.dataset.gridRow
    })
})


const containerAutofill = document.querySelector(".container-autofill")

document.querySelectorAll("[data-autofill]").forEach(btn => {
    btn.addEventListener("click", () => {
        containerAutofill.style.gridTemplateColumns = btn.dataset.autofill
    })
})

const containerAlign = document.querySelector(".container-align")

document.querySelectorAll("[data-justify-items]").forEach(btn => {
    btn.addEventListener("click", () => {
        containerAlign.style.justifyItems = btn.dataset.justifyItems
    })
})

document.querySelectorAll("[data-align-items]").forEach(btn => {
    btn.addEventListener("click", () => {
        containerAlign.style.alignItems = btn.dataset.alignItems
    })
})

document.querySelectorAll("[data-justify-content]").forEach(btn => {
    btn.addEventListener("click", () => {
        containerAlign.style.justifyContent = btn.dataset.justifyContent
    })
})

document.querySelectorAll("[data-align-content]").forEach(btn => {
    btn.addEventListener("click", () => {
        containerAlign.style.alignContent = btn.dataset.alignContent
    })
})

const containerAreas = document.querySelector(".container-areas")

const layouts = {
    classic: {
        cols: "1fr 1fr 1fr",
        rows: "auto auto auto",
        areas: `"header  header  header"
                "sidebar main    main"
                "footer  footer  footer"`,
        html: `<div class="box area-header">header</div>
               <div class="box area-sidebar">sidebar</div>
               <div class="box area-main">main</div>
               <div class="box area-footer">footer</div>`
    },
    "no-sidebar": {
        cols: "1fr 1fr 1fr",
        rows: "auto auto auto",
        areas: `"header header header"
                "main   main   main"
                "footer footer footer"`,
        html: `<div class="box area-header">header</div>
               <div class="box area-main">main</div>
               <div class="box area-footer">footer</div>`
    },
    "three-cols": {
        cols: "1fr 1fr 1fr",
        rows: "auto auto",
        areas: `"header header header"
                "col1   col2   col3"`,
        html: `<div class="box area-header">header</div>
               <div class="box" style="grid-area:col1;background:#dbeafe">col 1</div>
               <div class="box" style="grid-area:col2;background:#ede9fe">col 2</div>
               <div class="box" style="grid-area:col3;background:#dcfce7">col 3</div>`
    }
}

document.querySelectorAll("[data-layout]").forEach(btn => {
    btn.addEventListener("click", () => {
        const layout = layouts[btn.dataset.layout]
        containerAreas.style.gridTemplateColumns = layout.cols
        containerAreas.style.gridTemplateRows = layout.rows
        containerAreas.style.gridTemplateAreas = layout.areas
        containerAreas.innerHTML = layout.html
    })
})