!function(n){n.preloadImages=function(n,o){window.IMAGES_CACHE={};var e,t,i=n.length;if(0===n.length)return void(o&&"function"==typeof o&&o());for(;e=n.pop();)t=new Image,t.onload=function(n){console.log("Loading image: ",n),window.IMAGES_CACHE[n]=this,i--,0===i&&(console.log("All images are ready..."),o&&"function"==typeof o&&o())}.bind(t,e),t.src=e},n.loadScripts=function(n,o){var e,t,i=n.length;if(0===n.length)return void(o&&"function"==typeof o&&o());for(;e=n.pop();)t=document.createElement("script"),t.defer=!0,t.onload=function(){i--,0===i&&(console.log("All scripts are ready..."),o&&"function"==typeof o&&o())},t.src=e,document.getElementsByTagName("head")[0].appendChild(t)}}(window);

(function(){

  var $ = function(slt) { return document.querySelector(slt); }
  var timers = 0;
  var Tween;
  var loop = 1;
  var aniStatus = false;


  var $banner = {
      
    init : function() {
      this.config();
      this.startAds();
    },

    config : function() {
      console.log('banner config loaded !');
    },

    startAds : function() {
      var that = this;
        
      loadScripts([
          'https://s0.2mdn.net/ads/studio/cached_libs/tweenmax_1.20.0_d360d9a082ccc13b1a1a9b153f86b378_min.js'
      ], function() {
          
        that.loadAssets();

      });
    },

    loadAssets : function() {
      preloadImages([], this.mainDOM);
    },

    mainDOM : function() {
      var ad = $('#ad'),
        banner = $('#banner'),
        clickTag = $('#clickTag'),
        exit = $('#exit-area');

      addListeners();
      showAds(true, mainFunc);  

      function showAds(e, callback){
        switch(e) {
          case true:
            console.info(e);
            TweenMax.to([banner], 0.15, { autoAlpha: 1 });
            break;
          case false:
            console.info(e);
            break;
        }

        if (callback && typeof(callback) === "function") {
          callback();
        }
      }

      function addListeners(){
        // clickTag.addEventListener("click", function(){ console.log('Banner Clicked !'); }, false);
        // exit.addEventListener('click', function() {
        //   Enabler.exit('Exit');
        // }, false)
      }

      function mainFunc() {
        console.info('Animation Starting ...!');

        // Create Timeline
        Tween = new TimelineMax({
          onStart: _onStart,
          onUpdate: _onUpdate,
          onComplete: _onComplete
        });

        var bg = document.getElementById('bg'),
            title1 = document.getElementById('title'),
            titleImg = document.getElementById('title-img'),
            title1S1 = document.getElementById('title1-s1'),
            titleS2 = document.getElementById('title-s2'),
            snowFloor = document.getElementById('snow-floor'),
            bottomStar = document.getElementById('bottom-star'),
            gifts = document.getElementsByClassName('gift-img'),
            giftRow1 = document.getElementById('gift-row-1'),
            giftRow2 = document.getElementById('gift-row-2'),
            textTime = document.getElementById('txt-time'),
            titleS3 = document.getElementById('title-s3'),
            sapin = document.getElementById('sapin'),
            boulle = document.getElementById('boulle'),
            cta = document.getElementById('cta'),
            textNote = document.getElementById('txt-note')

        starEffect({ scale: 0.7, id: '#star1' });
        starEffect({ scale: 0.9, id: '#star2' });
        starEffect({ scale: 0.6, id: '#star3' });
        starEffect({ scale: 0.7, id: '#star4' });
        starEffect({ scale: 0.5, id: '#star5' });
        starEffect({ scale: 0.55, id: '#star6' });
        starEffect({ scale: 0.6, id: '#star7' });
        
        Tween
        // Screen 1        
        .add(TweenMax.to(banner, 0.75, { autoAlpha: 1 }))
        .to(title, 0.85, { autoAlpha: 1 })
        .to(title1S1, 0.85, { autoAlpha: 1 })

        // Screen 2
        .to(title, 0.5, { top: 20 }, '+=0.75')
        .to(titleImg, 0.5, { transform: 'scale(0.88)' }, '-=0.5')
        .to(title1S1, 0.5, { autoAlpha: 0 }, '-=0.5')
        .to(titleS2, 0.5, { top: 150, autoAlpha: 1 })
        .to(snowFloor, 0.75, { bottom: 94 }, '-=0.75')
        .to(bg, 0.75, { top: -94 }, '-=0.75')
        .to(bottomStar, 0.75, { bottom: 115 }, '-=0.75')
        .staggerTo(gifts, .75, { transform: 'scale(1)', ease: Elastic.easeOut.config(1, 0.5) }, .1)
        .to(textTime, .5, { transform: 'translateX(0)' })

        // Screen 3
        .to(titleS2, 0.5, { top: 0, autoAlpha: 0 }, '+=0.75')
        .to(titleS3, 0.5, { top: 110, autoAlpha: 1 })
        .staggerTo(['#gift2', '#gift1', '#gift5', '#gift4', '#gift3'], .5, { left: '400', ease: Back.easeIn.config(0.7) }, .1, '-=0.25')
        .to(textTime, .5, { left: '-550', ease: Back.easeIn.config(0.7) }, '-=0.4')
        .to(sapin, 0.5, { transform: 'translateX(0)', ease: Back.easeOut.config(1.7) })
        .to(boulle, 0.5, { transform: 'scale(1)', ease: Elastic.easeOut.config(1, 0.5) })
        .to(cta, .5, { autoAlpha: 1 })
        .to(textNote, .5, { autoAlpha: 1, onComplete: function() {
            
        } }, '-=0.4')

        function starEffect(options){
          var scale = options.scale || 1,
              id = options.id;
          setTimeout(function() {
            TweenMax.to(id + ' #l1', 1.5, { scale: scale, rotation: 180, delay: 0, yoyo: true, repeat: -1, ease: Power1.easeInOut });
            TweenMax.to(id + ' #l1', 2, { scale: 0.2, rotation: 0, delay: 1.5, yoyo: true, repeat: -1, ease: Power1.easeInOut });

            TweenMax.to(id + ' #l2', 1.5, { scale: scale, rotation: -135, delay: 0, yoyo: true, repeat: -1, ease: Power1.easeInOut });
            TweenMax.to(id + ' #l2', 2, { scale: 0.2, rotation: 0, delay: 1.5, yoyo: true, repeat: -1, ease: Power1.easeInOut });
          }, Math.random()*1000)
        }

      }

      function _onStart() {}
      function _onUpdate() {}
      function _onComplete() {}
      
      }

  };

  window.addEventListener("load", $banner.init() );

})();