// 1 Number.prototype orqali  getYear() nomli function tuzing, yoshga qarab yilni aniqluvchi
// Number.prototype.getYear = function() {
//     return new Date().getFullYear() - this
// }
// const old = 36
// console.log(old.getYear())


// 2 String.prototype orqali TypeSimCard() nomli function tuzing, nomerni nomiga qarab
//  kompaniyani nomini  aniqlovchi dastur tuzing
// String.prototype.TypeSimCard = function () {
//     const code = this.slice(4, 6)

//     switch (code) {
//         case '90':
//         case '91':
//             return 'Beeline'
//             break;
//         case '93':
//         case '94':
//             return 'Ucell'
//             break;
//         case '99':
//             return 'Uzmobile'
//             break;
//         default:
//             return 'Bunaqa kod mavjudmas'
//     }
// }
// const phone = "+998991234567"
// console.log(phone.TypeSimCard()) // Uzmobile


// 3 Array.prototype orqali  numPowTo(ixtiyoriy son) nomli function tuzing,
// arraydagi sonlarni darajaga oshiradigon.
// Array.prototype.numPowTo = function (n) {
//     const tmp = []
//     for(let i = 0; i < this.length; i++){
//         const res = Math.pow(this[i], n)
//         tmp.push(res)
//     }
//     return tmp
// }
// const arr = [2, 3, 4, 5]
// console.log(arr.numPowTo(5))


// 4 Array.prototype orqali  filterByType(ixtiyoriy type "string" | number vaxokazo)
//  nomli function tuzing, arraydagi xar xil typedagi malumotlarni
//   functionda berilgan argumetga qarab filter qiladigan dastur tuzing
// Array.prototype.myFilter = function (callback) {
//     const tmp = []

//     for (let i = 0; i < this.length; i++) {
//         const res = callback(this[i], i, this)
//         if (res) {
//             tmp.push(this[i])
//         }
//     }
//     return tmp
// }
// const arr = [2, 40, 32, 3, 11, 7]
// console.log(arr.filter((item) => item > 10))

// 5 checkDiffer()  normi function tuzing , 2 ta deyarli bir qil array berilgan  shularni farq qiladigan elementini chiqaruvchi dastur tuzing
//  [1,'olma', 2 ,3, 'anor' ,4 ,5] ,[1,'olma', 6 , 3 , 'nok' ,4 ,5] => javob [6,'nok']
// const checkDiffer = (arr1, arr2) => {
//     const tmp = []

//     for (let i = 0; i < arr2.length; i++) {
//         if(arr1[i] !== arr2[i]) {
//             tmp.push(arr2[i])
//         }
//     }
//     return tmp
// }

// const arr1 = [1, 'olma', 2, 3, 'anor', 4, 5]
// const arr2 = [1, 'olma', 6, 3, 'nok', 4, 5]
// console.log(checkDiffer(arr1, arr2))

// 6. deepFlat funksiyasini yaratish;  Masalan [1, [2, [3, [4]]]] => [1, 2, 3, 4]
// const deepFlat = (arr) => {
//     let tmp = []

//     const flatRec = (a) => {
//         for (let i = 0; i < a.length; i++) {
//             if (typeof a[i] !== 'object') {
//                 tmp.push(a[i])
//             } else {
//                 flatRec(a[i])
//             }
//         }
//     }

//     flatRec(arr)
//     return tmp
// }

// const arr = [1, [2, [3, [4, 5], [6, 7]]]]
// console.log(arr.flat(Infinity))

// factorial(5) 1 * 2 * 3 * 4 * 5
// function factorial(n) {
//     let tmp = 1
//     let arr = []
//     for (let i = 1; i <= n; i++) {
//         tmp = tmp * i
//         arr.push(tmp)
//     }
//     return arr
// }

// function recursionFact(n) {
//     if (n == 1) {
//         return 1
//     } else {
//         return n * recursionFact(n - 1)
//     }
// }

// const recursion = (n) => n == 1 ? 1 : n * recursion(n - 1)

// console.log(recursion(5))
const isPalindrome = (str) => {
    let reverseStr = str.split('').reverse().join('')
    return str === reverseStr
}

const isPalindrome2 = (str) => str === str.split('').reverse().join('')

console.log(isPalindrome('non')) // true
console.log(isPalindrome('alla')) // true
console.log(isPalindrome('qwer')) // false