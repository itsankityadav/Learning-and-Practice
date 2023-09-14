const accountId = 153434;   // block scope, assigned value at the time of declaration, cannot re-assign value in const variable.
let name = "Ankit Yadav";   // block scope, any time assign and change value but not declare same varible again in same code. 
//let name = "Ankit";       Identifier "name" has already been declared.
var crush_name = "Akansha Sonkar";  // global scope, any time assign and change value and also multiple time declare same variable.
location = "Prayagraj";     // without using of any let, var and const also make variable but it act like same var keyword

// Javascript is Dynamic typed langauge which mean interpreter assign type of variable at the run-time based on the variable value at the time.

console.table([accountId, name, crush_name, location])
// Syntax = console.table([variable1, variable2, variable3...variable(n)])
// console is a javascript tool that allow user to view and interact with javascript environment. 
// console.log(): This method output a message to the console.(like character, string, variable assigned value etc)

console.table([typeof accountId, typeof name, typeof crush_name, typeof location])


// const accountId = 15343;  // re-assignment not allow
// let name = "Ankit";       // value re-assignment allow but same variable not declare not allow
var crush_name = "Akansha";  // New-value assigned
location = "Bengaluru";      // New-value assigned

console.table([accountId, name, crush_name, location])
console.table([typeof accountId, typeof name, typeof crush_name, typeof location])

// const p; assigne value at the time of declaration of const variable