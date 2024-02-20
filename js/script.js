// dati utente
const km = prompt('Quanti km vuoi percorrere?');
const age = prompt('Quanti anni hai?');

console.log(km, age);

// calcolo prezzo (senza sconti)
let price = km * 0.21;

console.log('Prezzo base: €', price);

// condizioni eventuali sconti
if (age < 18) {
  price = price - price * 20 / 100;
  console.log('Prezzo con sconto minorenni 20%: €', price.toFixed(2));
} else if (age > 65) {
  price = price - price * 40 / 100;
  console.log('Prezzo con sconto over 65 40%: €', price.toFixed(2));
} else {
  console.log('Prezzo base: €', price.toFixed(2));
}

// output prezzo in pagina
document.getElementById('output').innerHTML += '€' + ' ' + price.toFixed(2);