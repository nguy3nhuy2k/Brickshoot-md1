let c = document.getElementById('myCanvas');
let ctx = c.getContext('2d');
let ballradius=10;
let ballx=20,bally=20;
let balldx=2;
let balldy=3;
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
    ctx.rect(blockX,c.height-blockheight,blockwidth,blockheight)
    ctx.fill();
    ctx.beginPath();

}

function moveball(){
    if(ballx + balldx < ballradius || ballx + balldx> c.width - ballradius){
        balldx = - balldx;
    }
    if(bally + balldy < ballradius || bally + balldy > c.height - ballradius){
        balldy = -balldy;
    }

}
let score = 0;
let live = 3;
function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+score, 5, 15);
}
function drawLive() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: "+ live, c.width-70, 15);
}

function draw(){
    ctx.clearRect(0,0,c.width,c.height);
    drawBrick();
    drawball();
    blockBrick();

    drawScore();
    drawLive();
    brickCollisionBall();
    moveball();
    if(ballx + balldx > c.width-ballradius || ballx + balldx < ballradius) {
        balldx = -balldx;
    }
    if(bally + balldy < ballradius) {
        balldy = -balldy;
    }
    else if(bally + balldy > c.height-ballradius) {
        if(ballx > blockX && ballx < blockX + blockwidth) {
            balldy = -balldy;
        }
        else {
            live--;
            if(!live) {
                alert("GAME OVER");
                document.location.reload();
            }
            else {
                ballx = c.width/2;
                bally = c.height-30;
                balldx = 3;
                balldy = -3;
                blockX = (c.width-blockwidth)/2;
            }
        }
    }
    speedBlock();

    ballx += balldx;
    bally += balldy;

}

setInterval(draw,10)
draw();