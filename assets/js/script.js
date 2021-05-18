// OCEAN ACIDIFICATION

function preloadImage(url)
{
    var img=new Image();
    img.src=url;
}

const imageURLs = [
    '../assets/img/maps/historical/1770.png',
    '../assets/img/maps/historical/1780.png',
    '../assets/img/maps/historical/1790.png',
    '../assets/img/maps/historical/1800.png',
    '../assets/img/maps/historical/1810.png',
    '../assets/img/maps/historical/1820.png',
    '../assets/img/maps/historical/1830.png',
    '../assets/img/maps/historical/1840.png',
    '../assets/img/maps/historical/1850.png',
    '../assets/img/maps/historical/1860.png',
    '../assets/img/maps/historical/1870.png',
    '../assets/img/maps/historical/1880.png',
    '../assets/img/maps/historical/1890.png',
    '../assets/img/maps/historical/1900.png',
    '../assets/img/maps/historical/1910.png',
    '../assets/img/maps/historical/1920.png',
    '../assets/img/maps/historical/1930.png',
    '../assets/img/maps/historical/1940.png',
    '../assets/img/maps/historical/1950.png',
    '../assets/img/maps/historical/1960.png',
    '../assets/img/maps/historical/1970.png',
    '../assets/img/maps/historical/1980.png',
    '../assets/img/maps/historical/1990.png',
    '../assets/img/maps/historical/2000.png',
    '../assets/img/maps/2.6/2010.png',
    '../assets/img/maps/2.6/2020.png',
    '../assets/img/maps/2.6/2030.png',
    '../assets/img/maps/2.6/2040.png',
    '../assets/img/maps/2.6/2050.png',
    '../assets/img/maps/2.6/2060.png',
    '../assets/img/maps/2.6/2070.png',
    '../assets/img/maps/2.6/2080.png',
    '../assets/img/maps/2.6/2090.png',
    '../assets/img/maps/2.6/2100.png',
    '../assets/img/maps/4.5/2010.png',
    '../assets/img/maps/4.5/2020.png',
    '../assets/img/maps/4.5/2030.png',
    '../assets/img/maps/4.5/2040.png',
    '../assets/img/maps/4.5/2050.png',
    '../assets/img/maps/4.5/2060.png',
    '../assets/img/maps/4.5/2070.png',
    '../assets/img/maps/4.5/2080.png',
    '../assets/img/maps/4.5/2090.png',
    '../assets/img/maps/4.5/2100.png',
    '../assets/img/maps/6.0/2010.png',
    '../assets/img/maps/6.0/2020.png',
    '../assets/img/maps/6.0/2030.png',
    '../assets/img/maps/6.0/2040.png',
    '../assets/img/maps/6.0/2050.png',
    '../assets/img/maps/6.0/2060.png',
    '../assets/img/maps/6.0/2070.png',
    '../assets/img/maps/6.0/2080.png',
    '../assets/img/maps/6.0/2090.png',
    '../assets/img/maps/6.0/2100.png',
    '../assets/img/maps/8.5/2010.png',
    '../assets/img/maps/8.5/2020.png',
    '../assets/img/maps/8.5/2030.png',
    '../assets/img/maps/8.5/2040.png',
    '../assets/img/maps/8.5/2050.png',
    '../assets/img/maps/8.5/2060.png',
    '../assets/img/maps/8.5/2070.png',
    '../assets/img/maps/8.5/2080.png',
    '../assets/img/maps/8.5/2090.png',
    '../assets/img/maps/8.5/2100.png'
];

for (const url of imageURLs) preloadImage(url);

// HERO



// var app;
//     function initPixi() {
//       app = new PIXI.Application({width: window.innerWidth, height: window.innerHeight});
//       // var intro = $('#intro-background');
//       document.getElementById("intro-background").appendChild(app.view);
//       // intro.appendChild(app.view);
//       var image = new PIXI.Sprite.from("assets/img/underwater-hero-2AE3MDJ.jpg");
//       image.width = window.innerWidth;
//       image.height = window.innerHeight;
//       app.stage.addChild(image);
//       displacementSprite = new PIXI.Sprite.from("assets/img/cloud.jpg");
//       displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
//       displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
//       app.stage.addChild(displacementSprite);
//       app.stage.filters = [displacementFilter];
//       app.renderer.view.style.transform = 'scale(1.02)';
//       displacementSprite.scale.x = 2;
//       displacementSprite.scale.y = 3;
//       animate();
//     }
//     function animate() {
//       displacementSprite.x += 0.2;
//       displacementSprite.y += 3;
//       requestAnimationFrame(animate);
//     }
//     initPixi();

    $('#intro-background').ripples({
      dropRadius: 20, 
      perturbance: 0.02,
      resolution: 512,
    });

  

// MAPS

let historicalSlider = document.getElementById("historicalRange");
        let rcpSlider = document.getElementById("rcpRange");
        let historicalYear = document.getElementById("historical-year");
        let rcpYear = document.getElementById("rcp-year");
        let scenario = document.getElementById("scenario");
        let historicalGlobe = document.getElementById("historical-globe");
        let rcpGlobe = document.getElementById("rcp-globe");
        historicalYear.innerHTML = historicalSlider.value;
        rcpYear.innerHTML = rcpSlider.value; 

        $(".buttons button").click(function(){
        $(".buttons button").removeClass("active");
        $(this).addClass("active");
        var currentClass = $(".buttons button.active").val();
        console.log(currentClass);
        $("#scenario").text("RCP "+this.value+": ");
        rcpGlobe.src = "assets/img/maps/"+currentClass+"/"+rcpYear.innerHTML+".png";
        console.log(historicalSlider.value)
        console.log(rcpSlider.value)

        });

        // Update the current slider value (each time you drag the slider handle)
        historicalSlider.oninput = function() {
        var target = $(".buttons button.current").data("class");
        historicalGlobe.src = "assets/img/maps/"+target+"/"+this.value+".png";
        historicalYear.innerHTML = this.value;
        }

        rcpSlider.oninput = function() {
        var target = $(".buttons button.active").data("class");
        rcpGlobe.src = "assets/img/maps/"+target+"/"+this.value+".png";
        rcpYear.innerHTML = this.value;
        }


        // END MAPS

// END OCEAN ACIDIFICATION


// if you want to fade elements in when in view

    $(window).scroll( function(){
        $('.fadein').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'0.3'},1500);
            }
            
        }); 
    });

// scroll to top on window reload
// window.onbeforeunload = function () {
//     window.scrollTo(0,0);
// };

// SET ELEMENT HEIGHTS
let screenHeight = $(window).height();
let screenWidth = $(window).width();

    // autoplay video and pause offscreen

    let $Vid = $(".video");

    $Vid.each(function(){

        let _this = this;

        var vidBottom = new Waypoint({
            element: _this,
            handler: function(direction) {
                if (direction == "down") {
                    _this.play();
                } else {
                    _this.pause();
                }
            },
            offset: "50%"
        });
    
        var vidTop = new Waypoint({
            element: _this,
            handler: function(direction) {
                if (direction == "up") {
                    _this.play();
                } else {
                    _this.pause();
                }
            },
            offset: "-30%"
        });

    });

    // SERVE DIFFERENT VIDEOS DEPENDING ON USER DEVICE

    function changeVideo(){

    // $(window).resize(function() {
        windowWidth = $(window).width();

        if (windowWidth < 767 ){
            if ($('#intro-vid').hasClass('vid-desktop')){
            $('#intro-vid').removeClass('vid-desktop')
            $('#intro-vid').attr('src', 'assets/video/proxy-map-hero_mobile.mp4')
            }
            
        } else {
            $('#intro-vid').addClass('vid-desktop')
            $('#intro-vid').attr('src', 'assets/video/proxy-map-hero_1.mp4')
        }
        // });

    }

    $(window).resize(function(){changeVideo()})

    $(document).ready(function(){changeVideo()})

// smooth scroll

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

// * * Lightbox - add script link if needed

  $(document).ready(function() {
    $('.lightbox-1').magnificPopup({type:'image'});
  });

//   AUTO ADD TARGET BLANKS TO ALL NON_CB_POINTING LINKS

  $('a[href^="http://"], a[href^="https://"]').not('a[href*=carbonbrief]').attr('target','_blank');



  (function(){
    'use strict';
    
    var tau = Math.PI * 2;
    var program = function ( context )
{
  context.beginPath();
  context.arc( 0, 0, 1, 0, tau, true );
  context.closePath();
  context.fill();    
};
    var width, height;
    var scene, camera, renderer, pointCloud;
    
    function onDocumentReady(){
      initialize();
      
      /* DO STUFF! */
      var material = new THREE.PointCloudMaterial({
        color: 0xc6e7fa,
        program

      });
      
      var geometry = new THREE.Geometry();
      var x, y, z;
      _.times(15000, function(n){
        x = (Math.random() * 1200) - 800;
        y = (Math.random() * 1200) - 800;
        z = (Math.random() * 1200) - 800;
        
        geometry.vertices.push(new THREE.Vector3(x, y, z));
      });
      
      var pointCloud = new THREE.PointCloud(geometry, material);
      scene.add(pointCloud);
      
      function render(){
        window.requestAnimationFrame(render);
        
        _.forEach(geometry.vertices, function(particle){
          var dX, dY, dZ;
          dX = Math.random() * 1.2 - 0.1;
          dY = Math.random() * 1.2 - 0.1;
          dZ = Math.random() * 1.2 - 0.1;
          
          particle.add(new THREE.Vector3(dX, dY, dZ));
        });
        geometry.verticesNeedUpdate = true;
        
        renderer.render(scene, camera);
      }
      
      render();
    }
    
    function initialize(){
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(120, 16 / 9, 1, 1000);
      renderer = new THREE.WebGLRenderer();
      document.getElementById('intro-animation').appendChild(renderer.domElement);
      // intro.appendChild(renderer.domElement);
      window.addEventListener('resize', onWindowResize);
      onWindowResize();
    } 
    
    function onWindowResize(){
      width = window.innerWidth;
      height = window.innerHeight;
      updateRendererSize();
    }
    
    function updateRendererSize(){
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }
    
    document.addEventListener('DOMContentLoaded', onDocumentReady);
  })();