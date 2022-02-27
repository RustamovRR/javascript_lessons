// 1. pyramids
// function pyramid(n){
//     let res = ''
//     for(let i = 0; i < n; i++){
//         for(let j = i; j < n; j++){
//             res = res + ' '
//         }
//         for(let k = 0; k < 2 * i - 1; k++){
//             res += '*'
//         }
//         res += '\n'
//     }
//     return res
// }

// console.log(pyramid(9))

// 2. arifmetik
// function arifmetik(a, b) {
//     let res = 0
//     for (let i = a; i <= b; i++) {
//         res += i
//     }
//     return res / (b - a)
// }

// console.log(arifmetik(5, 100))

// let num = 10.123910283098 
// let string = num.toString()

// let array = [1, 5, 2, 99, 20, 45, 7]
// let strArray = ['olma', 'anor', 'behi', 'nok']
// let array2 = ['salom', 99]
// let newArray = array.unshift(true)

// let filtered = array.filter((n) => n !== 10)
// let every = array.every((n) => n == 10)
// let some = array.some((n) => n == 10)
// let map = array.map(n => n * 2)
// let forEach = array.forEach(n => console.log(n))

// console.log(array)
// console.log(array.sort((j, k) => j - k))
// console.log(strArray.sort().reverse())
// console.log(strArray.indexOf('behi'))

// console.log(strArray.slice(1, 3))

// const user = {
//     name: 'Bob',
//     age: 30,
//     location: {
//         city: 'Toshkent',
//         district: 'Olmazon',
//     }
// }

// const user2 = deepCopy(user)
// user2.location.city = 'Moskva'

// console.log(user.location)
// console.log(user2.location)

// function deepCopy(obj) {
//     let tmp
//     for (let key in obj) {
//         if (typeof key !== 'object') {
//             tmp = { ...obj }
//         } else {
//             tmp = deepCopy(obj[key])
//         }
//     }
//     return tmp
// }


// 1. factorial
// function factorial(n){
//     let res = 1
//     for(let i = 1; i <= n; i++){
//         res *= i
//     }
//     return res
// }

// function factorial(n) {
//     if (n === 1) {
//         return 1
//     } else {
//         return n * factorial(n - 1)
//     }
// }
// const factorial = (n) => n === 1 ? 1 : n * factorial(n - 1)

// console.log(factorial(5))

// a = 5
// var a;
// console.log(a)

// var a;
// a = 5
// console.log(a)


// if (true) {
//     var a = 10
// }

// for(let i = 0; i < 5; i++){
//     // console.log(i)
// }
// console.log(i)

// function sum() {
//     let a = 10
//     return a
// }

// console.log(a)
let a = 'hello'