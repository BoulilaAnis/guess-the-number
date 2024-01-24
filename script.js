
const maxNum = 100;
const minNum = 0;
const answer = Math.floor(Math.random() * (maxNum - minNum) + minNum)

let guess;
let attemps = 0;
let submit = document.getElementById("submit")
let message = document.getElementById("message")
let running = true
console.log(`The generated number is ${answer}`);

submit.onclick = function(){
        guess = document.getElementById("input").value
        guess = Number(guess)
        if(isNaN(guess)){
            message.textContent = "You must enter a number"
        }
        else if(guess < minNum || guess > maxNum){
            message.textContent = "Your number must be between 0 and 100"
        }
        else{
            attemps++
            document.getElementById('attemps').textContent = `your attemps is ${attemps}`
            if(guess < answer){
                message.textContent = "too low try again"
            }
            else if(guess > answer){
                message.textContent = "too height try again"
            }
            else if(guess === answer){
                message.textContent = `you win the number is ${answer}`
            }
    }

}
