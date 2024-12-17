
clear()

let dishes = []
let boxes = document.querySelectorAll('.box-holder.top-row-no-margin')

for (let box of boxes) {

    let order = parseInt(box.querySelectorAll('.order')[0].innerHTML)
    let title = box.querySelectorAll('.title')[0].innerHTML
    let subtitle = box.querySelectorAll('.subtitle')[0].innerHTML
    let rating = parseFloat(box.querySelectorAll('.rating span')[0].innerHTML)
    let country = box.querySelectorAll('.text span')[0].innerHTML
    let iconicElement = box.querySelectorAll('.content-bottom .text')
    let iconic = iconicElement.length > 0 ? iconicElement[0].innerText : ""

    dishes.push({"position":order, "title": title, "subtitle": subtitle, "rating": rating, "country": country, "iconic": iconic})

}


dishes