//Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber =  Math.round(Math.random() * 10)
let xAttempts = 1

// Events
btnTry.addEventListener('click', noEmptyInputNumber)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function (event) {
  if(event.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
})
//Funções

function noEmptyInputNumber(event) {
  const inputNumber = document.querySelector("#inputNumber")

  if(inputNumber.value != "" && inputNumber.value >= 0 && inputNumber.value <= 10){
    handleTryClick(event)
  } else if(inputNumber.value < 0 || inputNumber.value > 10 && inputNumber.value > 0 && inputNumber.value > 10) {
    alert("O valor tem que ser entre 0 a 10")
    event.preventDefault()
  } else {
    alert("Campo Obrigatório")
    event.preventDefault()
  }
}


function handleTryClick(event) {
  event.preventDefault() // Não faça o padrão da tag

  const inputNumber = document.querySelector("#inputNumber");

  if(Number(inputNumber.value) == randomNumber) {
    if(xAttempts == 1){
      toggleScreen()
      screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativa`
    } else {
      toggleScreen()
     screen2.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas`
    }
  }

  inputNumber.value = ""
  xAttempts++
}

function handleResetClick() {
  toggleScreen()
  randomNumber =  Math.round(Math.random() * 10)
  xAttempts = 1
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}


  

  

