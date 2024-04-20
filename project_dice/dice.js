let box = document.querySelector(".box")
let startButton = document.querySelector(".start-button")
let header = document.querySelector(".header")
let secondDisplay = document.querySelector(".second-display")
let header2 = document.querySelector(".header2")
let positionDice = document.querySelector(".position-dice")
let countOfDice = document.querySelector(".count-of-dice")
let polzunok = document.querySelector(".polzunok")
let box2 = document.querySelector(".box2")
let dice = document.querySelector(".dice")
let dice2 = document.querySelector(".dice2")
let dice3 = document.querySelector(".dice3")
let startButton2 = document.querySelector(".start-button2")
let slider = document.querySelector(".slider")

let current_rotation = 0


box.style.display="flex"
secondDisplay.style.display="none"

let dice_list = ["1.png","2.png","3.png","4.png","5.png","6.png"]

function getRandomInt(min, max) {
    // Use Math.floor to round down to the nearest whole number
    // Use Math.random() to generate a random decimal between 0 (inclusive) and 1 (exclusive)
    // Multiply by the range (max - min + 1) to cover the entire range
    // Add the minimum value to shift the range to [min, max]
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rotate(){
    if((current_rotation + 90) % 180 == 0){ //frames of the dice being in the position of 90deg
        do{
            new_pic = dice_list[getRandomInt(0,5)]
        }while (new_pic == dice.src) //no repitition

        do{
            new_pic2 = dice_list[getRandomInt(0,5)]
        }while (new_pic2 == dice2.src) //no repitition

        do{
            new_pic3 = dice_list[getRandomInt(0,5)]
        }while (new_pic3 == dice3.src) //no repitition

        dice.src = new_pic
        dice2.src = new_pic2
        dice3.src = new_pic3
    }
    dice.style.transform = `rotateX(${current_rotation}deg)`
    dice2.style.transform = `rotateX(${current_rotation}deg)`
    dice3.style.transform = `rotateX(${current_rotation}deg)`
        current_rotation += 180/60 //degrees per frame
        if (current_rotation == 180*3){
            startButton2.disabled = false
            return 0
        }
        setTimeout(rotate,1000/60) //1/60th of a second (60fps)
}

startButton.addEventListener("click",function(){
    box.style.display="none"
    secondDisplay.style.display="flex"
})

startButton2.addEventListener("click",function(){
    startButton2.disabled = true
    current_rotation = 0
    rotate()
})

slider.addEventListener("mousemove",function(){
    if (slider.value == 1){
        dice.style.display = "block"
        dice2.style.display = "none"
        dice3.style.display = "none"
    }
    if (slider.value == 2){
        dice.style.display = "block"
        dice2.style.display = "block"
        dice3.style.display = "none"
    }
    if (slider.value == 3){
        dice.style.display = "block"
        dice2.style.display = "block"
        dice3.style.display = "block"
    }
})
