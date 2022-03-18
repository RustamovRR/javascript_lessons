const output = document.getElementById('output')
const result = document.getElementById('result')
const del = document.getElementById('del')
const equal = document.getElementById('equal')
const buttons = document.querySelectorAll('button')


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        if (this.innerHTML !== 'AC' || this !== del || this !== equal) {
            output.innerHTML += this.innerHTML
            result.innerHTML = eval(output.innerHTML)
        }

        if (this.innerHTML === 'DEL') {
            output.innerHTML = output.innerHTML.slice(0, -1)
        }

        if (this.innerHTML === 'AC') {
            output.innerHTML = ''
        }
    })
}