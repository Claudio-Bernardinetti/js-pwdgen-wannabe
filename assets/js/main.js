
// Chiedi all'utente il suo nome

const userName = prompt('inserisci il tuo nome');
console.log(userName);

// Chiedi il suo cogniome

const userSecondName = prompt('inserisci il tuo cogniome');
console.log(userSecondName);

// Chiedi il suo colore preferito

const userFavoriteColor = prompt('inserisci il tuo colore preferito');
console.log(userFavoriteColor);

// Calcolo anno di nascita

const userAge = prompt ("inserisci la tue eta'")
const currentYear = 2023;
const birthYear = currentYear - Number(userAge);
console.log(birthYear);

// Scrivi in pagina e console il risultato

const textElement = document.getElementById ('text');
textElement.innerHTML = userName + userSecondName + userFavoriteColor + birthYear;
console.log(userName+userSecondName+userFavoriteColor+birthYear);
