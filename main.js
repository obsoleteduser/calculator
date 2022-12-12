const display = document.querySelector('.display')
// const one = document.querySelector('.one')
// const two = document.querySelector('.two')
// const three = document.querySelector('.three')
// const four = document.querySelector('.four')
// const five = document.querySelector('.five')
// const six = document.querySelector('.six')
// const seven = document.querySelector('.seven')
// const eight = document.querySelector('.eight')
// const nine = document.querySelector('.nine')
// const zero = document.querySelector('.zero')
const equals = document.querySelector('.equals')
const clear = document.querySelector('.clear')

const buttons = document.querySelectorAll('.button:not(.clear, .equals)')

buttons.forEach(button =>{
    button.addEventListener('click', ()=>{
        display.innerHTML+=button.getAttribute('data')
       
    })
})

equals.addEventListener('click', ()=>{
    console.log(display.textContent)
    display.innerHTML += `=${eval(display.textContent)}`
})



clear.addEventListener('click', ()=>{
    display.innerHTML = ''
})