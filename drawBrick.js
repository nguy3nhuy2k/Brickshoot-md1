

let brickRow = 4;
let brickCol = 5;
let brickWidth = 64;
let brickHeight = 10;
let brickPadding = 10;
let OffsetTop = 20;
let OffsetLeft = 20;
let b;
let brickList = [];
for(let i = 0; i<brickCol; i++) {
    brickList[i] = [];
    for (let j = 0; j < brickRow; j++) {
        brickList[i][j] = {x : 0, y : 0, statust: true};
        console.log(brickList[i][j]);
    }
}
function brickCollisionBall() {
    for (let i = 0; i < brickCol; i++) {
        for (let j = 0; j < brickRow; j++) {
             b = brickList[i][j];
            if(b.statust == true){
                if(  ballx >= b.x && ballx <= b.x + brickWidth && bally + ballradius >= b.y &&
                    bally - ballradius <=b.y + brickHeight){
                    balldy = -balldy;
                    b.statust= false;
                }
            }else{
                b.statust = true;
            }
        }
    }
}
function drawBrick() {
    for (let i = 0; i < brickCol; i++) {
        for (let j = 0; j <  brickRow; j++) {

                        let brickX = OffsetLeft + (i*(brickWidth+brickPadding));
                        let brickY = OffsetTop + (j*(brickHeight+brickPadding));
                        brickList[i][j].x = brickX;
                        brickList[i][j].y = brickY;
                        ctx.beginPath();
                        ctx.fillRect( brickX,brickY,brickWidth, brickHeight);
                        ctx.fillStyle = "#0095DD";
                        ctx.fill();
                        ctx.closePath();
        }
    }
}

