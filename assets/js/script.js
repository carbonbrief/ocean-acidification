// OCEAN ACIDIFICATION

function preloadImage(url)
{
    var img=new Image();
    img.src=url;
}

const imageURLs = [
    'assets/img/maps/historical/1770.png',
    'assets/img/maps/historical/1780.png',
    'assets/img/maps/historical/1790.png',
    'assets/img/maps/historical/1800.png',
    'assets/img/maps/historical/1810.png',
    'assets/img/maps/historical/1820.png',
    'assets/img/maps/historical/1830.png',
    'assets/img/maps/historical/1840.png',
    'assets/img/maps/historical/1850.png',
    'assets/img/maps/historical/1860.png',
    'assets/img/maps/historical/1870.png',
    'assets/img/maps/historical/1880.png',
    'assets/img/maps/historical/1890.png',
    'assets/img/maps/historical/1900.png',
    'assets/img/maps/historical/1910.png',
    'assets/img/maps/historical/1920.png',
    'assets/img/maps/historical/1930.png',
    'assets/img/maps/historical/1940.png',
    'assets/img/maps/historical/1950.png',
    'assets/img/maps/historical/1960.png',
    'assets/img/maps/historical/1970.png',
    'assets/img/maps/historical/1980.png',
    'assets/img/maps/historical/1990.png',
    'assets/img/maps/historical/2000.png',
    'assets/img/maps/2.6/2010.png',
    'assets/img/maps/2.6/2020.png',
    'assets/img/maps/2.6/2030.png',
    'assets/img/maps/2.6/2040.png',
    'assets/img/maps/2.6/2050.png',
    'assets/img/maps/2.6/2060.png',
    'assets/img/maps/2.6/2070.png',
    'assets/img/maps/2.6/2080.png',
    'assets/img/maps/2.6/2090.png',
    'assets/img/maps/2.6/2100.png',
    'assets/img/maps/4.5/2010.png',
    'assets/img/maps/4.5/2020.png',
    'assets/img/maps/4.5/2030.png',
    'assets/img/maps/4.5/2040.png',
    'assets/img/maps/4.5/2050.png',
    'assets/img/maps/4.5/2060.png',
    'assets/img/maps/4.5/2070.png',
    'assets/img/maps/4.5/2080.png',
    'assets/img/maps/4.5/2090.png',
    'assets/img/maps/4.5/2100.png',
    'assets/img/maps/6.0/2010.png',
    'assets/img/maps/6.0/2020.png',
    'assets/img/maps/6.0/2030.png',
    'assets/img/maps/6.0/2040.png',
    'assets/img/maps/6.0/2050.png',
    'assets/img/maps/6.0/2060.png',
    'assets/img/maps/6.0/2070.png',
    'assets/img/maps/6.0/2080.png',
    'assets/img/maps/6.0/2090.png',
    'assets/img/maps/6.0/2100.png',
    'assets/img/maps/8.5/2010.png',
    'assets/img/maps/8.5/2020.png',
    'assets/img/maps/8.5/2030.png',
    'assets/img/maps/8.5/2040.png',
    'assets/img/maps/8.5/2050.png',
    'assets/img/maps/8.5/2060.png',
    'assets/img/maps/8.5/2070.png',
    'assets/img/maps/8.5/2080.png',
    'assets/img/maps/8.5/2090.png',
    'assets/img/maps/8.5/2100.png'
];

for (const url of imageURLs) preloadImage(url);

// HERO

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
        let chart = document.getElementById('globe-chart');
        let chartrcp = document.getElementById('globe-chart-rcp');
        historicalYear.innerHTML = historicalSlider.value;
        rcpYear.innerHTML = rcpSlider.value; 

        $(".buttons button").click(function(){
        $(".buttons button").removeClass("active");
        $(this).addClass("active");
        var currentClass = $(".buttons button.active").val();
        console.log(currentClass);
        if (currentClass == 'historical'){
          chart.src = "assets/img/maps/chart/"+currentClass+"/"+historicalYear.innerHTML+".png";
          $(".chart-year").text(historicalYear.innerHTML);
          $('#historical-container').addClass("active");
          $('#rcp-container').removeClass("active");
          $(this).removeClass("active");
        }
        else{
        $(".chart-year").text("RCP "+this.value+": "+rcpYear.innerHTML);
        rcpGlobe.src = "assets/img/maps/"+currentClass+"/"+rcpYear.innerHTML+".png";
        chart.src = "assets/img/maps/chart/"+currentClass+"/"+rcpYear.innerHTML+".png";
        chartrcp.src = "assets/img/maps/chart-rcp/"+currentClass+"/"+rcpYear.innerHTML+".png";
        scenario.innerHTML = 'RCP'+currentClass+': ';
        $('#historical-container').removeClass("active");
        $('#rcp-container').addClass("active");
        //console.log(historicalSlider.value)
        //console.log(rcpSlider.value)
        }
        });

        // Update the current slider value (each time you drag the slider handle)
        historicalSlider.oninput = function() {
        var target = $(".buttons button.current").data("class");
        historicalGlobe.src = "assets/img/maps/"+target+"/"+this.value+".png";
        chart.src = "assets/img/maps/chart/"+target+"/"+this.value+".png";
        historicalYear.innerHTML = this.value;
        // $(".chart-year").text(this.value);
        }

        rcpSlider.oninput = function() {
        var target = $(".buttons button.active").data("class");
        rcpGlobe.src = "assets/img/maps/"+target+"/"+this.value+".png";
        chart.src = "assets/img/maps/chart/"+target+"/"+this.value+".png";
        chartrcp.src = "assets/img/maps/chart-rcp/"+target+"/"+this.value+".png";
        // scenario.innerHTML = 'RCP'+target+': ';
        rcpYear.innerHTML = this.value;
        //$("#scenario").text("RCP "+target+": "+rcpYear.innerHTML);
        $(".chart-year").text("RCP"+target+": "+rcpYear.innerHTML);
        }


        // END MAPS

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



