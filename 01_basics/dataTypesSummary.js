// Premitive

// String , Number , BigInt , Boolean , Symbol , null , undefined

const score = 100
const scoreVal = 100.3

const isLoggedIn = false

const outSideTemp = null

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id == anotherId) // false

// Reference

const heros = ["Ironman","thor","captain america"]

let myObj = {
    name:"Aditya",
    age:22,
    score:93
}

const myFunc = function (){
    console.log("Hello World")
}

console.log(typeof anotherId)

console.log("typeof null = ",typeof null)
console.log("typeof function = ",typeof myFunc) // function [object function]
