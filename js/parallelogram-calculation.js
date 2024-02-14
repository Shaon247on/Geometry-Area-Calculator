function calculationTriangleArea() {
    
    const base = getIdToNumber('triangle-base')
    const height = getIdToNumber('triangle-height')
    const area = base * height
    display2('outputT', area, 'Triangle')
}
function calculationRectangleArea() {
    
    const base = getIdToNumber('rectangle-base')
    const height = getIdToNumber('rectangle-height')
    const area = base * height
    display2('outputR', area, 'Rectangle')
}

function calculationParallelogramArea() {

    const base = getIdToNumber('parallelogram-base')
    const height = getIdToNumber('parallelogram-height')
    const area = base * height
    display2('outputP', area, 'Parallelogram')
}
function calculationRhombusArea (){
    const dOne = getIdToNumber('rhombus-base')
    const dTow = getIdToNumber('rhombus-height')
    const area = 0.5 * dOne * dTow
    display2('outputR2', area, 'Rhombus')
}


function calculationPentagonArea (){
    const base = getIdToNumber('pentagon-base')
    const height = getIdToNumber('pentagon-height')
    const area = 0.5 * base * height
    display2('outputP2', area, 'Pentagon')
}

function calculationEllipseArea (){
    const base = getIdToNumber('ellipse-base')
    const height = getIdToNumber('ellipse-height')
    const area = 3.14159265 * base * height
    display2('outputE', area, 'Ellipse')

}


function getIdToNumber(event) {
    const targetBase = document.getElementById(event)
    const inside = targetBase.value
    const number = parseFloat(inside)
    return number
}

function display(output, area) {
    const display = document.getElementById(output)
    display.innerText = area
}

function display2 (output, area, name){
    const newparagraph = document.createElement('p')
    const display = document.getElementById(output)
    display.innerText = area
    newparagraph.style.backgroundColor = "lightblue"    
    newparagraph.textContent = [`The ${name}'s area is ${area}`]
    const location = document.getElementById('result')
    location.appendChild(newparagraph)
    
    
    
}