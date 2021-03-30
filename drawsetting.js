let c = document.getElementById('myCanvas');
let ctx = c.getContext('2d');
let ballradius=10;
let ballx=c.width/2;
let bally=c.height -30 ;
let balldx=2;
let balldy=-3;
let blockwidth=70;
let blockheight=10;
let blockX=(c.width - blockwidth)/2;
function drawball(){
    ctx.beginPath();
    ctx.arc(ballx,bally,ballradius,0,Math.PI * 2);
    ctx.fillStyle='#ff0000';
    ctx.fill();
    ctx.closePath();
}

function blockBrick(){
    ctx.fillStyle='#ff0000';
    ctx.fillRect(blockX,c.height-blockheight,blockwidth,blockheight)
    ctx.beginPath();

}

function moveball()  {
    if (ballx + balldx < ballradius || ballx + balldx > c.width - ballradius) {
        balldx = -balldx;
    }
    if (bally + balldy < ballradius || bally + balldy > c.height -ballradius) {
        balldy = -balldy;
    }
}



function draw(){
    ctx.clearRect(0,0,c.width,c.height);
    drawBrick();
    drawball();
    blockBrick();



    brickCollisionBall();
    moveball();


    speedBlock();

    ballx += balldx;
    bally += balldy;

}

setInterval(draw,10);