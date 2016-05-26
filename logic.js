/**
 * Created by ThangTheMan on 5/26/16.
 */

    function test()
    {
var hour = document.getElementById("hour").value;
var min = document.getElementById("minute").value;
angle = [(hour*5)-min]*6;
angle2 = 360-angle;
    console.log(angle);
        document.getElementById('p1').innerHTML = angle+' Degrees or '+angle2+' degrees' ;

    }
