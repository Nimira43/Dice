let randNum1 = Math.floor(Math.random() * 6) + 1
let randImg = `dice${randNum1}.png`
let randImgSource = `images/${randImg}`
let image1 = document.querySelectorAll('img')[0]
image1.setAttribute('src', randImgSource)

let randNum2 = Math.floor(Math.random() * 6) + 1
let randImgSource2 = `images/dice${randNum2}.png`
document.querySelectorAll('img')[1].setAttribute('src', randImgSource2)

if (randNum1 > randNum2) document.querySelector('h1').innerHTML = 'Player 1 wins'

if (randNum2 > randNum1) document.querySelector('h1').innerHTML = 'Player 2 wins'

if (randNum2 === randNum1) document.querySelector('h1').innerHTML = 'Draw'

