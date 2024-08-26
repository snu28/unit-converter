const metricBtn = document.getElementById("metric-btn")
const imperialBtn = document.getElementById("imperial-btn")
const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
const lengthTitle = document.getElementById("length-title")
const volumeTitle = document.getElementById("volume-title")
const massTitle = document.getElementById("mass-title")
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")
const outputEl = document.getElementById("output-section")
const titles = document.getElementsByClassName("units")
let currentUnits = "IMPERIAL"

function swapUnit(unit){

    if (unit==="IMPERIAL"){
        lengthTitle.textContent = "Length (Metres -> Feet)"
        massTitle.textContent = "Mass (Kilograms -> Pounds)"
        volumeTitle.textContent = "Volume (Litres -> Gallons)"
        

    }else if (unit==="METRIC"){
        lengthTitle.textContent = "Length (Feet -> Metres)"
        massTitle.textContent = "Mass (Pounds -> Kilograms)"
        volumeTitle.textContent = "Volume (Gallons -> Litres)"


    }

    currentUnits = unit


}

function convert(unit){

    if (inputEl.value){


        if (unit === "IMPERIAL") {
            lengthEl.insertAdjacentHTML("beforeend", `<p>${inputEl.value}m = ${(inputEl.value * 3.281).toFixed(3)}ft</p>`);
            massEl.insertAdjacentHTML("beforeend", `<p>${inputEl.value}kg = ${(inputEl.value * 2.205).toFixed(3)}lbs</p>`);
            volumeEl.insertAdjacentHTML("beforeend", `<p>${inputEl.value}l = ${(inputEl.value / 3.785).toFixed(3)}US gal</p>`);
        } else if (unit === "METRIC") {
            lengthEl.insertAdjacentHTML("beforeend", `<p>${inputEl.value}ft = ${(inputEl.value / 3.281).toFixed(3)}m</p>`);
            massEl.insertAdjacentHTML("beforeend", `<p>${inputEl.value}lbs = ${(inputEl.value / 2.205).toFixed(3)}kg</p>`);
            volumeEl.insertAdjacentHTML("beforeend", `<p>${inputEl.value}US gal = ${(inputEl.value * 3.785).toFixed(3)}l</p>`);
        }
        
    }

}


function clearParas(){
    const paragraphs = outputEl.querySelectorAll('p')
    paragraphs.forEach(p => p.remove())
}







imperialBtn.addEventListener("click", function(){
    swapUnit("IMPERIAL")
 
})

metricBtn.addEventListener("click", function(){
    swapUnit("METRIC")
   
    
})



convertBtn.addEventListener("click",function(){
    clearParas()
    convert(currentUnits)
})