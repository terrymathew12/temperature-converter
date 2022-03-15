// ask name
function askName() {
    var name = prompt("Enter your name:")
    return name 
}

var name = askName()

// ask for temperature
function asktemp() {
    var temperature = Number(prompt(`Welcome ${name}, what is the temperature you wish to convert?`))
    return temperature
}

var temperature = asktemp()

// ask for conversion type
function askconversion() {
    var conversion = prompt("Type '1' to convert to Fahrenheit to Celscius or type '2' to convert Celscius to Fahrenheit.")
    return conversion
}

var conversion = askconversion()
// conversion between f to c or c to f
if (conversion == 1) {
    function  FtoC() {
        var celcius = ((temperature - 32) * 5 / 9);
        return celcius
    }
    var t = FtoC()
    alert(`${t}Cº`)

} else if (conversion == 2) {
    function CtoF() {
        var fahrenheit = (temperature * 9 / 5 + 32);
        return fahrenheit
    }
    var t = CtoF()
    alert(`${t}Fº`)

} else {
    alert("Choose one of the options.")
}