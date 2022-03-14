const input = document.getElementsByTagName('input')[0]
const button = document.getElementsByTagName('button')[0]
const ol = document.getElementsByTagName('ol')[0]

const getEvent = () => {
    const li = document.createElement('li')
    const deleteButton = document.createElement('button')
    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')

    deleteButton.innerHTML = 'delete'
    const value = input.value
    li.innerHTML = value

    ol.appendChild(li)
    li.appendChild(checkbox)
    li.appendChild(deleteButton)
    input.value = ''

    checkbox.addEventListener('change', (e) => {
        const { checked } = e.target
        // checked ? li.style.textDecoration = 'line-through' : li.style.textDecoration = 'none'
        // checked ? li.className = 'checked' : li.className = 'unchecked'
        // checked ? li.classList.add('checked') : li.classList.remove('checked')
        li.classList.toggle('checked')
    })

    deleteButton.addEventListener('click', () => {
        li.remove()
    })
}

button.addEventListener('click', (e) => {
    // getEvent()
    const type = input.getAttribute('type')
    if (type === 'password') {
        input.setAttribute('type', 'text')
        button.innerHTML = 'Hidden'
    } else {
        input.setAttribute('type', 'password')
        button.innerHTML = 'Show'
    }
})

input.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        getEvent()
    }

    if (e.altKey === true && e.keyCode === 8) {
        input.innerHTML = ''
    }
})

const interval = setInterval(() => {
    console.log('interval')
}, 1000)

// const user = {
//     name: 'bob',
//     age: 30,
//     isAdmin: true,
//     isClient: false
// }

// const name = user.name
// const age = user.age
// const admin = user.isAdmin
// const click = user.isClient

// const { name, age, isAdmin, isClient } = user