const btnNumber = document.querySelectorAll('.btnNumber')
const btnOperator = document.getElementsByClassName('btnOperator')
const result = document.querySelector('.result')
const btnClearOne = document.querySelector('.btnClearOne')
const btnClear = document.querySelector('.btnClear')
const equal = document.querySelector('.btnEqual')

// Clear One
btnClearOne.addEventListener('click', () => {
    const textResult = result.textContent
    result.innerHTML = textResult.slice(0, -1)
})

// Clear 
btnClear.addEventListener('click', () => {
    result.textContent = ''
})


//Button number
for (let i = 0; btnNumber.length > i; i++) {
    btnNumber[i].addEventListener('click', (e) => {
        let num = e.target.textContent

        result.innerHTML += num
    })
}

//Button operator
for (let i = 0; btnOperator.length > i; i++) {
    let arrOperator = []

    arrOperator.push(btnOperator[i].textContent)

    btnOperator[i].addEventListener('click', (e) => {

        const operator = e.target.textContent
        result.innerHTML += operator
    })
}

//Equal and calcule

equal.addEventListener('click', () => {
    let textResult = result.textContent

    result.textContent = eval(textResult)
})








