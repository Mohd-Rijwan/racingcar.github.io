const card = document.getElementById("card");
const ScoreCard = document.getElementById("card-score");
const HScoreCard = document.getElementById("card-score1");

var image = document.getElementById("scream");
var image1 = document.getElementById("scream1");
var image2 = document.getElementById("scream2");
var image3 = document.getElementById("scream3");
const music = new Audio('music.mp3');
music.play();
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


let score = 0, Hscore = 0, d = 0
let x = 200, y = 100, w = 150, h = 200
let x1 = 75, y1 = -450, w1 = 250, h1 = 900
let x2 = 160, y2 = 320, w2 = 50, h2 = 80
let x3 = 160, y3 = 0, w3 = 50, h3 = 80

road();
race();
blue();
drawScore(score);
copyImage();

let leftPressed = false
let rightPressed = false
let interval = null
// document.addEventListener("keydown",handleKeyDown)
// document.addEventListener("keyup",handleKeyUp)

// function handleKeyDown(e){
//      if(e.key==="ArrowLeft"){
//          leftPressed = true
//          }
//      if(e.key==="ArrowRight"){
//          rightPressed = true
//       }
//     }


//  function handleKeyUp(e){
//          if(e.key==="ArrowLeft"){
//            leftPressed = false
//          }
//          if(e.key==="ArrowRight"){
//             rightPressed = false
//           }
//     }

function restartGame(button) {

    if (!interval) {

        card.style.display = "none";
        score = 0, d = 0
        x = 200, y = 100, w = 150, h = 200
        x1 = 75, y1 = -450, w1 = 250, h1 = 900
        x2 = 160, y2 = 320, w2 = 50, h2 = 80
        x3 = 160, y3 = 0, w3 = 50, h3 = 80

        road();
        race();
        blue();
        drawScore();
        copyImage();

        leftPressed = false
        rightPressed = false

        interval = setInterval(() => {
            music.play();
            document.addEventListener("keydown", handleKeyDown)
            document.addEventListener("keyup", handleKeyUp)

            function handleKeyDown(e) {
                if (e.key === "ArrowLeft") {
                    leftPressed = true
                }
                if (e.key === "ArrowRight") {
                    rightPressed = true
                }
            }


            function handleKeyUp(e) {
                if (e.key === "ArrowLeft") {
                    leftPressed = false
                }
                if (e.key === "ArrowRight") {
                    rightPressed = false
                }
            }
            //red car and racing car
            if (leftPressed === true) {
                if (x2 >= 105) {
                    x2 = x2 - 10
                }
            }
            if (rightPressed === true) {
                if (x2 <= 240) {
                    x2 = x2 + 10
                }
            }
            //chrocodial
            x = x - 1
            if (x == -150) {
                x = 400
            }
            //road
            y1 = y1 + 5
            if (y1 == -50) {
                y1 = -450
            }
            //Blue car
            d = d + 0.001
            y3 = y3 + 5 + d
            if (y3 >= 400) {
                let a = 90;
                let b = 250;
                x3 = Math.round(a + (b - a) * Math.random())
                y3 = -80

            }

            //collision
            if (x2 + 40 >= x3 && y2 <= y3 + 70 && x2 <= x3 + 40) {
                music.pause();
                card.style.display = "block";
                // alert("Game Over")

                clearInterval(interval);
                interval = null;

                //  x = 200, y = 100, w = 150, h = 200
                x1 = 75, y1 = -450, w1 = 250, h1 = 900
                x2 = 160, y2 = 320, w2 = 50, h2 = 80
                x3 = 160, y3 = 0, w3 = 50, h3 = 80
                leftPressed = false
                rightPressed = false
                //  score=0
                d = 0


            }
            // if(x2<=x3+50 && y2<=y3+70){
            //     alert("Game Over")
            //     x = 200, y = 100, w = 150, h = 200
            //     x1 = 75, y1 = -450, w1 = 250, h1 = 900
            //     x2 = 160, y2 = 320, w2 = 50, h2 = 80
            //     x3 = 160, y3 = 0, w3 = 50, h3 = 80
            // }
            score = score + 1

            ctx.clearRect(0, 0, 400, 400)

            ctx.fillStyle = "#4649FF"
            ctx.fillRect(0, 0, 400, 400)

            copyImage();
            road();
            race();
            blue();
            drawScore(score);

        }, 20)
    }
}
function blue() {
    var image3 = document.getElementById("scream3");
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.drawImage(image3, x3, y3, w3, h3)
}
function race() {
    var image2 = document.getElementById("scream2");
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.drawImage(image2, x2, y2, w2, h2)
}
function road() {
    var image1 = document.getElementById("scream1");
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.drawImage(image1, x1, y1, w1, h1)
}
function copyImage() {

    var image = document.getElementById("scream");
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.drawImage(image, x, y, w, h)
}

function drawScore(score) {
    ctx.beginPath()
    ctx.fillStyle = "white"
    ctx.fill()
    ctx.fillText("score: " + score, 330, 10)
    ScoreCard.innerHTML = score;
    if (score > Hscore) {
        Hscore = score
    }
    HScoreCard.innerHTML = Hscore;
    ctx.fillText("Hscore: " + Hscore, 330, 20)
    ctx.closePath()
}


