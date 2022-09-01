/*
1 meter = 3.28084 feet
1 liter = 0.264172 gallon
1 kilogram = 2.20462 pound
*/

// Elements
const unitInputEl = document.getElementById("unit-input")
const lengthOutputEl = document.getElementById("length-output")
const volumeOutputEl = document.getElementById("volume-output")
const massOutputEl = document.getElementById("mass-output")

// Button
const convertBtn = document.getElementById("convert-btn")

// Conversion numbers
const feetPerMeter = 3.28084
const gallonsPerLiter = 0.264172
const poundsPerKilo = 2.20462

// Run calculate on app start
calculateAllUnits()

convertBtn.addEventListener("click", function() {
  calculateAllUnits()
})

function calculateAllUnits() {
  const unitInput = Number(unitInputEl.value)
  calculateLength(unitInput)
  calculateVolume(unitInput)
  calculateMass(unitInput)
}

function calculateLength(unitInput) {
  const feetFromMeters = (unitInput * feetPerMeter).toFixed(3)
  const metersFromFeet = (unitInput / feetPerMeter).toFixed(3)
  lengthOutputEl.textContent = `${unitInput} meters = ${feetFromMeters} feet | ${unitInput} feet = ${metersFromFeet} meters`
}

function calculateVolume(unitInput) {
  const gallonsFromLiters = (unitInput * gallonsPerLiter).toFixed(3)
  const litersFromGallons = (unitInput / gallonsPerLiter).toFixed(3)
  volumeOutputEl.textContent = `${unitInput} liters = ${gallonsFromLiters} gallons | ${unitInput} gallons = ${litersFromGallons} liters`
}

function calculateMass(unitInput) {
  const poundsFromKilos = (unitInput * poundsPerKilo).toFixed(3)
  const kilosFromPounds = (unitInput / poundsPerKilo).toFixed(3)
  massOutputEl.textContent = `${unitInput} kilos = ${poundsFromKilos} pounds | ${unitInput} pounds = ${kilosFromPounds} kilos`
}
