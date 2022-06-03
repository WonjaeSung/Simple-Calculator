let answer = false
let current = []
let savedNumber = []

document.querySelector('#one').addEventListener('keyup', function(){
  buttonPushed('#one')
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

  if(current.includes('.')===true && button ==='#decimal'){
    return
    //current.splice(-1,1)
  }

  
  if(answer !== false){
    answer = false
    document.querySelector('#placeToPutEquation').innerText = ""
  current = []
  document.querySelector('#placeToPutResult').innerText = current.join('')
}


if(current.slice(-1)[0]==='+' || current.slice(-1)[0]==='-' || current.slice(-1)[0]==='*' || current.slice(-1)[0]==='/'){
  savedNumber = current
  current = []
  current.push(document.querySelector(button).innerText)
  document.querySelector('#placeToPutResult').innerText = current.join('')
  //console.log(current.slice(-1))  
}
else{
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

  console.log(current.slice(-1))
  if(current.slice(-1)[0]==='+' || current.slice(-1)[0]==='-' || current.slice(-1)[0]==='*' || current.slice(-1)[0]==='/'){
    current.splice(-1,1).push(document.querySelector(button).innerText)
    document.querySelector('#placeToPutEquation').innerText = current.join('')
  }

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

