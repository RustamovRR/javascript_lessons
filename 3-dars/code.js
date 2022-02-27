// while
// let i = 0
// while (i < 10) {
//     console.log(i)
//     i++
// }

// do while
// let i = 0
// do {
//     console.log(i)
//     i++
// } while (i < 10)

// for loop
// for(let i = 0; i < 10; i++){
//     if(i == 5){
//         continue;
//     }
//     console.log(i)
// }

// let baho = prompt('shahringizni kiriting:')

// switch (baho) {
//     case 'toshkent':
//     case 'moskva':
//         alert(`O'zbekiston`)
//         break;
//     case 'vashington':
//         alert('AQSH')
//         break;
//     default:
//         alert('bunaqa shahar mavjudmas')
// }

// let browser = prompt('brouzeringizni kiriting:')

// if (browser === 'Edge') {
//     console.log('Microsoft Edge')
// } else if (browser === 'Chrome') {
//     console.log('Google Chrome')
// } else if (browser === 'Safari') {
//     console.log('Apple')
// } else {
//     console.log('We hope that this page looks ok!')
// }

// let a = +prompt('input')

// switch (a) {
//     case 0:
//         alert(0)
//         break;
//     case 1:
//         alert(1)
//         break;
//     case 2:
//     case 3:
//         alert('2,3')
//         break;
//     default:
//         alert(false)
// }

// let a = +prompt('birinchi son:')
// let b = +prompt('ikkinchi son:')

// 1. Function declaration
// function sum(a, b = 5) {
//     return a + b
// }

// console.log(sum(10, 20))
// let res2 = sum(5, 6)

// console.log(res2)
// console.log(sum(10, 20))
// console.log(sum(30, 40))

// 2. Function expression
// const multiply = function (a, b, c) {
//     return a * b * c
// }

// console.log(multiply(3, 4, 5))

// 3. Arrow function
// const Daraja = (f, g) => f ** g

// console.log(Daraja(3, 5))

// let name = 'jack'
// function getUsername() {
//     name = 'bob'

//     return name
// }
// console.log(name)
// console.log(getUsername())
// console.log(name)

// function isPrime(n) {
//     for(let i = 2; i < n; i++ ){
//         if(n % i === 0){
//             return false
//         }
//     }
//     return true
// }

// console.log(isPrime(17))


// function pyramid (n){
//     let a = ''
//     for(let i = 0; i < n; i++){
//         for(let j = i; j > 0; j--){
//             a += '*'
//         }
//         a += '\n'
//     }
//     return a
// }1

// console.log(pyramid(5))

function jadval (){
    let res
    for(let i = 2; i < 3; i++){
        for(let j = 1; j <= 9; j++){
            res = i * j
            console.log(`${i} x ${j} = ${res}`)
        }
    }
}

jadval()