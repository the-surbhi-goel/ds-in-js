const firstSet = new Set(['Joy', 'Toy', 'Boy']);

console.log("\n First Set");
console.log(firstSet);

// ------------------------------------------------
// Add Value
console.log("\n Add Value firstSet.add('Ram')");
firstSet.add('Ram')
console.log(firstSet);


// ------------------------------------------------
// Check Values
console.log("\n Checking Values");
console.log("firstSet.has('Joy') ", firstSet.has('Joy'));
console.log("firstSet.has('hi') ", firstSet.has('hi'));


// ------------------------------------------------
// Check Values
console.log("\n Checking Size");
console.log("firstSet.size ", firstSet.size);


// ------------------------------------------------
// Get Values
console.log("\n Get Values firstSet.values()");
console.log(firstSet.values());


// ------------------------------------------------
// clear map
console.log("\n Clear Map firstSet.clear()");
firstSet.clear()
console.log(firstSet);