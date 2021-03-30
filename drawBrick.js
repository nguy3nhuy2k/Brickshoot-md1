

let brickRow = 4;
let brickCol = 5;
let brickWidth = 64;
let brickHeight = 10;
let brickPadding = 10;
let OffsetTop = 20;
let OffsetLeft = 20;
let brickList = [];
for(let i = 0; i<brickCol; i++) {
    brickList[i] = [];
    for(let j=0; j<brickRow; j++) {
        brickList[i][j] = { x: 0, y: 0 , status : true };
    }
}function brickCollisionBall(b){
    for (let i = 0; i < brickCol; i++) {
        for (let j = 0; j < brickRow; j++) {
            let b = brickList[i][j];
            if( status == true){
                if(x + b.x  && b.x + brickWidth && y > b.y && y < b.y + brickHeight){
                    balldy =-balldy;
                    b.status = false;
                    score++;
                    if(score == brickCol * brickRow){
                        alert("end game");
                        // onload(draw());
                    }
                }
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
            ctx.rect( brickX,brickY,brickWidth, brickHeight);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
        }
    }
}
