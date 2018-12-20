//From EloquentJS:
//Use the reduce method in combination with the concat
//method to “flatten” an array of arrays into a single 
//array that has all the elements of the original arrays

//From EloquentJS:
let arrays = [[1, 2, 3], [4, 5], [6]];

//Original code:

let flat = arrays.reduce(
    ( builder, toBuild ) => builder.concat(toBuild), []
);

console.log(flat)