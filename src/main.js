import { howl } from 'howler'

import soundEffectOneSrc from './assets/ghost.wav'

import soundEffectTwoSrc from './assets/qubodup-PowerDrain.ogg'

import backgroundMusicSrc from './assets/03_SITF-Tranquillity.ogg'

const soundEffectOne = new Howl({
  src: [soundEffectOneSrc],
  volume: 0.3
})
const soundEffectTwo = new Howl({
  src: [soundEffectTwoSrc],
  volume: 0.3
})

const backgroundMusic = new Howl({
  src: [backgroundMusicSrc],
  autoplay: true,
  loop: true,
  volume: 0.5
})

let score= 0

let clicker = document.getElementById('clicker')



let scoreDisplay = document.getElementById('scoreDisplay')

function updateScore (amount) {
  score+= amount
  scoreDisplay.innerText = score.toFixed(0) + 'cargo'
}

clicker.addEventListener("click", function(){
  let clickAmt = 1 + (hooks ** 1.05)
  
  updateScore(clickAmt)
  
})


let upgradeOne = document.getElementById("upgradeOne")
let upgradeOneCount = document.getElementById("upgradeOneCount")
let hooks = 0

upgradeOne.addEventListener("click", function () {
  if (score >= 112) {
    
    updateScore(-112)
    hooks++
    upgradeOneCount.innerText = hooks + "hooks"
  } else {
    alert('no')
  }
 
})
clicker.addEventListener("click", function(){
  let clickAmt = 1 + (hooks ** 1.05) + (redhooks ** 1.70)

  soundEffectOne.play()
  
  updateScore(clickAmt)
  
})

let upgradeTwo = document.getElementById("upgradeTwo")
let upgradeTwoCount = document.getElementById("upgradeTwoCount")
let redhooks = 0

upgradeTwo.addEventListener("click", function () {
  if (score >= 730) {
    
    updateScore(-730)
    redhooks++
    upgradeTwoCount.innerText = redhooks + "redhooks"
  } else {
    alert('no bro') 
    soundEffectTwo.play()
  }
 
})

function gameloop(){
  console.log("Hi from gameloop")
  let clickAnt = (sprinkles ** 1.05)
  updateScore(clickAnt)
}
setInterval (gameloop, 1000)