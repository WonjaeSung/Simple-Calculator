let answer = false
let current = []
let savedNumber = []

//eventListeners for keyboard buttons

const numberKeys = new Map([['0', '#zero'], ['1', '#one'], ['2', '#two'], ['3', '#three'], ['4', '#four'], ['5', '#five'], ['6', '#six'], ['7', '#seven'], ['8', '#eight'], ['9', '#nine'], ['.', '#decimal']])

  const operatorKeys = new Map([['*', '#multiply'], ['/', '#divide'], ['+', '#plus'], ['-', '#minus'], ['%', '#modulus']])

  const allKeys = new Map([...numberKeys].concat([...operatorKeys]))

addEventListener("keyup", function (event) {


  // console.log(event)

  if (numberKeys.has(event.key)) { numberButtonPushed(numberKeys.get(event.key)) }

  if (operatorKeys.has(event.key)) { arithmeticOperatorPushed(operatorKeys.get(event.key)) }

  if (event.key === 'Enter') { equalSign() }

  if (event.key === 'Shift') {
    void (0)
    console.log("what")
  }
})

// ** container is targeting an id from HTML **
container.addEventListener('click', (event) => {
  numberButtonPushed(`#${event.target.id}`)
})

//   document.querySelector('#nine').addEventListener('click', function () {
//   numberButtonPushed('#nine')
// })

//   document.querySelector('#zero').addEventListener('click', function () {
//   numberButtonPushed('#zero')
// })

//   document.querySelector('#decimal').addEventListener('click', function () {
//   numberButtonPushed('#decimal')
// })


//   document.querySelector('#plus').addEventListener('click', function () {
//   arithmeticOperatorPushed('#plus')
// })

//   document.querySelector('#minus').addEventListener('click', function () {
//   arithmeticOperatorPushed('#minus')
// })

//   document.querySelector('#multiply').addEventListener('click', function () {
//   arithmeticOperatorPushed('#multiply')
// })

//   document.querySelector('#divide').addEventListener('click', function () {
//   arithmeticOperatorPushed('#divide')
// })

//   document.querySelector('#equals').addEventListener('click', function () {
//   equalSign()
// })


  function numberButtonPushed(button) {

    // console.log(button)

    //if there is a decimal entered in already in the input, it ignores decimal that comes after

    if (current.includes('.') === true && button === '#decimal') {
      return
    }


    //if there was a result shown, start over
    else if (answer !== false) {
      answer = false
      document.querySelector('#placeToPutEquation').innerText = ""
      current = []
      document.querySelector('#placeToPutResult').innerText = current.join('')
    }


    else if (current.slice(-1)[0] === '+' || current.slice(-1)[0] === '-' || current.slice(-1)[0] === '*' || current.slice(-1)[0] === '/') {
      savedNumber = current
      current = []
      //current.push(document.querySelector(button).innerText)
      document.querySelector('#placeToPutResult').innerText = current.join('')
      //console.log(current.slice(-1))  
    }

    //if there are more than 12 numbers entered, it ignores the rest.
    else if (current.length >= 12) {
      return
    }

    else {
      current.push(document.querySelector(button).innerText)
      document.querySelector('#placeToPutResult').innerText = current.join('')
      console.log(current)
      //console.log(current.slice(-1))
    }
  }



  function arithmeticOperatorPushed(button) {
    if (answer !== false) {
      current = [answer]
      answer = false
      current.push(document.querySelector(button).innerText)
      document.querySelector('#placeToPutEquation').innerText = current.join('')
    }

    //if last character entered was a arithmetic operator then next arithmetic operator immediate after will replace that
    if (current.slice(-1)[0] === '+' || current.slice(-1)[0] === '-' || current.slice(-1)[0] === '*' || current.slice(-1)[0] === '/') {
      current.splice(-1, 1).push(document.querySelector(button).innerText)
      document.querySelector('#placeToPutEquation').innerText = current.join('')
    }

    //attach artihmetic operator to the end of the numbers
    current.push(document.querySelector(button).innerText)
    document.querySelector('#placeToPutEquation').innerText = current.join('')
  }

  function equalSign() {
    let sign = savedNumber.splice(-1, 1).toString()
    let first = Number(savedNumber.join(''))
    let second = Number(current.join(''))
    if (sign === "+") { answer = first + second }
    else if (sign === "-") { answer = first - second }
    else if (sign === "*") { answer = first * second }
    else if (sign === "/") { answer = first / second }
    document.querySelector('#placeToPutResult').innerText = answer.toLocaleString()
  }