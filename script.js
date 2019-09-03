
var myName =' ';
var myAge = 'Default\'s'; //String 
var myNumber = 4;  // number 
var myBoolean = true; //boolean
var a='a', b='b',c=55; //defining variables in a single line

document.getElementById('btn2').addEventListener('click', function () {
	 	myName = prompt('What is your name?');
	 	console.log(myName);
	 })

document.getElementById('btn3').addEventListener('click', function () {
	 	// alert('Hello 3\nhello\nhello');//response to the html btn3
		console.log(myName);
	//testing the line breaks 
	 })

// Data Types String Variable Boolean

//Arrays
var myArray = ["one","two","three",55] //implicit literal array
var myArrayC = ["xone","xtwo","xthree",55] 


var myArrayD = myArray.concat(myArrayC);
console.log(myArrayD, myArrayD.length);

console.log(myArray.toString());

console.log(myArray.join(':)'));

console.log(myArrayD.slice(1,3));

/*
console.log(myArray);
console.log(myArray[2]);

var myArrayA = new Array("one","two","three",55);
console.log(myArrayA[1]);

var myArrayB = new Array(5);
console.log(myArrayB);

//Array Methods 

//join(), split(), push(), pop(), shift(), unshift()
//sort(), reverse(), slice(), splice()

myArray.push("five");
console.log(myArray)

myArrayB.push("five");
console.log(myArrayB);

//lengths of the array

console.log(myArray, myArray.length);
console.log(myArrayA, myArrayA.length);
console.log(myArrayB, myArrayB.length);

console.log(typeof(myArray) == typeof(myArrayA));
//checking if the array are the same 
//though one is implicit and the other one is run time


//digging deep into Arrays

//removing an item from the array
myArray.pop();
console.log(myArray);

//removing the first element of the array
myArray.shift();
console.log(myArray);

myArray[2] = 'TWO';
console.log(myArray);

console.log(myArray.indexOf("xTWO"));
//if not within the array ==> returns -1
*/
//myArray.push("fivesix");
//console.log(myArray);
//console.log(myArray.splice(2,2));
//console.log(myArray);

console.log(myArray);
myArray.unshift("Three");
console.log(myArray);

myArray.sort();
console.log(myArray);

myArray.reverse();
console.log(myArray);
//while sorting the array, takes numerical first, then upper case and the lower case 

//objects -- store multiple values 
//object literals
//object constructors

var myObject = new Object();
myObject.firstName = "Sean"
myObject.company = "As_Learning"
myObject.age = 28;
console.log(myObject);

var myObjectA = {firstName:"Amrit",
					company :"DEAR",
					age :25};

console.log(myObjectA);
console.log(myObjectA['firstName']);
console.log(myObjectA.firstName);


var myObjectB = new myCreator("Sean","As_Learning",28);
var myObjectC = new myCreator("Sean2","As_Learning2",28);
function myCreator(a,b,c){
	this.firstName = a;
	this.company = b;
	this.age = c;
}

console.log(myObjectB);
console.log(myObjectC);

var b = 1;
function myFunction(a) {
	b++;
	console.log(b + " function as called " +a );
}
myFunction("Hello");
myFunction("BYE");
myFunction("WORLD");

var d =1;
function myFunctionA(a,c){
	return (a*c + d);
}

console.log(myFunctionA(5,2));

var myObj = {
	firstName: "one",
	lastName: "two"
};

function f(g) {
	g.courses = "JavaScript";

 	// body...
 } 

 console.log(myObj);
 f(myObj);
 console.log(myObj);