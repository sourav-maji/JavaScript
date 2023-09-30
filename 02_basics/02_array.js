const marvel_heros= ["thor", "Ironman", "spiderman"]
const dc_heros= ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) ;   // This push method will take array as input of single element
// console.log(marvel_heros);  // o/p =>  [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3]);  // o/p => [ 'superman', 'flash', 'batman' ]
// console.log(marvel_heros[3][1]);  // o/p => flash

const all_heros= marvel_heros.concat(dc_heros) ; // concat will return a new array ; push changes on the existing array
// console.log(all_heros);  // o/p => [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_heros= [...marvel_heros, ...dc_heros] // [...] is called spread operator
// console.log(all_heros);  // o/p => [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array= [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array= another_array.flat(Infinity) ; //Returns a new array with all sub-array elements concatenated into it 
// console.log(real_another_array); // o/p => [1, 2, 3, 4, 5,6, 7, 6, 7, 4,5]



console.log(Array.isArray("Hitesh")); // o/p => false
console.log(Array.from("Hitesh"));   // o/p = [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "Hitesh"}));   // o/p = {} // important for interview // here we have to mention which field we will use for creating the array  i.e key / value

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));   //Returns a new array from a set of elements // o/p => [ 100, 200, 300 ]
