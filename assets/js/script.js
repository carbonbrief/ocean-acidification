// OCEAN ACIDIFICATION

function preloadImage(url) {
  var img = new Image();
  img.src = url;
}

const imageURLs = [
  'ocean-acidification/assets/img/maps/historical/1770.png',
  'ocean-acidification/assets/img/maps/historical/1780.png',
  'ocean-acidification/assets/img/maps/historical/1790.png',
  'ocean-acidification/assets/img/maps/historical/1800.png',
  'ocean-acidification/assets/img/maps/historical/1810.png',
  'ocean-acidification/assets/img/maps/historical/1820.png',
  'ocean-acidification/assets/img/maps/historical/1830.png',
  'ocean-acidification/assets/img/maps/historical/1840.png',
  'ocean-acidification/assets/img/maps/historical/1850.png',
  'ocean-acidification/assets/img/maps/historical/1860.png',
  'ocean-acidification/assets/img/maps/historical/1870.png',
  'ocean-acidification/assets/img/maps/historical/1880.png',
  'ocean-acidification/assets/img/maps/historical/1890.png',
  'ocean-acidification/assets/img/maps/historical/1900.png',
  'ocean-acidification/assets/img/maps/historical/1910.png',
  'ocean-acidification/assets/img/maps/historical/1920.png',
  'ocean-acidification/assets/img/maps/historical/1930.png',
  'ocean-acidification/assets/img/maps/historical/1940.png',
  'ocean-acidification/assets/img/maps/historical/1950.png',
  'ocean-acidification/assets/img/maps/historical/1960.png',
  'ocean-acidification/assets/img/maps/historical/1970.png',
  'ocean-acidification/assets/img/maps/historical/1980.png',
  'ocean-acidification/assets/img/maps/historical/1990.png',
  'ocean-acidification/assets/img/maps/historical/2000.png',
  'ocean-acidification/assets/img/maps/2.6/2010.png',
  'ocean-acidification/assets/img/maps/2.6/2020.png',
  'ocean-acidification/assets/img/maps/2.6/2030.png',
  'ocean-acidification/assets/img/maps/2.6/2040.png',
  'ocean-acidification/assets/img/maps/2.6/2050.png',
  'ocean-acidification/assets/img/maps/2.6/2060.png',
  'ocean-acidification/assets/img/maps/2.6/2070.png',
  'ocean-acidification/assets/img/maps/2.6/2080.png',
  'ocean-acidification/assets/img/maps/2.6/2090.png',
  'ocean-acidification/assets/img/maps/2.6/2100.png',
  'ocean-acidification/assets/img/maps/4.5/2010.png',
  'ocean-acidification/assets/img/maps/4.5/2020.png',
  'ocean-acidification/assets/img/maps/4.5/2030.png',
  'ocean-acidification/assets/img/maps/4.5/2040.png',
  'ocean-acidification/assets/img/maps/4.5/2050.png',
  'ocean-acidification/assets/img/maps/4.5/2060.png',
  'ocean-acidification/assets/img/maps/4.5/2070.png',
  'ocean-acidification/assets/img/maps/4.5/2080.png',
  'ocean-acidification/assets/img/maps/4.5/2090.png',
  'ocean-acidification/assets/img/maps/4.5/2100.png',
  'ocean-acidification/assets/img/maps/6.0/2010.png',
  'ocean-acidification/assets/img/maps/6.0/2020.png',
  'ocean-acidification/assets/img/maps/6.0/2030.png',
  'ocean-acidification/assets/img/maps/6.0/2040.png',
  'ocean-acidification/assets/img/maps/6.0/2050.png',
  'ocean-acidification/assets/img/maps/6.0/2060.png',
  'ocean-acidification/assets/img/maps/6.0/2070.png',
  'ocean-acidification/assets/img/maps/6.0/2080.png',
  'ocean-acidification/assets/img/maps/6.0/2090.png',
  'ocean-acidification/assets/img/maps/6.0/2100.png',
  'ocean-acidification/assets/img/maps/8.5/2010.png',
  'ocean-acidification/assets/img/maps/8.5/2020.png',
  'ocean-acidification/assets/img/maps/8.5/2030.png',
  'ocean-acidification/assets/img/maps/8.5/2040.png',
  'ocean-acidification/assets/img/maps/8.5/2050.png',
  'ocean-acidification/assets/img/maps/8.5/2060.png',
  'ocean-acidification/assets/img/maps/8.5/2070.png',
  'ocean-acidification/assets/img/maps/8.5/2080.png',
  'ocean-acidification/assets/img/maps/8.5/2090.png',
  'ocean-acidification/assets/img/maps/8.5/2100.png'
];

for (const url of imageURLs) preloadImage(url);

// HERO

$('#intro-background').ripples({
  dropRadius: 20,
  perturbance: 0.02,
  resolution: 512,
});



// MAPS

let slider = document.getElementById("yearRange");
let year = document.getElementById("year");
let rcpYear = document.getElementById("rcp-year");
let scenario = document.getElementById("scenario");
let scenarioYear = document.getElementById("scenario-year");
let pHValue = document.getElementById("value");
let globe = document.getElementById("globe");
let chart = document.getElementById('globe-chart');
year.innerHTML = slider.value;

// BUTTONS

const pathColours = {
  'historical': '#0b4572',
  '2.6': '#20998a',
  '4.5': '#efc530',
  '6.0': '#c7432b',
  '8.5': '#740707'
}

const historicalPhValues = {
  1770: '8.18',
  1780: '8.178',
  1790: '8.176',
  1800: '8.174',
  1810: '8.173',
  1820: '8.172',
  1830: '8.172',
  1840: '8.173',
  1850: '8.172',
  1860: '8.17',
  1870: '8.168',
  1880: '8.164',
  1890: '8.159',
  1900: '8.153',
  1910: '8.151',
  1920: '8.149',
  1930: '8.142',
  1940: '8.137',
  1950: '8.128',
  1960: '8.116',
  1970: '8.106',
  1980: '8.097',
  1990: '8.085',
  2000: '8.069'
}
const one = {
  2010: '8.066',
  2020: '8.053',
  2030: '8.029',
  2040: '8.014',
  2050: '8.011',
  2060: '8.009',
  2070: '8.011',
  2080: '8.016',
  2090: '8.022',
  2100: '8.027'
}

const two = {
  2010: '8.066',
  2020: '8.055',
  2030: '8.028',
  2040: '8.003',
  2050: '7.979',
  2060: '7.956',
  2070: '7.939',
  2080: '7.930',
  2090: '7.927',
  2100: '7.919'
}

const three = {
  2010: '8.066',
  2020: '8.055',
  2030: '8.033',
  2040: '8.010',
  2050: '7.985',
  2060: '7.959',
  2070: '7.927',
  2080: '7.893',
  2090: '7.859',
  2100: '7.836'
}

const four = {
  2010: '8.066',
  2020: '8.050',
  2030: '8.017',
  2040: '7.980',
  2050: '7.940',
  2060: '7.892',
  2070: '7.841',
  2080: '7.789',
  2090: '7.741',
  2100: '7.693'
}



$(".buttons button").click(function () {
  $(".buttons button").removeClass("active");
  $(this).addClass("active");
  var currentClass = $(".buttons button.active").val();
  // console.log(currentClass);
  if (currentClass == 'historical' && year.innerHTML >= 2010) {
    slider.value = 2000
    $("#year").text(slider.value);
  } else if (currentClass != 'historical' && year.innerHTML <= 2000) {
    slider.value = 2010
    $("#year").text(slider.value);
  }

  if (currentClass != 'historical' && slider.value >= 2010) {
    scenario.style.display = 'inline'
    scenario.innerHTML = ' (RCP' + currentClass + ')';
  }
  else {
    scenario.style.display = 'none'
  }

  globe.src = "assets/img/maps/" + currentClass + "/" + year.innerHTML + ".png";
  chart.src = "assets/img/maps/chart/" + currentClass + "/" + year.innerHTML + ".png";

  $(scenarioYear).css('color', pathColours[currentClass])

  if (currentClass == '2.6') {
    $(pHValue).text(one[slider.value])
  } else if (currentClass == '4.5') {
    $(pHValue).text(two[slider.value])
  } else if (currentClass == '6.0') {
    $(pHValue).text(three[slider.value])
  } else if (currentClass == '8.5') {
    $(pHValue).text(four[slider.value])
  } else {
    $(pHValue).text(historicalPhValues[slider.value])
  }

});

let target = $(".buttons button.active").data("class");
// SLIDER
slider.oninput = function () {

  let target = $(".buttons button.active").data("class");
  if (this.value >= 2010 && target == 'historical') {
    $(".buttons button").removeClass("active");
    $(".buttons button#rcp2_6").addClass("active");
    // console.log('wrong')
    target = '2.6';
  }

  else if (this.value <= 2000 && target != 'historical') {
    $(".buttons button").removeClass("active");
    $(".buttons button#historical").addClass("active");
    target = 'historical';
    $(scenarioYear).css('color', '#0b4572')
  }
  if (target != 'historical' && slider.value >= 2010) {
    scenario.style.display = 'inline';
    scenario.innerHTML = ' (RCP' + target + ')';
  }
  else {
    scenario.style.display = 'none'
  }

  globe.src = "assets/img/maps/" + target + "/" + this.value + ".png";
  chart.src = "assets/img/maps/chart/" + target + "/" + this.value + ".png";
  year.innerHTML = this.value;
  $(scenarioYear).css('color', pathColours[target])
  if (target == '2.6') {
    $(pHValue).text(one[slider.value])
  } else if (target == '4.5') {
    $(pHValue).text(two[slider.value])
  } else if (target == '6.0') {
    $(pHValue).text(three[slider.value])
  } else if (target == '8.5') {
    $(pHValue).text(four[slider.value])
  } else {
    $(pHValue).text(historicalPhValues[slider.value])
  }
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

// 

// SERVE DIFFERENT VIDEOS DEPENDING ON USER DEVICE

// function changeVideo() {

//   // $(window).resize(function() {
//   windowWidth = $(window).width();

//   if (windowWidth < 767) {
//     if ($('#intro-vid').hasClass('vid-desktop')) {
//       $('#intro-vid').removeClass('vid-desktop')
//       $('#intro-vid').attr('src', 'assets/video/proxy-map-hero_mobile.mp4')
//     }

//   } else {
//     $('#intro-vid').addClass('vid-desktop')
//     $('#intro-vid').attr('src', 'assets/video/proxy-map-hero_1.mp4')
//   }
//   // });

// }

// smooth scroll

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
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
        }, 1000, function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

// * * Lightbox - add script link if needed

// $(document).ready(function () {
//   $('.lightbox-1').magnificPopup({ type: 'image' });
// });

//   AUTO ADD TARGET BLANKS TO ALL NON_CB_POINTING LINKS

$('a[href^="http://"], a[href^="https://"]').not('a[href*=carbonbrief]').attr('target', '_blank');



