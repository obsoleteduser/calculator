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
const operations = document.querySelectorAll(' .plus, .minus, .divide, .multiply')
console.log(operations)
operations.forEach(operation =>{
    operation.addEventListener('click', ()=>{
        console.log(operation)
        if(display.textContent[display.textContent.length-1] === operation.getAttribute('data')) null
        else{ 
            
            display.innerHTML+=operation.getAttribute('data') }
    })
})


const buttons = document.querySelectorAll('.button:not(.clear, .equals, .plus, .minus, .divide, .multiply)')

buttons.forEach(button =>{
    button.addEventListener('click', ()=>{
        display.innerHTML+=button.getAttribute('data')
       console.log(display.textContent[display.textContent.length-2]===button.getAttribute('data'))
    })
})

equals.addEventListener('click', ()=>{
    console.log(display.textContent)
    try{
    display.innerHTML += `=${eval(display.textContent)}`
    } catch(e){display.innerHTML=`WTF!?`}
})



clear.addEventListener('click', ()=>{
    display.innerHTML = ''
})