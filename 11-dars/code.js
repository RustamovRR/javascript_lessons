const images = document.querySelectorAll('.cars')
const prevButton = document.querySelector('.prev_button')
const nextButton = document.querySelector('.next_button')
const dotSpans = document.querySelectorAll('.dots span')

let index = 1
// 1. opacity, display none
function nextSlider() {
    if (index === 0) {
        images[0].style.display = 'none'
    } else {
        images[index].style.display = 'block'
    }
    dotSpans[index].classList.add('active_dot')
    dotSpans[index - 1].classList.remove('active_dot')
    index++
}
// nextButton.addEventListener('click', () => {
//     // console.log('next', index)
// })

function prevSlider() {
    if (index >= 2) {
        index--
    }
    images[index].style.display = 'none'
    
    if (index >= 1) {
        dotSpans[index].classList.add('active_dot')
        dotSpans[index + 1].classList.remove('active_dot')
    }
    console.log('prev', index)
}

// prevButton.addEventListener('click', () => {
// })


// 2. z-index
// nextButton.addEventListener('click', () => {
//     console.log('next', index)
//     images[index].style.zIndex = index + 1
//     // if (images.length === index) {
//     //     images[0].style.zIndex = index + 1
//     // }
//     index++
// })

// prevButton.addEventListener('click', () => {
//     console.log('prev', index)
//     images[index].style.zIndex = index + 1
//     // if (images.length === index) {
//     //     images[0].style.zIndex = index + 1
//     // }
//     index--
// })

// 3 - transform
// let transform = 100
// nextButton.addEventListener('click', () => {
//     for (let i = 0; i <= images.length; i++) {
//         if (images[i].getAttribute('id') !== 'last_img') {
//             images[i].style.transform = `translateX(-${transform}%)`
//         }
//     }
//     transform += 100
// })

// prevButton.addEventListener('click', () => {
//     for (let i = 0; i < images.length; i++) {
//         images[i].style.transform = `translateX(${transform}%)`
//     }
//     transform += 100
// })