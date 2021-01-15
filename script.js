var guessWord = words[Math.floor(Math.random() * words.length)];
var saveWord = [...guessWord.split("")]
guessWord = [...guessWord.split("")]
var guess = 1;

function check() {
    //creates boxes to put letters in
    var wordholder = document.createElement('ul')
    wordholder.id = "guess " + guess
    document.getElementById('wordlist').appendChild(wordholder)
    for (i=0;i<5;i++){
        var box = document.createElement('li');
        box.id = i
        document.getElementById("guess " + guess).appendChild(box)
    }

    //checks word
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
    guessWord = [...saveWord]
    guess++
}