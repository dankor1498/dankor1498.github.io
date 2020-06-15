"use strict";

let a11 = document.getElementById("11");
let a12 = document.getElementById("12");
let a13 = document.getElementById("13");

let a21 = document.getElementById("21");
let a22 = document.getElementById("22");
let a23 = document.getElementById("23");

let a31 = document.getElementById("31");
let a32 = document.getElementById("32");
let a33 = document.getElementById("33");

let result = document.getElementsByClassName("result");
result[0].innerHTML = "Результат: 0";

function getResult() {
  let res =
    Number(a11.value) * Number(a22.value) * Number(a33.value) +
    Number(a12.value) * Number(a23.value) * Number(a31.value) +
    Number(a13.value) * Number(a21.value) * Number(a32.value) -
    Number(a13.value) * Number(a22.value) * Number(a31.value) -
    Number(a12.value) * Number(a21.value) * Number(a33.value) -
    Number(a11.value) * Number(a23.value) * Number(a32.value);
  result[0].innerHTML = "Результат: " + res;
}

a11.oninput = function() {
  getResult();
};

a12.oninput = function() {
  getResult();
};

a13.oninput = function() {
  getResult();
};

a21.oninput = function() {
  getResult();
};

a22.oninput = function() {
  getResult();
};

a23.oninput = function() {
  getResult();
};

a31.oninput = function() {
  getResult();
};

a32.oninput = function() {
  getResult();
};

a33.oninput = function() {
  getResult();
};
