var $banner = ((function() {
    // jQuery Fake
    var $ = function(slt) { return document.querySelector(slt); }
    var timers = 0;
    var Tween;
    var loop = 1;
    var aniStatus = false;

    function startAds() {
        loadScripts([
            'https://s0.2mdn.net/ads/studio/cached_libs/timelinelite_1.19.0_13e3bd0e510d63fd5e5ef9bf9dac7017_min.js',
            'https://s0.2mdn.net/ads/studio/cached_libs/tweenlite_1.19.0_422f021fad4c20f20cf3640a06ac39e9_min.js',
            'https://s0.2mdn.net/ads/studio/cached_libs/cssplugin_1.19.0_cfbff7d208ccfdbe176b9855af1eb1fa_min.js',
            'https://s0.2mdn.net/ads/studio/cached_libs/easepack_1.19.0_be87087c08fcec83e2b64c70571fe91f_min.js'
        ], loadAssets);
    }

    function loadAssets() {
        preloadImages([
        ], mainDOM);
        // Create Timeline
        Tween = new TimelineLite({
            onStart: _onStart,
            onUpdate: _onUpdate,
            onComplete: _onComplete
        });
    }

    function mainDOM() {
        var ad = $('#ad'),
            banner = $('#banner'),
            clickTag = $('#clickTag');

        addListeners();
        onResize();
        showAds(true, mainFunc);
    }

    function showAds(e, callback){
        switch(e) {
            case true:
                console.info(e);
                TweenLite.to([banner], 0.15, { autoAlpha: 1 });
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
        window.addEventListener("optimizedResize", onResize);
        clickTag.addEventListener("click", function(){ console.log('Banner Clicked !'); }, false);
    }

    function mainFunc() {
        console.info('Animation Starting ...!');
        Tween = new TimelineLite({
            onStart: _onStart,
            onUpdate: _onUpdate,
            onComplete: _onComplete
        });
        TweenStep2 = new TimelineLite({
            onStart: _onStart,
            onUpdate: _onUpdate,
            onComplete: _onComplete
        });
        timers += 0.5;
        Tween.add(TweenLite.to([
            '#btnClose', '#titleStep1', '#bottomText', '#bottomGift', '#description'
        ], 1, { autoAlpha: 1 }), timers);
        
        Tween.add(TweenLite.to(['#snowStep2'], 0.5, { width: '100%' }), timers);
        Tween.add(TweenLite.to(['#boxStep3'], 1, { autoAlpha: 1 }), timers);
        Tween.add(TweenLite.to(['#xIconStep3'], 1, { autoAlpha: 1 }), timers += 0.5);
        Tween.add(TweenLite.to(['#laptopStep3'], 1, { autoAlpha: 1 }), timers += 0.5);
        // hide step1
        timers += 2;
        Tween.add(TweenLite.to(['#titleStep1'], 0.5, { autoAlpha: 0 }), timers);
        // show step 2
        timers += 0.5
        Tween.add(TweenLite.to(['#titleStep2'], 1, { autoAlpha: 1 }), timers);
    
        // hide step 2
        timers += 2;
        Tween.add(TweenLite.to([
            '#titleStep2', '#description'
        ], 0.5, { autoAlpha: 0 }), timers);
        
        // show step 3
        timers += 0.5;
        Tween.add(TweenLite.to(['#titleStep3'], 1, { autoAlpha: 1 }), timers);
        Tween.add(TweenLite.to(['#snowLeftStep3'], 1, { autoAlpha: 1 }), timers);
        Tween.add(TweenLite.to(['#snowRightStep3'], 1, { autoAlpha: 1 }), timers);

        // hide step 3
        timers += 2;
        Tween.add(TweenLite.to(['#boxStep3'], 0.5, { autoAlpha: 0 }), timers);
        Tween.add(TweenLite.to(['#xIconStep3'], 0.5, { autoAlpha: 0 }), timers);
        Tween.add(TweenLite.to(['#laptopStep3'], 0.5, { autoAlpha: 0 }), timers);
        // show step 4
        timers += 0.5;
        Tween.add(TweenLite.to(['#btnCTA'], 1, { autoAlpha: 1 }), timers);
    }

    function _onStart() {
        aniStatus = true;
    }
    function _onUpdate() {}
    function _onComplete() {}

    function onResize() {
        var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || document.body.offsetWidth;
        var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || document.body.offsetHeight;
        console.log(w+'x'+h);

        var scale = w / 320;

        document.getElementById('banner').style.transform = "scale("+scale+")";
    }

    return startAds;
})());

window.requestAnimationFrame = (function() {
    return window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

(function() {
    var throttle = function(type, name, obj) {
        var obj = obj || window;
        var running = false;
        var func = function() {
            if (running) {
                return;
            }
            running = true;
            requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    throttle("resize", "optimizedResize");
})();

window.addEventListener("load", $banner);