// console.log("Hallo Welt erneut!");

// # 1 Variablen:
// - Können kein Keyword sein (if, else, var, ...)
// - Sollen sinvoll sein
// - Dürfen nicht mit einer Zahl starten
// - Enthalten kein Leerzeichen
// - Sind case-sensitive
let firstName, lastName;
firstName = "Daniel";
lastName = "Koller";
console.log(firstName + " " + lastName);

// # 2 Constanten:
// - Für fixe Werte
const interestRate = 0.3;
console.log(interestRate);

// # 3 Primitive Typen / Value Types:
let name = "Daniel"; // String
let age = 24; // Number
let isApproved = true; // Boolean
let demo; // undefined
let color = null; // null (Wenn Wert der Variable entfernt werden soll)

// # 4 Dynamic Typing:
// Variablen können "on-the-fly" geändert werden
// Browser Console öffnen > "typeof + variable" eingeben > prüfen
// Variable abändern > neuen Wert prüfen

// # 5 Reference Types:
// - Objects
let person = {
    name: undefined,
    age: 20
};
// Dot Notation (Standard)
person.name = "Linda";

// Bracket Notation (Für dynamische Anpassungen)
// let selection = "name";
// person[selection] = "Benni";

console.log(person.name);

// - Arrays
let selectedColors = ["rot", "blau", "grün", "gelb"];
selectedColors[4] = "weiß";
selectedColors[5] = 5;

console.log(selectedColors[1]);
console.log(selectedColors.length);

// - Functions
// z.B. Task ausführen
function greet(userFirstName, userLastName) { // Wert in Klammern = Parameter
    console.log("Hallo " + userFirstName + " " + userLastName + ", schön dich zu sehen.");
}

greet("Daniel", "Koller"); // Wert in Klammern = Argument
greet("Linda", "W.");

// z.B. Berechnung
function calc(number) {
    return number * number;
}
// let number = calc(42);
console.log(calc(42));
