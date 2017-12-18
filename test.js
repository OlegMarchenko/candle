'use strict';

window.ondevicemotion = function(event) {
    var x = event.accelerationIncludingGravity.x;
    var y = event.accelerationIncludingGravity.y;
    var z = event.accelerationIncludingGravity.z;

    accX = Math.round(event.accelerationIncludingGravity.x*10) / 10;
    accY = Math.round(event.accelerationIncludingGravity.y*10) / 10;

    movement = 10;

    xA = -(accX / 10) * movement;
    yA = -(accY / 10) * movement;

    $('.flame').css({'left' : xA+'px', 'top' : yA+'px',
        'box-shadow' : ''+xA+'px '+yA+'px 10px rgba(0,0,0,0.7)'});

    bX = -(xA*2)-100;
    bY = -(yA*2)-300;

    $('#container').css({'background-position' : bX+'px '+bY+'px'});

    movement = 20;

    xA = (width/2) - (accX*movement);
    yA = (height/2) - (accY*movement);

    bAR = Math.abs((xA-width/2) / (movement*20));
    bAL = Math.abs((xA-width/2) / (movement*20));
    bAT = Math.abs((yA-height/2) / (movement*20));
    bAB = Math.abs((yA-height/2) / (movement*20));

    if(xA > (width/2)) { bAL = 0; } else if(xA < (width/2)) { bAR = 0; }
    if(yA < (height/2)) { bAB = 0; } else if(yA > (height/2)) { bAT = 0; }

    function findKeyframesRule(rule) {
        var ss = document.styleSheets;
        for (var i = 0; i < ss.length; ++i) {
            for (var j = 0; j < ss[i].cssRules.length; ++j) {
                if (ss[i].cssRules[j].type == window.CSSRule.WEBKIT_KEYFRAMES_RULE && ss[i].cssRules[j].name == rule) { return ss[i].cssRules[j]; }
            }
        }
        return null;
    }

    function change(anim) {
        // Obtains the animation object of the specified
        // animation
        var keyframes = findKeyframesRule(anim),
            length = keyframes.cssRules.length;

        // Makes an array of the current percent values
        // in the animation
        var keyframeString = [];
        for(var i = 0; i < length; i ++)
        {
            keyframeString.push(keyframes[i].keyText);
        }

        var keys = keyframeString.map(function(str) {
            return str.replace('%', '');
        });

        // Updates the current position of the circle to
        // be used in the calculations
        totalCurrentPercent += currentPercent;
        if(totalCurrentPercent > 100)
        {
            totalCurrentPercent -= 100;
        }
        // Self explanatory variables if you read the
        // description of getClosest
        var closest = getClosest(keys);

        var position = keys.indexOf(closest),
            firstPercent = keys[position];

        // Removes the current rules of the specified
        // animation
        for(var i = 0, j = keyframeString.length; i < j; i ++)
        {
            keyframes.deleteRule(keyframeString[i]);
        }

        // Turns the percent when activated into the
        // corresponding degree of a circle
        var multiplier = firstPercent * 3.6;

        // Essentially this creates the rules to set a new
        // origin for the path based on the approximated
        // percent of the animation when activated and
        // increases the diameter of the new circular path
        keyframes.insertRule("0% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 0) + "deg) translate(-100px,-100px) rotate(" + (multiplier + 0) + "deg); background-color:red; }");
        keyframes.insertRule("13% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 45) + "deg) translate(-100px,-100px) rotate(" + (multiplier + 45) + "deg); }");
        keyframes.insertRule("25% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 90) + "deg) translate(-100px,-100px) rotate(" + (multiplier + 90) + "deg); }");
        keyframes.insertRule("38% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 135) + "deg) translate(-100px,-100px) rotate(" + (multiplier + 135) + "deg); }");
        keyframes.insertRule("50% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 180) + "deg) translate(-100px,-100px) rotate(" + (multiplier + 180) + "deg); }");
        keyframes.insertRule("63% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 225) + "deg) translate(-100px,-100px) rotate(" + (multiplier + 225) + "deg); }");
        keyframes.insertRule("75% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 270) + "deg) translate(-100px,-100px) rotate(" + (multiplier + 270) + "deg); }");
        keyframes.insertRule("88% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 315) + "deg) translate(-100px,-100px) rotate(" + (multiplier + 315) + "deg); }");
        keyframes.insertRule("100% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 360) + "deg) translate(-100px,-100px) rotate(" + (multiplier + 360) + "deg); }");

        // Shows the circle again
        circle.style.display = "inherit";
        // Sets the animation to the newly specified rules
        circle.style.webkitAnimationName = anim;

        // Resets the approximate animation percent counter
        window.clearInterval(showPercent);
        currentPercent = 0;
        showPercent = self.setInterval(function() {
            if(currentPercent < 100)
            {
                currentPercent += 1;
            }
            else {
                currentPercent = 0;
            }
            result.innerHTML = currentPercent;
        }, 39);
    }

// Attatches the change function to the button's
// onclick function
    button.onclick = function() {
        // Removes the animation so a new one can be set
        circle.style.webkitAnimationName = "none";
        // Temporarily hides the circle
        circle.style.display = "none";
        // Initializes change function
        setTimeout(function () {
            change("rotate");
        }, 0);
    };

// Gets the animation's closest % value based on
// the approximated % found below
    function getClosest(keyframe) {
        var curr = keyframe[0];
        var diff = Math.abs (totalCurrentPercent - curr);
        for (var val = 0, j = keyframe.length; val < j; val++) {
            var newdiff = Math.abs(totalCurrentPercent - keyframe[val]);
            if (newdiff < diff) {
                diff = newdiff;
                curr = keyframe[val];
            }
        }
        return curr;
    }

    $('.flame').css({'box-shadow' : 'inset 0 0 500px 500px rgba(0,0,0,'+bAR+')'});
    $('.flame').css({'box-shadow' : 'inset 0 0 500px 500px rgba(0,0,0,'+bAL+')'});
    $('.flame').css({'box-shadow' : 'inset 0 0 500px 500px rgba(0,0,0,'+bAT+')'});
    $('.flame').css({'box-shadow' : 'inset 0 0 500px 500px rgba(0,0,0,'+bAB+')'});

    $('#container').css({'transform-origin' : xA+'px '+yA+'px'});
};


