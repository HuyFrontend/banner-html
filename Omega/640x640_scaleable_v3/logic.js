//Obtenir heure
var hour = 0;
var minutes = 0;
var seconde = 0;
var seconde2 = 0;
var interval1;
var interval2;

function currentTime() {
    var currentTime = new Date;
    var Secondes = currentTime.getSeconds();
    if (Secondes < 10) {
        Secondes = '0' + Secondes;
    }
    var Minutes = currentTime.getMinutes();
    if (Minutes < 10) {
        Minutes = '0' + Minutes;
    }
    var Hour = currentTime.getHours();
    if (Hour > 12) {
        Hour -= 12;
    }
    var Day = currentTime.getDate();

    // Edit Rotation numbers
    minutes = Minutes * 6 + 360;
    hour = (Hour) * 5 * 6 + 720 + (Minutes * 6 / 15);
    secondes = Secondes * 6 + 360;
    secondes2 = Secondes * 6 + 360;
    day = Day;
}
//afficher heure initial
var currenttime = function() {
        $(".heures").rotate({ duration: 10, animateTo: 306 });
        $(".minutes").rotate({ duration: 10, animateTo: 48 });
        $(".secondes").rotate({ duration: 10, animateTo: 230 });
        $(".day").html(day);
        if (day < 10) { $(".day").css({ 'font-size': '20px' });$(".day").css({ 'left': '47.5%' }); }
    }
    //mouvement aiguille vers heure reelle
var movehour = function() {
    $(".heures").rotate({ duration: 2000, animateTo: hour, easing: $.easing.easeInOutExpo });
}
var moveminutes1 = function() {
    $(".minutes").rotate({ duration: 2000, animateTo: minutes, easing: $.easing.easeInOutExpo });
}

var movesecondes2 = function() {
    $(".secondes").rotate({ duration: 10, animateTo: secondes, easing: $.easing.easeInOutExpo });
}
var movesecondes3 = function() {
    $(".secondes").rotate({ duration: 3000, animateTo: 720, easing: $.easing.easeInOutExpo });
}
var movesecondes11 = function() {
    $(".secondes").rotate({ duration: 1000, animateTo: secondes2, easing: $.easing.easeInOutExpo });
}
var movesecondes21 = function() {
    $(".secondes").rotate({ duration: 10, animateTo: secondes2, easing: $.easing.easeInOutExpo });
}

var ecran3 = function() {
    currentTime();
    currenttime();
    $('.montre2')
        .delay(200)
        .animate({ opacity: 1 }, 600, function() {
            ecran4();
        });
}
var ecran4 = function() {
    //hour
    setTimeout(function() {
        movehour();
    }, 400);
    //minute
    setTimeout(function() {
        moveminutes1();
    }, 1200);

    //secondes
    setTimeout(function() {

        setTimeout(function() {
            interval1 = setInterval(function() {
                movesecondes2();
                secondes = secondes + 0.5;
            }, 83.3333);
        }, 1000);
    }, 800);

    setTimeout(function() {
        movesecondes11();
        interval2 = setInterval(function() {
            secondes2 = secondes2 + 6;

            if ((secondes2 % 360) == 0) {
                minutes = minutes + 6;
                setTimeout(function() {
                    moveminutes1();
                }, 1000)

            }
        }, 1000);
    }, 800);
}



$(function() {
    ecran3();
});