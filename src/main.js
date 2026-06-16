import { howl } from 'howler'

import soundEffectOneSrc from './assets/ghost.wav'

import soundEffectTwoSrc from './assets/qubodup-PowerDrain.ogg'

import backgroundMusicSrc from './assets/03_SITF-Tranquillity.ogg'

const buy = new Howl({
  src: [soundEffectOneSrc],
  volume: 0.5
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
let score = 0

let clicker = document.getElementById('clicker')

let scoreDisplay = document.getElementById('scoreDisplay')

function updateScore(amount) {
  score += amount
  scoreDisplay.innerHTML = score.toFixed(1) + 'cargo'
}

clicker.addEventListener("click", function () {
  let clickAmt = 1 + (hooks ** 1.05)

  buy.play("buy")

  updateScore(clickAmt)

})
function updateScore(amount) {
  score += amount
  scoreDisplay.innerHTML = score.toFixed(1) + "cargo"
}
clicker.addEventListener(click)

clicker.addEventListener("click", function () {
  let clickAmt = 1 + (hooks ** 1.05) + (redhooks ** 1.70)

  soundEffectOne.play()

  updateScore(clickAmt)

})
let hooks = 0
let upgrade1 = document.getElementById("upgrade1")
upgrade1.addEventListener("click", function () {
  buy.play("buy")
  if (score >= 112) {
    updateScore(-112);
    hooks++;
    upgrade1.innerHTML = "buy a hooks (112 points) you have " + hooks + "hooks";
    upgrade1.classList.add("btn-accessible");
    setTimeout(() => {
      upgrade1.classList.remove("btn-accessible");
    }, 300);
  } else {
    showPopup();
    upgrade1.classList.add('btn-unaffordable');
    setTimeout(() => {
      upgrade1.classList.remove("btn-unaffordable");
    }, 300);
  };
})

let redhook = 0
let upgrade2 = document.getElementById("upgrade2")
upgrade2.addEventListener("click", function () {
  buy.play("buy")
  if (score >= 730) {
    updateScore(-730)
    redhooks++
    upgrade2.innerHTML = "Buy a redhook (730 points) you have" + redhook + "redhooks"
    upgrade2.classList.add("btn-accessibile");
    setTimeout(() => {
      upgrade2.classList.remove("btn-accessibile");
    }, 300);
  } else {
    showPopup();
    upgrade2.classList.add("btn-unaffordable");
    setTimeount(() => {
      upgrade2.classList.remove("btn-unaffordable")
    }, 300);
  }

})


let upgradeTwo = document.getElementById("upgradeTwo")
let upgradeTwoCount = document.getElementById("upgradeTwoCount")
let redhooks = 0

upgradeTwo.addEventListener("click", function () {
  if (score >= 730) {

    updateScore(-730)
    redhooks++

    upgradeTwoCount.innerHTML = "Buy a redhook (730 points) You have " + redhooks + "redhooks"

  } else {
    alert('no bro')
    soundEffectOne.play()
  }

})

function gameloop() {
  let clickAnt = (hooks ** 1.05)
  updateScore(clickAnt)
}


setInterval(gameloop, 1000)
const popup = document.getElementById("popup-message")

function showPopup() {
  popup.classList.remove("hidden");
  setTimeout(() => {
    popup.classList.add("hidden");
  }, 1500);
}