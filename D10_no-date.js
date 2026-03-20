/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
const sum = 10 + 20
console.log("EXERCISE A:", sum) //verified

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
const random = Math.floor(Math.random() * 21)
console.log("EXERCISE B:", random) //verified

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
const me = {
  name: "Valeria",
  surname: "Farinosi",
  age: 27,
}
console.log("EXERCISE C:", me) //verified

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age
console.log("EXERCISE D:", me) //verified

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["JavaScript"]
console.log("EXERCISE E:", me) //verified

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("Python")
console.log("EXERCISE F:", me) //verified

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop()
console.log("EXERCISE G:", me) //verified

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
const dice = function () {
  number = Math.ceil(Math.random() * 6)
  return number
}

console.log("EXERCISE 1:", dice()) //verified

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
const whoIsBigger = function (a, b) {
  if (a > b) {
    console.log(`EXERCISE 2: ${a} is bigger`)
  } else {
    console.log(`EXERCISE 2: ${b} is bigger`)
  }
}

whoIsBigger(13, 9) //verified

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
const splitMe = function (phrase) {
  const arr = phrase.split(" ")
  return arr
}

phrase = "I would love to have some tea"
console.log("EXERCISE 3:", splitMe(phrase)) //verified

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
const deleteOne = function (string, boolean) {
  if (boolean) {
    const newString = string.slice(1)
    return newString
  } else {
    const newString1 = string.slice(0, -1)
    return newString1
  }
}

console.log("EXERCISE 4:", deleteOne("Hello world", 4 > 6)) //verified

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
const onlyLetters = function (cats) {
  let string = cats
    .split("")
    .filter((character) => isNaN(character) || character === " ")
    .join("")
  return string
}

console.log("EXERCISE 5:", onlyLetters("I love my 2 cats")) //verified

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
//FIRST IDEA
//if input type === email true?
//SECOND IDEA
// if includes(@) ? very generic though
const isThisAnEmail = function (string) {
  let letters = string.split("")
  if (letters.includes("@")) {
    //maybe if this is true put into another array and then split by @, take the second half and compare to real email domains
    return "true"
  } else {
    return "false"
  }
}

console.log("EXERCISE 6:", isThisAnEmail("aifhjyftiy@hjfk")) //no idea how to go further than this. Maybe checking if what is after the "@" is either a gmail.com, or any valid domain. I'll come back if I have time

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollDice" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollDice(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
const rollDice = function (num) {
  let obj = {
    sum: 0,
    values: [],
  }

  for (let i = 0; i < num; i++) {
    const result = dice()
    obj.values.push(result)
    obj.sum += result
  }

  return obj
}
console.log("EXERCISE 8:", rollDice(4)) //verified

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

const deleteProp = function (obj, string) {
  delete obj[string]
  return obj
}

obj = {
  name: "Hime",
  surname: "Cacticus",
  age: 4,
}

string = "surname"

console.log("EXERCISE 11:", deleteProp(obj, "surname")) //verified

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
]

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
const newestMovie = function () {
  //start with the first one
  let newest = movies[0]
  //confront with the others
  for (let i = 1; i < movies.length; i++) {
    if (parseInt(movies[i].Year) > parseInt(newest.Year)) {
      //replace if true
      newest = movies[i]
    }
  }

  return newest
}

console.log("EXERCISE 12:", newestMovie().Title) //verified

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
const countMovies = function () {
  console.log("EXERCISE 13:", movies.length)
}

countMovies() //verified

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
const onlyTheYears = function () {
  let yearsArr = []
  for (let i = 0; i < movies.length; i++) {
    yearsArr.push(movies[i].Year)
  }
  return yearsArr
}

console.log("EXERCISE 14:", onlyTheYears()) //verified

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
const onlyInLastMillennium = function () {
  let lastMill = []
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Year >= 2000) lastMill.push(movies[i].Year)
    //here js automatically converts the strings into numbers to confront with >=
  }
  return lastMill
}
console.log("EXERCISE 15:", onlyInLastMillennium()) //verified

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
const sumAllTheYears = function () {
  let sum = 0
  for (let i = 0; i < movies.length; i++) {
    sum += parseInt(movies[i].Year) //remember to convert into numbers whith sums and math oper
  }
  return sum
}
console.log("EXERCISE 16:", sumAllTheYears()) //verified

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
//FIRST VERSION
//ok but the console get chaotic
//const searchByTitle = function(string){
//  for (let i = 0; i < movies.length; i++) {
//    if (movies[i].Title.includes(string)){
//      console.log(movies[i].Title)
//    }
//  }
//}
//
//console.log(searchByTitle("Avengers"))

//SECOND VERSION
//created a separate array so the console is more organized
const searchByTitle = function (string) {
  const searchedMovies = []

  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.includes(string)) {
      searchedMovies.push(movies[i].Title)
    }
  }

  return searchedMovies
}

console.log("EXERCISE 17:", searchByTitle("Avengers")) //verified

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
const searchAndDivide = function (string) {
  let obj = {
    match: [],
    unmatch: [],
  }
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.includes(string)) {
      obj.match.push(movies[i])
    } else {
      obj.unmatch.push(movies[i])
    }
  }

  return obj
}

console.log("EXERCISE 18:", searchAndDivide("Avengers"))

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
const removeIndex = function (num) {
  movies.splice(num, 1)
  //this removes the the movie that stands in the index position represented by num.
  //if you wanted the position as in "human" counting thenn it would have been
  // movies.splice(num-1,1)
  //this way num = 1 equals to the first element (in human terms)
  return movies
}
console.log("EXERCISE 19:", removeIndex(1))

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const selectId = function () {
  return document.getElementById("container")
}

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const selectTag = function () {
  return document.getElementsByTagName("td")
}

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
const text = function () {
  const rightTag = document.querySelectorAll("td")
  rightTag.forEach((td) => console.log(td.innerText))
}

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

//CASE 1 (my choice)
//in this case I would have a css sheet with say this property:
//.selectedLink {
//background-color: red;
//}
//and of course before that the html <a> tags i need to act on with the class="selectedLink"
const redBackground = function () {
  const rightTag = document.querySelectorAll("a")
  rightTag.forEach((a) => a.classList.add("selectedLink"))
}

//CASE 2
//inline styling using js
const redBackground2 = function () {
  const rightTag = document.querySelectorAll("a")
  rightTag.forEach((a) => (a.style.backgroundColor = "red"))
}

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
//adding a new li only in memory and not yet visible on the page, untill I give it a value
const addElement = function () {
  const newLi = document.createElement("li")
  document.getElementById("myList").appendChild(newLi)
}

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
const emptyList = function () {
  const toBeRemoved = (document.getElementById("myList").innerHTML = "")
}

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
const addTest = function () {
  const rightTag = document.querySelectorAll("tr")
  rightTag.forEach((tr) => tr.classList.add("test"))
}

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
const halfTree = function (num) {}

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
//const isItPrime = function (num){
//  if (num%num === 0 && num%1 === 0 )
//}
