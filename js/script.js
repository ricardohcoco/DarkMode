import Sound from "./sounds.js"

// Variáveis

const darkmode = document.querySelector('.btnsun')
const images = document.getElementById('sol')
const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const addMinutes = document.querySelector('.moreMinutes')
const removeMinutes = document.querySelector('.lessMinutes')
const secondsDisplay = document.querySelector('.seconds')
let minutesDisplay = document.querySelector('.minutes')
const sounds = Sound()
const buttonPlay2 = document.getElementById('play2')
const buttonSoundForest = document.querySelector('.forest')
const buttonSoundForest2 = document.querySelector('.forest2')
const buttonSoundRain = document.querySelector('.rain')
const buttonSoundRain2 = document.querySelector('.rain2')
const buttonSoundCoffeeshop = document.querySelector('.coffeeshop')
const buttonSoundCoffeeshop2 = document.querySelector('.coffeeshop2')
const buttonSoundFireplace = document.querySelector('.fireplace')
const buttonSoundFireplace2 = document.querySelector('.fireplace2')
const buttonStop2 = document.getElementById('stop2')
const addMinutes2 = document.querySelector('.moreMinutes2')
const removeMinutes2 = document.querySelector('.lessMinutes2')
const secondsDisplay2 = document.querySelector('.seconds2')
const forestimg = document.querySelector('.forestcolor2')
const rainimg = document.querySelector('.raincolor2')
const coffeeshopimg = document.querySelector('.coffeeshopcolor2')
const fireplaceimg = document.querySelector('.fireplacecolor2')
const soundBar = document.getElementById('volume')
const soundBarRain = document.getElementById('volumerain')


let minutesDisplay2 = document.querySelector('.minutes2')
let timerTimeOut


// Troca de telas e cores

function screenColor () {
  const body = document.getElementsByTagName('body')[0]
  if (body.style.backgroundColor==="rgb(18, 18, 20)" && images.src.match('/imagesbtn/btnmoon.svg')) {
    body.style.backgroundColor="white"
    images.src='/imagesbtn/btnsun.svg'
  } else {
    body.style.backgroundColor="rgb(18, 18, 20)"
    images.src="/imagesbtn/btnmoon.svg"
  } 
}

const lightmode = document.querySelector('.screen1')
const darkmode2 = document.querySelector('.screen2')

function screenChange () {
  console.log('oi')
  screenColor()
  if (lightmode.style.display === 'none') {
    lightmode.style.display = 'flex' 
    darkmode2.style.display = 'none'
  } else {
    lightmode.style.display = 'none' 
    darkmode2.style.display = 'flex'
  }
}


// Funcionamento do crônometro em darkmode

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function resetTimer() {
  updateTimerDisplay(25, 0)
  clearTimeout (timerTimeOut)
}

function countdown () {
  timerTimeOut = setTimeout(function() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateTimerDisplay(minutes, 0)

    if (minutes <= 0) {
      return resetTimer()
    }

    if (seconds <= 0) {
      seconds = 60
      --minutes
    }

    updateTimerDisplay(minutes, String(seconds - 1))

    countdown()
}, 1000)
}

function moreMinutes() {
  let tagHTML = document.getElementById('num')
  let num = Number(tagHTML.innerText) + 5 
  tagHTML.innerText = String(num).padStart(2, "0")
}

function lessMinutes() {
  let tagHTML = document.getElementById('num')
  let num = Number(tagHTML.innerText) - 5
  tagHTML.innerText = String(num).padStart(2, "0")
  let zero = 0
    if (tagHTML.innerText <= 0) {
      tagHTML.innerText = String(zero).padStart(2, "0")
    } 
}


// Funcionamento do cronômetro em lightmode

function updateTimerDisplay2(minutes, seconds) {
  minutesDisplay2.textContent = String(minutes).padStart(2, "0")
  secondsDisplay2.textContent = String(seconds).padStart(2, "0")
}

function resetTimer2() {
  updateTimerDisplay(25, 0)
  clearTimeout(timerTimeOut)
}

function countdown2 () {
  console.log(secondsDisplay2)
  console.log(minutesDisplay2)
  timerTimeOut = setTimeout(function() {
    let seconds = Number(secondsDisplay2.textContent)
    let minutes = Number(minutesDisplay2.textContent)

    updateTimerDisplay2(minutes, 0)

    if (minutes <= 0) {
      return resetTimer2()
    }

    if (seconds <= 0) {
      seconds = 60
      --minutes
    }

    updateTimerDisplay2(minutes, String(seconds - 1))

    countdown2()
}, 1000)
}

function moreMinutes2() {
  let tagHTML = document.getElementById('num2')
  let num = Number(tagHTML.innerText) + 5 
  tagHTML.innerText = String(num).padStart(2, "0")
}

function lessMinutes2() {
  let tagHTML = document.getElementById('num2')
  let num = Number(tagHTML.innerText) - 5
  tagHTML.innerText = String(num).padStart(2, "0")
  let zero = 0
    if (tagHTML.innerText <= 0) {
      tagHTML.innerText = String(zero).padStart(2, "0")
    } 
}


// Chamando as funções


const soundForest = new Audio("https://drive.google.com/u/0/uc?id=1CRHkV72WUMdcqec5GT_KdsqFz0z3VAOA&export=download")
const soundRain = new Audio("https://drive.google.com/u/0/uc?id=1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2&export=download")
const soundCoffeeshop = new Audio("https://drive.google.com/u/0/uc?id=1OxLKpCwg2wrxXFNUHgZxJ51QEt0ac5RA&export=download")
const soundFireplace = new Audio("https://drive.google.com/u/0/uc?id=1MakaBPxJvTa_whaSM3kEbRcxiVd1GRCB&export=download")
let volumeTimeout = null;

function updateVolume(volume,som) {
  console.log(volume);
  clearTimeout(volumeTimeout);
  volumeTimeout = setTimeout(() => {
    som.volume = volume;
  }, 100);
  som.play();
}

soundBar.addEventListener('input', function() {
  const volume = this.value;
  updateVolume(volume, soundForest);
});

buttonSoundForest.addEventListener('click', function() {
  const volume = soundBar.value;
  localStorage.setItem('som', 'forest')
  updateVolume(volume, soundForest);
    soundRain.pause()
    soundCoffeeshop.pause()
    soundFireplace.pause()
});

soundBarRain.addEventListener('input', function() {
  const volume = this.value;
  updateVolume(volume, soundRain);
})

buttonSoundRain.addEventListener('click', function() {
  const volume = soundBarRain.value;
  localStorage.setItem('som', 'rain')
  updateVolume(volume, soundRain);
    soundForest.pause()
    soundCoffeeshop.pause()
    soundFireplace.pause()
});


buttonPlay.addEventListener('click', function() {
  const sound = localStorage.getItem('som')
  console.log(sound)
  if (sound === 'forest') {
    buttonSoundForest()
    countdown()
  }
  if (sound === 'rain') {
    buttonSoundRain()
    countdown()
  }
  if (sound === 'coffeeshop') {
    sounds.Coffeeshop()
    countdown()
  }
  if (sound === 'fireplace') {
    sounds.Fireplace()
    countdown()
  } 
  if (sound === null || sound === undefined) {
  sounds.defaultSound()
  countdown()
}
})

buttonPlay2.addEventListener('click', function() {
  const sound = localStorage.getItem('som')
  console.log(sound)
  if (sound === 'forest') {
    sounds.Forest()
    countdown()
  }
  if (sound === 'rain') {
    sounds.Rain()
    countdown()
  }
  if (sound === 'coffeeshop') {
    sounds.Coffeeshop()
    countdown()
  }
  if (sound === 'fireplace') {
    sounds.Fireplace()
    countdown()
  } 
  if (sound === null || sound === undefined) {
  sounds.defaultSound()
  countdown()
}
})

buttonStop.addEventListener('click', function() {
  clearTimeout(timerTimeOut)
  sounds.StopSound()
})

buttonStop2.addEventListener('click', function() {
  clearTimeout(timerTimeOut)
  sounds.StopSound()
})

addMinutes.addEventListener('click', moreMinutes)

removeMinutes.addEventListener('click', lessMinutes)

buttonPlay2.addEventListener('click', function() {
  countdown2()
})

buttonStop2.addEventListener('click', function() {
  clearTimeout(timerTimeOut)
})

addMinutes2.addEventListener('click', moreMinutes2)

removeMinutes2.addEventListener('click', lessMinutes2)

darkmode.addEventListener('click', function() {
  screenChange()
})


buttonSoundForest2.addEventListener('click', function() {
  sounds.Forest()
})


buttonSoundRain2.addEventListener('click', function() {
  sounds.Rain()
})

buttonSoundCoffeeshop.addEventListener('click', function() {
  sounds.Coffeeshop()
})

buttonSoundCoffeeshop2.addEventListener('click', function() {
  sounds.Coffeeshop()
})

buttonSoundFireplace.addEventListener('click', function() {
  sounds.Fireplace()
})

buttonSoundFireplace2.addEventListener('click', function() {
  sounds.Fireplace()
})