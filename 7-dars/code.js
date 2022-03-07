
// class Car {
//     constructor(name, brand, color, price) {
//         this.name = name;
//         this.brand = brand;
//         this.color = color;
//         this.price = price;
//     }

//     getInfo() {
//         return `${this.brand} rusumli ${this.color} rangli ${this.name} mashinasining narxi
//          ${this.price} so'm
//         `
//     }
// }

// class Moto extends Car {
//     constructor(brand, name, color, price, tezlik) {
//         super(brand, name, color, price)
//         this.tezlik = tezlik
//     }

//     motoInfo() {
//         return `${this.name} nomli ${this.brand} mashina ${this.price} so'm`
//     }
// }

// const Malibu = new Car('malibu', 'chevrolet', 'qora', '20000')
// const Motosikl = new Moto('Harry Davidson', 'David', 'qizil', '15000', 200)

// console.log(Malibu.getInfo())

// function divide(a, b, err) {
//     let res = a / b
//     if (res === Infinity) {
//         return err()
//     } else {
//         return res
//     }
// }

// function error() {
//     setTimeout(() => {
//         console.log('something error')
//     }, 2000)
// }

// console.log(divide(1, 0, error))

// let loadScript

// loadScript(s1, function (script) {
//     loadScript(s2, function (script) {
//         loadScript(s3, function (script) {
//             // ...continue after all scripts are loaded
//         });
//     });
// });

// const callbackFunction = (res, rej) => {
//     try {
//         res()
//     } catch {
//         rej()
//     }
// }

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success result')
        // reject('something error')
    }, 2000)
})

// promise
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

fetch('https://randomusesr.me/api?results=20')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))