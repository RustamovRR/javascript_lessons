// const User = {
//     name: 'John',
//     age: 30,
//     isActive: true,
//     location: {
//         city: 'Toshkent',
//         street: {
//             name: 'Amir Temur kochasi'
//         }
//     }
// }

// const User2 = deepCopy(User)

// User2.name = 'Bob'
// User2.location.city = 'Moskva'
// User2.location.street.name = 'Beruniy'

// delete User2.isActive

// console.log(User)
// console.log(User2)

function deepCopy(obj) {
    let tmp = {}
    for (let key in obj) {
        if (typeof obj[key] !== 'object') {
            tmp = { ...obj }
        } else {
            tmp[key] = deepCopy(obj[key])
        }
    }
    return tmp
}


// for(let key in User){
//     console.log(User[key])
// }

// console.log(User['location'])

// const arr = ['lacetti', 'captiva', 'malibu', 'spark']

// for(let i in arr){
//     console.log(arr[i])
// }

// for(let item of arr){
//     console.log(item)
// }

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }


// const User = {
//     name: 'John',
//     age: 30,
//     getName: function(){
//         return this.age
//     }
// }

// console.log(User.getName())

class Player {
    constructor(name, age, gun, isLeader) {
        this.name = name
        this.age = age
        this.gun = gun
        this.isLeader = isLeader
    }

    shoot() {
        console.log(`${this.name} shoot with ${this.gun}`)
    }

    jump() {
        console.log(`${this.name} ${this.isLeader ? 'balandroq' : ''} sakradi`)
    }

    static start() {
        console.log('uyin boshlandi')
    }
}

const Ted = new Player('Ted', 30, 'sniper', true)
const Bob = new Player('Bob', 10, 'pistol')

// console.log(Ted.jump())
// console.log(Bob.jump())
// console.log(Player.start())
// console.log(Ted.start())

// const arr = new Array(12,3,4,5)
// console.log(arr)

// function sum(...qwe) {
//     console.log(qwe)
// }

// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, true, 'hello'))

// const obj = new Number(13)
// console.log(obj)

Array.prototype.myMap = function (callback) {
    let tmp = []
    for (let i = 0; i < this.length; i++) {
        let res = callback(this[i], i, this)
        if (res) {
            tmp.push(res)
        }
    }
    return this
}

String.prototype.reverse = function () {
    let tmp = []
    for (let i = this.length; i >= 0; i--) {
        tmp.push(this[i])
    }
    return tmp.join('')
}

// let arr = [2, 3, 4]
// console.log('hello'.length)

let str = 'string'
console.log(str.reverse())

// console.log(arr.myMap(item => item * 3))
// console.log(arr.map(item => item * 3))

// const obj = {name:'user'}
// const arr = [1,3,34,4]

// const math = new Math()

