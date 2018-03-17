// Step 5
function creatBase(baseNum) {
    return function(addNum){
        return baseNum + addNum;
    };
}

let addSix =  creatBase(6);

addSix(10);
console.log(addSix(10));

addSix(21);
console.log(addSix(21));


// bonus
let letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];
function unique(uni){
    return Array.from(new Set(uni));
}
let uniqueLetters = unique(letters);
console.log(uniqueLetters);