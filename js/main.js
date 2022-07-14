let answer = false
let current = []
let savedNumber = []

//eventListeners for keyboard buttons

addEventListener("keyup",function (event){
  if (event.code ==='Digit2'){
    buttonPushed('#two')
  }
  if (event.code ==='Digit1'){
    buttonPushed('#one')
  }
  if (event.code ==='Digit3'){
    buttonPushed('#three')
  }
  if (event.code ==='Digit4'){
    buttonPushed('#four')
  }
  if (event.code ==='Digit5'){
    buttonPushed('#five')
  }
  if (event.code ==='Digit6'){
    buttonPushed('#six')
  }
  if (event.code ==='Digit7'){
    buttonPushed('#seven')
  }
  if (event.code ==='Digit8'){
    buttonPushed('#eight')
  }
  if (event.code ==='Digit9'){
    buttonPushed('#nine')
  }
  if (event.code ==='Digit0'){
    buttonPushed('#zero')
  }
  if (event.code ==='Period'){
    buttonPushed('#decimal')
  }
  if (event.code ==='Slash'){
    arithmeticOperatorPushed('#divide')
  }
  if (event.code ==='Minus'){
    arithmeticOperatorPushed('#minus')
  }
  if (event.code ==='NumpadAdd'){
    arithmeticOperatorPushed('#plus')
  }
  if (event.code ==='NumpadMultiply'){
  arithmeticOperatorPushed('#multiply')
  } 
  if (event.code ==='Enter'){
  equalSign()
  }
}) 

document.querySelector('#one').addEventListener('click', function(){
  buttonPushed('#one')
})

document.querySelector('#two').addEventListener('click', function(){
  buttonPushed('#two')
})

document.querySelector('#three').addEventListener('click', function(){
  buttonPushed('#three')
})

document.querySelector('#four').addEventListener('click', function(){
  buttonPushed('#four')
})

document.querySelector('#five').addEventListener('click', function(){
  buttonPushed('#five')
})

document.querySelector('#six').addEventListener('click', function(){
  buttonPushed('#six')
})

document.querySelector('#seven').addEventListener('click', function(){
  buttonPushed('#seven')
})

document.querySelector('#eight').addEventListener('click', function(){
  buttonPushed('#eight')
})

document.querySelector('#nine').addEventListener('click', function(){
  buttonPushed('#nine')
})

document.querySelector('#zero').addEventListener('click', function(){
  buttonPushed('#zero')
})

document.querySelector('#decimal').addEventListener('click', function(){
  buttonPushed('#decimal')
})


document.querySelector('#plus').addEventListener('click', function(){
  arithmeticOperatorPushed('#plus')
})

document.querySelector('#minus').addEventListener('click', function(){
  arithmeticOperatorPushed('#minus')
})

document.querySelector('#multiply').addEventListener('click', function(){
  arithmeticOperatorPushed('#multiply')
})

document.querySelector('#divide').addEventListener('click', function(){
  arithmeticOperatorPushed('#divide')
})

document.querySelector('#equals').addEventListener('click', function(){
  equalSign()
})



function buttonPushed (button) {

//if there is a decimal entered in already in the input, it ignores decimal that comes after
 
  if(current.includes('.')===true && button ==='#decimal'){
    return
  }

  
  //if there was a result shown, start over
  if(answer !== false){
    answer = false
    document.querySelector('#placeToPutEquation').innerText = ""
  current = []
  document.querySelector('#placeToPutResult').innerText = current.join('')
  }
  

if(current.slice(-1)[0]==='+' || current.slice(-1)[0]==='-' || current.slice(-1)[0]==='*' || current.slice(-1)[0]==='/'){
  savedNumber = current
  current = []
  //current.push(document.querySelector(button).innerText)
  document.querySelector('#placeToPutResult').innerText = current.join('')
  //console.log(current.slice(-1))  
}

//if there are more than 12 numbers entered, it ignores the rest.
if(current.length >= 12){
return 
}

else
{
  current.push(document.querySelector(button).innerText)
  document.querySelector('#placeToPutResult').innerText = current.join('')
  //console.log(current.slice(-1))
}
}



function arithmeticOperatorPushed (button) {
 if(answer !== false){
  current = [answer]
  answer = false
  current.push(document.querySelector(button).innerText)
  document.querySelector('#placeToPutEquation').innerText = current.join('')
 }

//if last character entered was a arithmetic operator then next arithmetic operator immediate after will replace that
  if(current.slice(-1)[0]==='+' || current.slice(-1)[0]==='-' || current.slice(-1)[0]==='*' || current.slice(-1)[0]==='/'){
    current.splice(-1,1).push(document.querySelector(button).innerText)
    document.querySelector('#placeToPutEquation').innerText = current.join('')
  }

//attach artihmetic operator to the end of the numbers
  current.push(document.querySelector(button).innerText)
  document.querySelector('#placeToPutEquation').innerText = current.join('')
}



function equalSign() {
  let sign = savedNumber.splice(-1,1).toString()
  let first = Number(savedNumber.join(''))
  let second = Number(current.join(''))
  if(sign==="+"){answer=first+second}
  else if(sign==="-"){answer=first-second}
  else if(sign==="*"){answer=first*second}
  else if(sign==="/"){answer=first/second}
  document.querySelector('#placeToPutResult').innerText = answer.toLocaleString()
}

