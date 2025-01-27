"use strict";

let yearInput = prompt("Indtast dit fødselsår");

let year = parseInt(yearInput, 10);

let currentYear = new Date('2025').getFullYear();

const age = currentYear - year;

console.log(`Du bliver ${age} år gammel i 2025.`);
