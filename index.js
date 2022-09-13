let player1Turn = true
let player1TotalScore = 0
let player2TotalScore = 0

const turnMessage = document.getElementById("message")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player1Dice = document.getElementById("player1Dice")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const player2Dice = document.getElementById("player2Dice")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const overlay = document.getElementById("overlay")
const container = document.getElementById("container")
const winnerBanner = document.getElementById("winner")


rollBtn.addEventListener("click", function () {
    const randomNumber = Math.floor((Math.random() * 6) + 1)
    if (player1Turn) {
        player1TotalScore += randomNumber
        player1Scoreboard.textContent = `${player1TotalScore}`
        player1Turn = !player1Turn
        turnMessage.textContent = "Player 2 Turn!"
        player2Dice.classList.add("active")
        player2Dice.classList.remove("not-active")
        player1Dice.classList.add("not-active")
        player1Dice.classList.remove("active")
        if (randomNumber === 1) {
            player1Dice.innerHTML = `<span class="dot"></span>`
        } else if (randomNumber === 2) {
            player1Dice.innerHTML = `<span class="dot"></span>
                                                <span class="dot"></span>`
        } else if (randomNumber === 3) {
            player1Dice.innerHTML = `<span class="dot"></span>
                                                <span class="dot"></span>
                                                <span class="dot"></span>`
        } else if (randomNumber === 4) {
            player1Dice.innerHTML = `<span class="dot"></span>
                                                <span class="dot"></span>
                                                <span class="dot"></span>
                                                <span class="dot"></span>`
        } else if (randomNumber === 5) {
            player1Dice.innerHTML = `<span class="dot"></span>
                                                <span class="dot"></span>
                                                <span class="dot"></span>
                                                <span class="dot"></span>
                                                <span class="dot"></span>`
        } else if (randomNumber === 6) {
            player1Dice.innerHTML = `<span class="dot"></span>
                                                <span class="dot"></span>
                                                <span class="dot"></span>
                                                <span class="dot"></span>
                                                <span class="dot"></span>
                                                <span class="dot"></span>`
        }
        if (player1TotalScore >= 30) {
            turnMessage.textContent = ""
            overlay.classList.remove("invisible")
            overlay.classList.add("visible")
            container.classList.add("invisible")
            winnerBanner.textContent = 'Player One is Victorious But...'
        }
    } else {
        player2TotalScore += randomNumber
        player2Scoreboard.textContent = `${player2TotalScore}`
        player1Turn = !player1Turn
        turnMessage.textContent = "Player 1 Turn!"
        player1Dice.classList.add("active")
        player1Dice.classList.remove("not-active")
        player2Dice.classList.remove("not-active")
        player2Dice.classList.remove("active")
        if (randomNumber === 1) {
            player2Dice.innerHTML = `<span class="dot"></span>`
        } else if (randomNumber === 2) {
            player2Dice.innerHTML = `<span class="dot"></span>
                                                    <span class="dot"></span>`
        } else if (randomNumber === 3) {
            player2Dice.innerHTML = `<span class="dot"></span>
                                                    <span class="dot"></span>
                                                    <span class="dot"></span>`
        } else if (randomNumber === 4) {
            player2Dice.innerHTML = `<span class="dot"></span>
                                                    <span class="dot"></span>
                                                    <span class="dot"></span>
                                                    <span class="dot"></span>`
        } else if (randomNumber === 5) {
            player2Dice.innerHTML = `<span class="dot"></span>
                                                    <span class="dot"></span>
                                                    <span class="dot"></span>
                                                    <span class="dot"></span>
                                                    <span class="dot"></span>`
        } else if (randomNumber === 6) {
            player2Dice.innerHTML = `<span class="dot"></span>
                                                    <span class="dot"></span>
                                                    <span class="dot"></span>
                                                    <span class="dot"></span>
                                                    <span class="dot"></span>
                                                    <span class="dot"></span>`
        }
        if (player2TotalScore >= 30) {
            turnMessage.textContent = ""
            overlay.classList.remove("invisible")
            overlay.classList.add("visible")
            container.classList.add("invisible")
            winnerBanner.textContent = 'Player Two is Victorious But...'
        }
    }
})

resetBtn.addEventListener('click', function () {
    document.location.reload(true)
    //  player1Scoreboard.textContent = '0'
    //  player2Scoreboard.textContent = '0'
    //  player1turn = true
    //  turnMessage.textContent = "Player 1 Turn!"
    //  overlay.classList.remove("visible")
    //  overlay.classList.add("invisible")
    //  container.classList.add("visible")
})