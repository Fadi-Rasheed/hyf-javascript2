// 1

function alertmsg(x){
    alert (x);
}
function msg(){
    return ("Hello I am the callback function");
} 

alertmsg(msg());

// 2 
let array = [];

function divisible(startValue,endValue,callbackDivisibleBy3,callbackDivisibleBy5) {
    for (let i = startValue ; i <= endValue ; i++ ){
        array.push(i);
        if (i%3 === 0) {
            callbackDivisibleBy3(i);
            }
        if (i%5 === 0) {
            callbackDivisibleBy5(i);
            }
        if (i%5 === 0 && i%3 === 0) {
            callbackDivisibleBy3(i);
            callbackDivisibleBy5(i); 
            }
        }
    }

function callbackDivisibleBy3(divisibleBy3){
    console.log(divisibleBy3 + " " + "This number is divisible by 3") 
    }

function callbackDivisibleBy5(divisibleBy5){
    console.log(divisibleBy5 + " " + "This number is divisible by 5") 
    }

divisible(1,10,callbackDivisibleBy3,callbackDivisibleBy5);
console.log(array);

// 3 

// 3.1
function repeatStringNumTimes(str, num) {
    if (num<=0) {
      return "";
    }
    for (i = 1 ; i<=num ; i++){
       repeat = str.repeat(i);
    }
    return repeat;
  }
  
  repeatStringNumTimes("abc", 3);

// 3.2
function repeatStringNumTimes(str, num) {
if (num<=0) {
    return "";
}
let i = 1; 
while ( i<=num ){
    repeat = str.repeat(i);
    i++;
}
return repeat;
}

repeatStringNumTimes("abc", 3);

// 3.3

function repeatStringNumTimes(str, num) {
    if (num<=0) {
      return "";
    }
    let i = 1; 
    do {
       repeat = str.repeat(i);
       i++;
    }
    while ( i<=num );
    return repeat;
  }
  
repeatStringNumTimes("abc", 3);

// 4 
var MotorBike = function() {
    this.wheels = 2;
    this.engines = 1;
    this.seats = 1;
  };

// 5
function multiplyAll(arr) {
    var product = 1;
    for (var i= 0 ;i<arr.length;i++ ){
      for (var j = 0 ; j<arr[i].length; j++){
        product *= arr[i][j]; 
      }
    }
    return product;
  }
  multiplyAll([[1,2],[3,4],[5,6,7,]]); 

// 7
// I am sorry but i don't know the answer
let x = 9; 
function f1(val) { 
    val = val+1; 
    return val;
}
f1(x);
console.log(x);


let y = { x: 9 };
function f2(val) {
    val.x = val.x + 1;
    return val;
}
f2(y);
console.log(y);

