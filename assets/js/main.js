
// Chiedi all'utente il suo nome

const userName = prompt('inserisci il tuo nome');
console.log(userName);

// Chiedi il suo cogniome

const userSecondName = prompt('inserisci il tuo cogniome');
console.log(userSecondName);

// Chiedil il suo colore preferito

const userFavoriteColor = prompt('inserisci il tuo colore preferito');
console.log(userFavoriteColor);

// Scrivi in pagina e console il risultato

const textElement = document.getElementById ('text');
textElement.innerHTML = userName + userSecondName + userFavoriteColor;
