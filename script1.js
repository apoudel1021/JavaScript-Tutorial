//JS global scopes in function

var b=1;   //global
var bb= "GLOBAL";

function myFun(){
	
	var bb = "LOCAL";
	console.log(bb);
}
console.log(bb); //outputs GLOBAL
myFun(); //OUTPUTS LOCAL
console.log(bb); // OUTPUTS GLOBAL 

// do not have global and local variable name the same
//though you can have it, it gets confusing 

//Document Object Model 
