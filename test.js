/**
 * Created by OLEG on 18.12.2017.
 */

window.ondevicemotion = function(event) {
    var x = event.accelerationIncludingGravity.x;
    var y = event.accelerationIncludingGravity.y;
    var z = event.accelerationIncludingGravity.z;

    accX = Math.round(event.accelerationIncludingGravity.x*10) / 10;
    accY = Math.round(event.accelerationIncludingGravity.y*10) / 10;

    movement = 10;

    xA = -(accX / 10) * movement;
    yA = -(accY / 10) * movement;

    bX = -(xA*2)-100;
    bY = -(yA*2)-300;


    movement = 20;

    xA = (width/2) - (accX*movement);
    yA = (height/2) - (accY*movement);

    bAR = Math.abs((xA-width/2) / (movement*20));
    bAL = Math.abs((xA-width/2) / (movement*20));
    bAT = Math.abs((yA-height/2) / (movement*20));
    bAB = Math.abs((yA-height/2) / (movement*20));

    if(xA > (width/2)) { bAL = 0; } else if(xA < (width/2)) { bAR = 0; }
    if(yA < (height/2)) { bAB = 0; } else if(yA > (height/2)) { bAT = 0; }

    $('.flame').css({'move' : '0%{transform skewX(5deg '+bAL+') skewY(10deg '+bAL+')}'});
    $('.flame').css({'move' : '50%{transform skewX(0deg '+bAL+') skewY(-5deg '+bAL+')}'});
    $('.flame').css({'move' : '100%{transform skewX(5deg '+bAL+') skewY(10deg '+bAL+')}'});


    $('.flame').css({'move-left' : '50%{transform skewX(7deg '+bAT+')}'});

    $('.flame').css({'move-left' : '50%{transform skewX(7deg '+bAT+')}'});


};


