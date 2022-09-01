/*
1 meter = 3.28084 feet
1 liter = 0.264172 gallon
1 kilogram = 2.20462 pound
*/

// Elements
unitInputEl = document.getElementById("unit-input")
lengthOutputEl = document.getElementById("length-output")
volumeOutputEl = document.getElementById("volume-output")
massOutputEl = document.getElementById("mass-output")

// Button
convertBtn = document.getElementById("convert-btn")

// Conversion numbers
const feetPerMeter = 3.28084
const gallonsPerLiter = 0.264172
const poundsPerKilo = 2.20462

// Run calculate on app start
calculate()

convertBtn.addEventListener("click", function() {
  calculate()
})

function calculate() {
  let unitInput = Number(unitInputEl.value)
  calculateLength(unitInput)
  calculateVolume(unitInput)
  calculateMass(unitInput)
}

function calculateLength(unitInput) {
  let feetFromMeters = (unitInput * feetPerMeter).toFixed(3)
  let metersFromFeet = (unitInput / feetPerMeter).toFixed(3)
  lengthOutputEl.textContent = `${unitInput} meters = ${feetFromMeters} feet | 20 feet = ${metersFromFeet} meters`
}

function calculateVolume(unitInput) {
  let gallonsFromLiters = (unitInput * gallonsPerLiter).toFixed(3)
  let litersFromGallons = (unitInput / gallonsPerLiter).toFixed(3)
  volumeOutputEl.textContent = `${unitInput} liters = ${gallonsFromLiters} gallons | 20 gallons = ${litersFromGallons} liters`
}

function calculateMass(unitInput) {
  let poundsFromKilos = (unitInput * poundsPerKilo).toFixed(3)
  let kilosFromPounds = (unitInput / poundsPerKilo).toFixed(3)
  massOutputEl.textContent = `${unitInput} kilos = ${poundsFromKilos} pounds | 20 pounds = ${kilosFromPounds} kilos`
}
