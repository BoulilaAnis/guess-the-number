
const maxNum = 100;
const minNum = 0;
const answer = Math.floor(Math.random() * (maxNum - minNum) + minNum)

let guess;
let attemps = 0;
let submit = document.getElementById("submit")
let message = document.getElementById("message")
let running = true

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
                if(attemps < 5){
                    document.getElementById('attemps').style = "display: none;"
                    message.innerHTML = `<p>
                                            the number is ${answer} <br>
                                            you are greatest man in the word <br>
                                            you win in ${attemps} attemps <br>
                                        </p>`
                    message.style = `font-size: 45px; 
                                    color: red;
                                    transition:0.8s; 
                                    text-align: center;`

                }
                else{
                    document.getElementById('attemps').style = "display: none;"
                    message.innerHTML = `<p>
                                            the number is ${answer} <br>
                                            you win in ${attemps} attemps <br>
                                        </p>`
                    message.style = `font-size: 30px; 
                                    color: blue;
                                    transition:0.8s; 
                                    text-align: center;`

                }
            }
    }

}
