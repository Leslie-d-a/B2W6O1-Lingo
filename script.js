var guessWord = words[Math.floor(Math.random() * words.length)];
var saveWord = [...guessWord.split("")]
guessWord = [...guessWord.split("")]
var guess = 1;
win = false;

createBoxes();

function createBoxes(){
    //creates boxes to put letters in.
    if (!guessWord.every(element => element === '')&&guess<6){
        var wordholder = document.createElement('ul')
        wordholder.id = "guess " + guess
        document.getElementById('wordlist').appendChild(wordholder)
        for (i=0;i<5;i++){
            var box = document.createElement('li');
            box.id = i
            document.getElementById("guess " + guess).appendChild(box)
        }
        document.getElementById(0).innerHTML = saveWord[0]
        document.getElementById(0).style.backgroundColor = "green"    
    }
    
}

function check() {
    //checks word
    if (!guessWord.every(element => element === '')&&guess<6){
        guessWord = [...saveWord]
        var inputWord = document.getElementById("inputWord").value
        inputWord = inputWord.split("")
        for (i = 0; i < guessWord.length; i++) {
            document.getElementById(i).innerHTML = inputWord[i];
            document.getElementById(i).style.backgroundColor = "white"
            if (guessWord[i] == inputWord[i]) {
                document.getElementById(i).style.backgroundColor = "green"
                guessWord[i] = ""
                inputWord[i] = ""
            }
        }
        for (a = 0; a < guessWord.length; a++) {
            for (b = 0; b < inputWord.length; b++) {
                if (guessWord[a] != "" && guessWord[a] == inputWord[b]) {
                    document.getElementById(b).style.backgroundColor = "yellow"
                    guessWord[a] = ""
                    inputWord[b] = ""
                }
            }
        }
        for (i=0;i<5;i++){
            document.getElementById(i).id = ""
        }
    guess++
    createBoxes();
    if (guessWord.every(element => element === '')&&guess<6){
        let audio = new Audio('sounds/noice.mp3');
        audio.play();
        setTimeout(function(){location.reload();},3000)
    }
    }
    if (guess>5){
        let audio = new Audio('sounds/mission failed.mp3');
        audio.play();
        setTimeout(function(){location.reload();},2000)
    }
}