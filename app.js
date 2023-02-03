const box = document.querySelector('.box')
const btn = document.getElementById('btn')

btn.addEventListener('click', function() {
    let str = '0123456789abcdef'
    let color = ''
    // let index = ''

    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * str.length)
        color += str[index]
        box.textContent = '#' + color
        box.style.backgroundColor = box.textContent
    }
    // return '#' + color
})

const arr = ['rock', 'paper', 'scissors']
let re = arr[Math.floor(Math.random() * arr.length)]
console.log(re);
// console.log(Object.entries(arr), arr[re]);

// // rgb(255, 255, 255)
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
// console.log(randomColor());


// function click() {
//     let str = '0123456789abcdef'
//     let color =''
//     for (let st of str) {
//         let index = Math.floor(Math.random() * str.length)
//         console.log(index)
//     }
// }

// btn.addEventListener('click', function() {
//     let str = '0123456789abcdef'
//     let color = ''
//     for (let i = 0; i < 6; i++) {
//         let index = Math.floor(Math.random() * str.length)
//         color += str[index]
//         btn.textContent = '#' + color
//         btn.style.color = btn.textContent
//     }
// })

const lists = document.querySelectorAll('.color-box')
// console.log(lists)

// const press = () => {
//     lists.forEach((list) => {
//         let hexCode = '#' + Math.random().toString(16).substring(2, 8)
//         list.style.backgroundColor = hexCode
//         list.textContent = hexCode
//         list.style.fontSize = '20px'
//         list.style.color = 'white'
//         console.log(list)
//     })
// }
// press()

// const one = document.getElementById('one')
// console.log(one)
// const change = () => {
//     let hexCode = '#' + Math.random().toString(16).substring(2,8)
//     lists.style.backgroundColor = hexCode
//     lists.textContent = hexCode
//     console.log(hexCode)
// }
// change()

const box1 = document.querySelector('.box1 ')
const box2 = document.querySelector('.box2')
const box3 = document.querySelector('.box3')
const box4 = document.querySelector('.box4')
const box5 = document.querySelector('.box5')
const box6 = document.querySelector('.box6')

// let arrayOne = ['color1', 'color2', 'color3', 'color4', 'color5', 'color6']
let arrayOne = []
let arrayTwo = [box1, box2, box3, box4, box5, box6]

function press() {
    let colorContainer = []
    for (let i = 0; i < 6; i++) {
        let colors = '#' + Math.random().toString(16).substring(2,8)
        colorContainer.push(colors)
    }
    arrayOne = colorContainer
    arrayTwo.forEach((item, index) => {
        item.style.backgroundColor = arrayOne[index]
        item.innerHTML = arrayOne[index]
    })
    // console.log()
    // console.log(colors)
}
// press()
// console.log(arrayOne)

function clicked(event) {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * str.length)
        color += str[index]
    }
    event.target.style.backgroundColor = '#' + color
    event.target.textContent = '#' + color
    console.log(color)
}


const btncounter = document.getElementById('btncounter')
const result = document.getElementById('result')
let counter = 0

btncounter.addEventListener('click', () => {
    counter++
    result.innerHTML = counter
}, 1000) 


// let previousIndex = 2 
// let currentIndex; 
// setInterval(() => {
//     let arr = [1, 4, 9]

//     if (previousIndex === 2) {
//         currentIndex = 0
//         previousIndex = 0
//     } else if (previousIndex === 0) {
//         currentIndex = 1
//         previousIndex = 1
//     } else if (previousIndex == 1) {
//         currentIndex = 2
//         previousIndex = 2
//     }
//     console.log(arr[currentIndex])
//     return () => clearInterval(setInterval)
// }, 3000)