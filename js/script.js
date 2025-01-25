"use strict";
const yearInput = prompt("Indtast dit fødselsår");

const year = parseInt(yearInput, 10);

const currentYear = new Date('2025').getFullYear();

const age = currentYear - year;

console.log(`Du bliver ${age} år gammel i 2025.`);
