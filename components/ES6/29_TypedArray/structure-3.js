"use strict";
debugger;

let itemObj = {code: "Book", desc: "자바스크립트",
               qty: 10, price: 20, amount: 200};

let bufferObj = new ArrayBuffer(40);

let codeObj = new Uint8Array(bufferObj, 0, 10);
for (var k = 0; k < itemObj.code.length; k++){
    codeObj.set([itemObj.code.charCodeAt(k)], k);
};

//------structure-2------
let descObj = new Uint16Array(bufferObj, 10, 10);

for (var k = 0; k < itemObj.desc.length; k++){
    descObj.set([itemObj.desc.charCodeAt(k)], k);
};

let qtyObj = new Uint16Array(bufferObj, 30, 1);
qtyObj.set([itemObj.qty]);

let priceObj = new Uint16Array(bufferObj, 32, 1);
priceObj.set([itemObj.price]);

let amountObj = new Uint32Array(bufferObj, 36, 1);
amountObj.set([itemObj.amount]);

//------structure-3------
let result = [];
for (var k = 0; k < itemObj.code.length; k++){
  result.push(String.fromCharCode(codeObj[k]));
};
console.log(result.join(''));

result = [];
for (var k = 0; k < itemObj.desc.length; k++){
  result.push(String.fromCharCode(descObj[k]));
};
console.log(result.join(''));

console.log(qtyObj[0]);
console.log(priceObj[0]);
console.log(amountObj[0]);


let dummy;
