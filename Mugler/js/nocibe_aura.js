$( document ).ready(function() {
  var $owl = $('.owl-carousel');
  $owl.owlCarousel({
    loop:true,
    margin: 0,
    center: true,
    items : 1, //10 items above 1000px browser width
    itemsDesktop : [1000,1], //5 items between 1000px and 901px
    itemsDesktopSmall : [900,1], // betweem 900px and 601px
    itemsTablet: [600,1], //2 items between 600 and 481;
    itemsMobile : [480,1], //1 items between 480 and 0;
    autoWidth: true,
    navigation : true,
    navigationText: ["<img src='images/nocibe_theme_nav-prev.png'>","<img src='images/nocibe_theme_nav-next.png'>"],
  });
    
  var $campagneVideo = videojs('#campagne-video'),
      $carouselVideo1 = videojs('#carousel-video-1'),
      $carouselVideo2 = videojs('#carousel-video-2'),
      $carouselVideo3 = videojs('#carousel-video-3');

  $carouselVideo1.fluid(true);
  $carouselVideo2.fluid(true);
  $carouselVideo3.fluid(true);

  var breakPoint = 767;

  function fluidCampagneVideo() {
    if ($(window).width() > breakPoint) $campagneVideo.fluid(false);
    else $campagneVideo.fluid(true);
  }

  fluidCampagneVideo();

  $(window).resize(function() {
    fluidCampagneVideo();
  });

  function stopVideos() {
    $carouselVideo1.pause();
    $carouselVideo2.pause();
    $carouselVideo3.pause();
  }

  $('.owl-next').on('click', function() {
    stopVideos();
  });
  function endedVideos() {
    $carouselVideo1.ready(function(){
      var vid = this;
      vid.on('ended', function(){
        vid.hasStarted(false);
      });
    });
    $carouselVideo2.ready(function(){
      var vid = this;
      vid.on('ended', function(){
        vid.hasStarted(false);
      });  
    });
    $carouselVideo3.ready(function(){
      var vid = this;
      vid.on('ended', function(){
        vid.hasStarted(false);
      });  
    });
    $campagneVideo.ready(function(){
      var vid = this;
      vid.on('ended', function(){
        vid.hasStarted(false);
      });  
    });
  }
  endedVideos();
});

