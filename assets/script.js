var button = document.querySelector("#play");

var userWin = 0;
var userLoss = 0;

function quizQuestions() {

    var triangle = (prompt("Guess the name of the shape with 3 sides: "));
    if (triangle == "triangle") {
        alert("Correct!");
        userWin++;

    }
    else {
        alert("Wrong!");
    }

    var square = (prompt("Guess the name of the shape with 4 sides: "));
    if (square == "square") {
        alert("Correct!");
        userWin++;
    }
    else {
        alert("Wrong!");
    }

    

    var pentagon = (prompt("Guess the name of the shape with 5 sides: "));
    if (pentagon == "pentagon") {
        alert("Correct!");
        userWin++;
    }
    else {
        alert("Wrong!");
    }

    var hexagon = (prompt("Guess the name of the shape with 6 sides: "));
    if (hexagon == "hexagon") {
        alert("Correct!");
        userWin++;
    }
    else {
        alert("Wrong!");
    }

    var heptagon = (prompt("Guess the name of the shape with 7 sides: "));
    if (heptagon == "heptagon") {
        alert("Correct!");
        userWin++;
    }
    else {
        alert("Wrong!");
    }

    var octagon = (prompt("Guess the name of the shape with 8 sides: "));
    if (octagon == "octagon") {
        alert("Correct!");
        userWin++;
    }
    else {
        alert("Wrong!");
    }

    var nonagon = (prompt("Guess the name of the shape with 9 sides: "));
    if (nonagon == "nonagon") {
        alert("Correct!");
        userWin++;
    }
    else {
        alert("Wrong!");
    }

    var decagon = (prompt("Guess the name of the shape with 10 sides: "));
    if (decagon == "decagon") {
        alert("Correct!");
        userWin++;
    }
    else {
        alert("Wrong!");
    }

    alert("CONGRTULATIONS YOU HAVE REACHED THE END OF THE QUIZ!");
    alert("You got " + userWin + " correct out of 8 questions!")


}



function quizPopUp() {
    quizQuestions();
}

button.addEventListener("click", quizPopUp);
