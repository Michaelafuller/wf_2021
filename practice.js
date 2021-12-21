var age = 16;

if(age >= 18){
    console.log("Here's your ticket. Good luck!")
}

else{
    console.log("Sorry! Come back when you're 18.")
}

var name = "Mike";
if(name == "Mike"){

}
// 

// functions

function addnumbers(num1, num2){
    return num1 + num2;
}

console.log(addnumbers(4,7));

function multiply(num1, num2){
    return num1 * num2
}

console.log(multiply(3,9))

// Monday 20 Dec

var floor = Math.floor(1.8);
var ceiling = Math.ceil( Math.PI );
var random = Math.random();
    
console.log(floor);
console.log(ceiling);
console.log(random);

// 

function d6() {
    var roll = Math.random();
    roll *= 6
    return Math.ceil(roll);
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);

// 

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];



function fortune(lifesAnswers){
    // index random from choiceAnswers
    var randomIndex = lifesAnswers[(Math.ceil(Math.random() * lifesAnswers.length))];
    // look up item in that index
    // return item
    return randomIndex;
}

console.log(fortune(lifesAnswers))

var a = 5;
var b = 7;

function add(num1, num2){
    var sum = num1 + num2;
    return sum;
}

console.log(add(a,b))


var object_user = {
    "first_name" : "Mike",
    "last_name" : "Fuller",
    "phone_number" : "208-859-5628",
    "age" : 32,
    "married" : false,
    "address" : {
        "stree_address" : "123 Something Way",
        "city" : "LA",
        "state" : "CA",
        "zip_code" : "90210"
    }
}

// input array
// output array[0] and array[array.length-1]

var firstarray = [1,2,3,4]
var diffArray = ["a", "b", "c", "d"]

function addArray(arr){
    var newarray = [arr[0],arr[arr.length-1]]
    return newarray;
}

console.log(addArray(firstarray))