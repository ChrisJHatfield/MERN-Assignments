// 1
console.log(hello);
var hello = 'world';
// Output of Intrepreter:
// var hello;
// console.log(hello); output: undefined
// hello = 'world'


// ***************************************************


// 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// Output of Interpreter:
// var needle;
// test();
    // function test() {
    // var needle;
    // needle = 'magnet';
    // console.log(needle); output: 'magnet'
    // }
// needle = 'haystack';


// ***************************************************


// 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// Output of Interpreter:
// var brendan;
// function print(){
    //brendan = 'only okay';
    //console.log(brendan); output: Function not called!
// }
// brendan = 'super cool';
// console.log(brendan); 1st output: super cool


// ***************************************************


// 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// var food;
// function eat(){
    //food = 'half-chicken';
    //console.log(food); 2nd output: half-chicken
    //var food = 'gone';
// }
// food = 'chicken'
// console.log(food); 1st output: chicken
// eat();


// ***************************************************


// 5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// var mean;
// mean = function(){
    // var food;
    // food = "chicken";
    // console.log(food); output: chicken
    // food = "fish";
    // console.log(food); output: fish
// }
// mean();
// console.log(food) output: fish

// Correct Answer: Uncaught TypeError: mean is not a function


// ***************************************************


// 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// var genre;
// function rewind() {
    // var genre;
    // genre = "rock";
    // console.log(genre); 2nd output: rock
    // genre = "r&b";
    // console.log(genre); 3rd output: r&b
// }
// console.log(genre); 1st output: undefined
// genre = "disco";
// rewind();
// console.log(genre); 4th output: disco

// ***************************************************


// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// function learn() {
    // var dojo;
    // dojo = "seattle";
    // console.log(dojo); 2nd output: seattle
    // dojo = "burbank";
    // console.log(dojo); 3rd output: burbank
// }
// dojo = "san jose";
// console.log(dojo); 1st output: san jose
// learn();
// console.log(dojo); 4th output: burbank

// Correct Output: 1) san jose 2) seattle 3) burbank 4) san jose


// ***************************************************


// 8 - Bonus ES6: const
console.log(makeDojo("Chicago", 65));
console.log(makeDojocopy("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// function makeDojo(name, students){
    // const dojo;
    // dojo = {};
    // dojo.name = name;
    // dojo.students = students;
    // if(dojo.students > 50){
        //dojo.hiring = true;
    // }
    // else if (dojo.students <= 0){
        // dojo = "closed for now";
    // }
    // return dojo;
// }
// console.log(makeDojo("Chicago, 65")); 1st output: {name:'Chicago', students: 65, hiring = true}
// console.log(makeDojocopy("Berkeley", 0)); 2nd output: {name:'Chicago', students: 65, hiring = true}

//Correct Output: 
// 1st output: {name:'Chicago', students: 65, hiring = true}
// 2nd output: Uncaught ReferenceError: makeDojocopy is not defined
