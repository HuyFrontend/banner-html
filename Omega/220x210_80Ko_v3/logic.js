//Obtenir heure
hour = 0;
minutes = 0;
seconde = 0;
seconde2 = 0;
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
        $(".secondes2").rotate({ duration: 10, animateTo: 230 });
        $(".day").html(day);
        if (day < 10) { $(".day").css({ 'font-size': '15px' }); }
    }
    //mouvement aiguille vers heure reelle
var movehour = function() {
    $(".heures").rotate({ duration: 2000, animateTo: hour, easing: $.easing.easeInOutExpo });
}
var moveminutes1 = function() {
    $(".minutes").rotate({ duration: 2000, animateTo: minutes, easing: $.easing.easeInOutExpo });
}
var movesecondes1 = function() {
    $(".secondes").rotate({ duration: 1000, animateTo: secondes, easing: $.easing.easeInOutExpo });
}
var movesecondes2 = function() {
    $(".secondes2").rotate({ duration: 10, animateTo: secondes, easing: $.easing.easeInOutExpo });
}
var movesecondes3 = function() {
    $(".secondes2").rotate({ duration: 3000, animateTo: 720, easing: $.easing.easeInOutExpo });
}

var movesecondes11 = function() {
    $(".secondes2").rotate({ duration: 1000, animateTo: secondes2, easing: $.easing.easeInOutExpo });
}
var movesecondes21 = function() {
    $(".secondes2").rotate({ duration: 10, animateTo: secondes2, easing: $.easing.easeInOutExpo });
}

//animation
// var ecran1 = function() {
//     $('#logo').delay(800).animate({ opacity: 1 }, 800, function() {
//         ecran2();
//     });
// }
// var ecran2 = function() {
//     $('#logo').delay(400).animate({ width: 282, left: 8 }, 800).delay(1000).animate({ opacity: 0 }, 400, function() {
//         ecran3();
//     });
// }
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
        // movesecondes1();
        // movesecondes3();
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
            // movesecondes21();

            secondes2 = secondes2 + 6;

            if ((secondes2 % 360) == 0) {
                minutes = minutes + 6;
                setTimeout(function() {
                    moveminutes1();
                }, 1000)

            }
        }, 1000);
    }, 800);



    //anim reste ban
    // $('.truc-1').delay(600).animate({ opacity: 1 }, 200).delay(2200).animate({ opacity: 0 }, 200);
    // $('.truc-2').delay(700).animate({ opacity: 1 }, 200).delay(2100).animate({ opacity: 0 }, 200);
    // $('.truc-3').delay(800).animate({ opacity: 1 }, 200).delay(2000).animate({ opacity: 0 }, 200);
    // $('.truc-4').delay(900).animate({ opacity: 1 }, 200).delay(1900).animate({ opacity: 0 }, 200);
    // $('.truc-5').delay(1000).animate({ opacity: 1 }, 200).delay(1900).animate({ opacity: 0 }, 200);
    // $('.truc-6').delay(1100).animate({ opacity: 1 }, 200).delay(1900).animate({ opacity: 0 }, 200);
    // $('.truc-7').delay(1200).animate({ opacity: 1 }, 200).delay(1600).animate({ opacity: 0 }, 200);
    // $('.truc-8').delay(1300).animate({ opacity: 1 }, 200).delay(1500).animate({ opacity: 0 }, 200);
    // $('.truc-9').delay(1400).animate({ opacity: 1 }, 200).delay(1400).animate({ opacity: 0 }, 200);
    // $('.truc-10').delay(1500).animate({ opacity: 1 }, 200).delay(1300).animate({ opacity: 0 }, 200);
    // $('.truc-11').delay(1600).animate({ opacity: 1 }, 200).delay(1200).animate({ opacity: 0 }, 200);
    // $('.truc-12').delay(1700).animate({ opacity: 1 }, 200).delay(1100).animate({ opacity: 0 }, 200);
    // $(".secondes").delay(3000).animate({ opacity: 1 }, 200);

    // $(".day").delay(3000).animate({ opacity: 1 }, 200 );

    // $('.bg').delay(3000).animate({ opacity: 0 }, 400, function() {
    //     ecran5();
    // });
}
// var ecran5 = function() {
//     $('.logo-fin-1').delay(600).animate({ opacity: 1 }, 1000);
//     $('.logo').delay(600).animate({ opacity: 1 }, 1000);
//     $('#cta').delay(600).animate({ bottom: 25, opacity: 1 }, 1000, function() {
//         ecran6();
//     });
// }
// var ecran6 = function() {
//     $('.bg').css({ display: 'none' });
//     $('.logo-fin-1').delay(400).animate({ bottom: 97 }, 1000);
//     $('.logo-fin-2').delay(800).animate({ opacity: 1 }, 1000);


//     $('.cta-text')
//         .delay(2400)
//         .animate({ opacity: 0 }, 400)
//         .animate({ opacity: 1 }, 400, function() {
//           // clearInterval(interval1);
//           // clearInterval(interval2);
//       });
// }


$(function() {

    ecran3();

    // stop animate after 15s
    // setTimeout(function() {
    //   clearInterval(interval1);
    //   clearInterval(interval2);
    // }, 15000);

});
