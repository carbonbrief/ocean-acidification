<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>TITLE</title>
<meta name="description" content="GOOGLE SHORT DESCRIPTION">
<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
<meta name="author" content="AUTHOR NAMES">
<meta name="twitter:card" content="summary">
<meta name="twitter:site" content="@carbonbrief" />
<meta name="twitter:image" content="TWITTER SOCIAL GRAPHIC FILE 1200 x 628" />
<meta name="twitter:creator" content="AUTHOR TWITTER HANDLES" />
<meta property="og:url"                content="url" />
<meta property="og:type"               content="article" />
<meta property="og:title"              content="TITLE" />
<meta property="og:description"        content="OPENING LINE" />
<meta property="og:image"              content="SAME GRAPHIC FILE AS ABOVE" />

<!-- Normally make use of jQuery -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

<!-- If using Bootstrap framework, also include the following two cdn links (check they're up to date) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

<!-- Include in order to render CB fonts across most devices/browsers -->
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=PT+Sans&family=PT+Sans+Narrow:wght@700&family=PT+Serif:ital@0;1&display=swap" rel="stylesheet">

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

<!-- Font awesome for social icons and any inline icons -->
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.1/css/all.css" integrity="sha384-O8whS3fhG2OnA5Kas0Y9l3cfpmYjapjI0E4theH4iuMD+pLhbf6JI0jIMfYcK3yZ" crossorigin="anonymous">

<!-- Image lightbox. Follow documentation for use https://dimsemenov.com/plugins/magnific-popup/documentation.html -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>

<!-- Internal CSS stylesheet and responsive sheet -->

<link rel="stylesheet" href="assets/css/stylesheet.css">
<link rel="stylesheet" href="assets/css/responsive.css">

<link rel="shortcut icon" href="favicon.png" type="image/x-icon">

<!-- If loading in additional html files, call here. Place in root folder -->

<script>
    $(document).ready(function(){
  //  $('#ID-NAME').load("FILENAME.html");
});

// Useful function to only load mobile content if screensize is true. Save on rendering time

// function changeMap(){
//    windowWidth = $(window).width();

//     if (windowWidth < 767 ){
//     $('#ID-NAME').load("MOBILE-FILENAME.html");
//     } else{}
// };

// $(window).resize(function(){changeMap()})
// $(document).ready(function(){changeMap()})


</script>

<!-- Global site tag (gtag.js) - Google Analytics TEST WHEN NEARING PUBLISHING  -->

<!-- <script src="https://www.google-analytics.com/analytics.js"></script>
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-19777583-2"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-19777583-2');
</script> -->

</head>
<body>

<!-- HERO BACKGROUND -->
	<!-- <div id="intro-background">
        <video src="VIDEO FILE" poster="VIDEO_POSTER.png" class="vid-desktop" type="video/mp4" autoplay="true" muted loop id="intro-vid" playsinline></video>
    </div> -->

    <div class="row central" id="section-1">
        <div id="article-title">
            <h1><span class="title-highlight">CARBON BRIEF DUMMY ARTICLE</span></h1>
            <h3><span class="title-highlight">By AUTHORS</span></h3>
        </div>
    </div>
    <div class="row central" id="section-2">
            <p class="first-par">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>      
            
      <!-- JUMP LINKS -->

            <div class="row central" id="article-links">

            <div id="back"></div>
            <ul id="droplinks">
                <a href="#one"><li>CHAPTER 1<i class="fas fa-chevron-circle-down fa-lg"></i></li></a>
                <a href="#two"><li>CHAPTER 2<i class="fas fa-chevron-circle-down fa-lg"></i></li></a>
                <a href="#three"><li>CHAPTER 3 etc<i class="fas fa-chevron-circle-down fa-lg"></i></li></a>
            </ul>

        </div>

        <div class="row central">
            <h2 id="one">CHAPTER 1</h2>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

            </div>
            <!-- MAPS -->
            <div class="full-width">
            <div class="widget-container">
                <div class="buttons">
                <button class="rcp current" id="historical" value="historical" data-class="historical">Historical</button>
                </div>
                <input type="range" min="1770" max="2000" value="1770" step="10" class="slider" id="historicalRange">
                <img id="historical-globe" src="assets/img/maps/historical/1770.png">
                <div id="scenario-year"><span id="historical-year">1770</span></div>
            </div>
            <div class="widget-container">
                <div class="buttons">
                <button class="rcp active" id="rcp2_6" value="2.6" data-class="2.6">RCP 2.6</button>
                <button class="rcp" id="rcp4_5" value="4.5" data-class="4.5">RCP 4.5</button>
                <button class="rcp" id="rcp6_0" value="6.0" data-class="6.0">RCP 6.0</button>
                <button class="rcp" id="rcp8_5" value="8.5" data-class="8.5">RCP 8.5</button>
                </div>
                <input type="range" min="2010" max="2100" value="2010" step="10" class="slider" id="rcpRange">
                <img id="rcp-globe" src="assets/img/maps/2.6/2010.png">
                <div id="scenario-year"><span id="scenario">RCP 2.6: </span><span id="rcp-year">2010</span></div>
            </div>
        </div>
        
            <!-- END MAPS -->


<!-- HIGHCHART -->

            <!-- <iframe id="highchart" src="https://cbhighcharts2021.s3.eu-west-2.amazonaws.com/proxy-explainer/global-surface-temp-records.html" name="myiFrame" scrolling="no" frameborder="0" marginheight="0px" marginwidth="0px" height="550px" width="800px" allowfullscreen></iframe>
            
            <div class="highchart-image"><img src="assets/img/compress/chart-1.png" class="inline-sm"/></a></div>

            <figcaption id="fig" class="iframe-caption">Annual global average surface temperatures from 1850-2020. Data from&nbsp;<a href="https://data.giss.nasa.gov/gistemp/" target="_blank" rel="noreferrer noopener">NASA GISTEMP</a>,&nbsp;<a href="https://www.ncdc.noaa.gov/monitoring-references/faq/anomalies.php" target="_blank" rel="noreferrer noopener">NOAA GlobalTemp</a>,&nbsp;<a href="https://www.metoffice.gov.uk/hadobs/hadcrut5/" target="_blank" rel="noreferrer noopener">Hadley/UEA HadCRUT5</a>,&nbsp;<a href="http://berkeleyearth.org/data/" target="_blank" rel="noreferrer noopener">Berkeley Earth</a>&nbsp;and Carbon Brief&rsquo;s raw temperature record. 1979-2000 temperatures from&nbsp;<a href="https://climate.copernicus.eu/2020-warmest-year-record-europe-globally-2020-ties-2016-warmest-year-recorded" target="_blank" rel="noreferrer noopener">Copernicus ERA5</a>&nbsp;(as the reanalysis record starts in 1979). Anomalies plotted with respect to a 1880-1899 baseline to show warming since the preindustrial period.</figcaption>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> -->

        </div>



        <!-- IMAGE -->
        
        <!-- <div class="img-md-container">
            <img class="inline-md" src="IMAGE-PATH" srcset="IMAGE_PATH_SMALL 480w, IMAGE_PATH_LARGE 1200w" sizes="(max-width: 480px) 480px, 1200px" alt="Stalagmites in Han-sur-Lesse caverns, Belgium. Credit: Bombaert Patrick / Alamy Stock Photo."/>
            <figcaption>Stalagmites in Han-sur-Lesse caverns, Belgium. Credit: Bombaert Patrick / Alamy Stock Photo.</figcaption>
        </div> -->
        
        <div class="row central">

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div class="long-quote">&ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&rdquo;</div>
            
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        <p id="backTop"><a href="#back">Back to top</a></p>
    </div>

    <footer>
        <div class="row central">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>First published: DATE</p>
        </div>
    </footer>
      

    <!-- Header logo -->

    <div class="logo">
        <a href="https://www.carbonbrief.org"><img id="logo-large" src="assets/img/CB-logo-large-01.png" alt="Carbon Brief"/></a>
        <a href="https://www.carbonbrief.org"><img id="logo-small" src="assets/img/CB-logo-small-01.png" alt="Carbon Brief"/></a>
    </div>

    <!-- SOCIAL SHARE ICONS. UPDATE UTM TRACKERS -->

    <div class='share-icons'>
        <span class="fa-stack" id="twitter">
            <a href="https://twitter.com/intent/tweet?url=https://interactive.carbonbrief.org/how-proxy-data-reveals-climate-of-earths-distant-past/?utm_source=subdomain&utm_medium=interactive_twitter&utm_campaign=proxydata&text=How%20???proxy???%20data%20reveals%20the%20climate%20of%20the%20Earth???s%20distant%20past%20@CarbonBrief" target="_blank">
                <i class="far fa-circle fa-stack-2x"></i>
                <i class="fab fa-twitter fa-stack-1x"></i>
            </a>
        </span>
        <span class="fa-stack" id="facebook">
            <a href="https://www.facebook.com/sharer/sharer.php?u=https://interactive.carbonbrief.org/how-proxy-data-reveals-climate-of-earths-distant-past/?utm_source=subdomain&utm_medium=interactive_facebook&utm_campaign=proxydata" target="_blank">
                
                <i class="far fa-circle fa-stack-2x"></i>
                <i class="fab fa-facebook-f fa-stack-1x"></i>
            </a>
        </span>
        <span class="fa-stack" id="linkedin">
            <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://interactive.carbonbrief.org/how-proxy-data-reveals-climate-of-earths-distant-past/?utm_source=subdomain&utm_medium=interactive_linkedin&utm_campaign=proxydata&title=How%20???proxy???%20data%20reveals%20the%20climate%20of%20the%20Earth???s%20distant%20past&summary=At%20any%20one%20moment%20in%20time,%20thousands%20of%20measurements%20are%20being%20taken%20of%20the%20world's%20weather.&source=Carbon%20Brief" target="_blank">
                <i class="far fa-circle fa-stack-2x"></i>
                <i class="fab fa-linkedin-in fa-stack-1x"></i>
            </a>
        </span>
    </div>

    <!-- INTERNAL SCRIPT FILE  -->

<script src="assets/js/script.js"></script>  
</body>
</html>
