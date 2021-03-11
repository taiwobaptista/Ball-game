
class Ball {
    constructor(radius, weight, color){
        this.radius=radius;
        this.weight = weight;
        this.color= color;
    }
}

let ball1 = new Ball(95, 125, "#4a8b33");
let ball2 = new Ball(50, 342, "#ffab70");
let ball3 = new Ball(40, 450, "#FF0000");
let ball4 = new Ball(11, 34, "#00FFFF");
let ball5 = new Ball(8, 55, "#000000");
let ball6 = new Ball(30, 250, "yellow");

let Balls = [ball1, ball2, ball3, ball4, ball5, ball6]
let mybtn = document.getElementById("btn")
let mycircles = document.getElementById("circle");

mybtn.addEventListener('click', ()=>{
    mycircles.style.display= "block";
    mybtn.style.display= "none";
  });


const renderBallsToScene = (ballsRadius)=> {
    let circle = document.getElementById("circle")
    let ctx =circle.getContext("2d");
    ballsRadius.map(balls => {
        const {radius, weight, color} = balls;
        ctx.fillStyle = color
        ctx.beginPath()
         ctx.arc(weight, radius, radius, weight, weight *  Math.PI)
        ctx.closePath()
        ctx.fill()
    })
}
renderBallsToScene(Balls);