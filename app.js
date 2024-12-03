// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum };

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
module.exports = { sum, fromEuroToDollar }

yen = usd (usd a euro to euro a yen)

function fromDollarToYen(dollarAmount) {
    let euroAmount = dollarAmount / oneEuroIs["USD"]; 
    let yenAmount = euroAmount * oneEuroIs["JPY"];   
    return yenAmount;
}
function fromYenToPound(yenAmount) {
    let euroAmount = yenAmount / oneEuroIs["JPY"];   
    let poundAmount = euroAmount * oneEuroIs["GBP"];
    return poundAmount;
}

