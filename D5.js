/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

for (let i = 0; i < pets.length; i++) {
  let stampAnimal = pets[i];
  switch (stampAnimal) {
    case "dog":
      console.log("Is a dog");
      break;
    case "cat":
      console.log("Is a cat");
      break;
    case "hamster":
      stampAnimal = "hamster";
      console.log("Is a hamster");
      break;
    case "redfish":
      stampAnimal = "redfish";
      console.log("Is a redfish");
      break;
  }
}
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort;
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

let backOrderPets = pets.reverse();
console.log(backOrderPets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

pets.shift(4);
console.log(pets);
pets.push("redfish");
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà 
    "licensePlate"con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];
for (let i = 0; i < cars.length; i++) {
  (cars[0].licencePlate = "DF 825 GH"),
    (cars[1].licencePlate = "TR 825 LH"),
    (cars[0].licencePlate = "WF 825 OH");
  console.log(cars);
}

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", 
    rispettando la struttura degli 
    altri elementi. Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
let car = {
  brand: "bmw",
  model: "x5",
  color: "black",
  trims: ["sport", "turbo"],
};
cars.splice(3, 0, car);
console.log("x5", cars);

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}
console.log("ssssssssssssssssssssssssssss", cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims",
     sotto definito.
*/

const justTrims = [];
for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. 
    Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  const color = cars[i].color;
  const fLetter = color.substring(0, 1);
  console.log(fLetter);
  if (fLetter === "b") {
    console.log("Fizz");
  } else if (fLetter !== "b") {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico 
    fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];
for (let i = 0; i < numericArray.length; i++)
  while (i < 13) {
    console.log(numericArray[i]);
    i++;
    if (numericArray[i] === 32) console.log("Ecco il 32");
    break;
  }

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle 
    posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const newNumLett = [];
for (let i = 0; i < charactersArray.length; i++) {
  const lettera = charactersArray[i];
  switch (lettera) {
    case "g":
      newNumLett.push(6);
      break;
    case "n":
      newNumLett.push(14);
      break;
    case "u":
      newNumLett.push(21);
      break;
    case "z":
      newNumLett.push(26);
      break;
    case "d":
      newNumLett.push(4);
  }
}
console.log(newNumLett);
