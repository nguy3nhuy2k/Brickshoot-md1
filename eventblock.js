
let rightSpeed=false;
let leftSpeed=false;

document.addEventListener('keyup',function (evt){
    if(event.keyCode == 37){
        leftSpeed = false;

    }else if(event.keyCode == 39){
        rightSpeed = false;
    }
});
document.addEventListener('keydown',function (evt){
    if(event.keyCode == 37){
        leftSpeed = true

    }else if(event.keyCode == 39){
        rightSpeed = true;
    }
});
function speedBlock(){
    if(rightSpeed) {
        blockX += 4;
        if (blockX + blockwidth > c.width){
            blockX = c.width - blockwidth;
        }
    }
    else if(leftSpeed) {
        blockX -= 4;
        if (blockX < 0){
            blockX = 0;
        }
    }
}
