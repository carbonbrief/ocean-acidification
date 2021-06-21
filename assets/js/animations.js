// **** HERO BUBBLES **** //

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
    var scene, camera, renderer;
    
    function onDocumentReady(){
      initialize();
      
      /* DO STUFF! */
      var material = new THREE.MeshBasicMaterial({
        color: "#6e9ec2",  
        //program

      });
    
    var radius = 5;
    var segments = 8;
    
    var circleGeometry = new THREE.CircleGeometry( radius, segments );              
    var circle = new THREE.Mesh( circleGeometry, material );
      
      var geometry = new THREE.Geometry();
      var x, y, z;
      _.times(15000, function(n){
          //1150
        x = (Math.random() * 2200) - 2199;
        y = (Math.random() * 2200) - 2199;
        z = (Math.random() * 2200) - 2199;
        
        geometry.vertices.push(new THREE.Vector3(x, y, z));
      });
      
      var pointCloud = new THREE.PointCloud(geometry, material, circle);
      scene.add(pointCloud);
      
      function render(){
        window.requestAnimationFrame(render);
        
        _.forEach(geometry.vertices, function(particle){
          var dX, dY, dZ;
          dX = Math.random() * 1 / 0.3;
          //0.1
          dY = Math.random() * 1 + 0.5;
          dZ = Math.random() * 1 + 0.9;
          
          particle.add(new THREE.Vector3(dX, dY, dZ));
        });
        geometry.verticesNeedUpdate = true;
        
        renderer.render(scene, camera);
      }
      
      render();
    }
    
    function initialize(){
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(150, width / height, 0.1, 300);
      console.log(camera);
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

  // **** END HERO BUBBLES **** //

  // SCROLLY TRIGGERS

  AOS.init({
    duration: 2000,
  });
  
  // **** MAIN BUBBLES **** //

  class bubble {
    constructor(canvasWidth, canvasHeight) {
    this.maxHeight = canvasHeight;
    this.maxWidth = canvasWidth;
    this.randomise();
  }

  generateDecimalBetween(min, max) {
    return (Math.random() * (min - max) + max).toFixed(2);
  }

  update() {
    this.posX = this.posX - this.movementX;
    this.posY = this.posY - this.movementY;

    if (this.posY < 0 || this.posX < 0 || this.posX > this.maxWidth) {
      this.randomise();
      this.posY = this.maxHeight;
    }
  }

  randomise() {
    this.colour = 0xcceeff;
    this.size = this.generateDecimalBetween(2, 6);
    this.movementX = this.generateDecimalBetween(-0.4, 0.4);
    this.movementY = this.generateDecimalBetween(0.7, 2);
    this.posX = this.generateDecimalBetween(0, this.maxWidth);
    this.posY = this.generateDecimalBetween(0, this.maxHeight);
  }
}

class background {
  constructor() {
    this.canvas = document.getElementById("floatingbubbles");
    this.ctx = this.canvas.getContext("2d");
    let actualHeight = $("#oa-background");
    this.canvas.height = actualHeight.height();
    // console.log(this.canvas.height);
    // console.log(this);
    this.canvas.width = window.innerWidth;
    this.bubblesList = [];
    this.generateBubbles();
    this.animate();
  }
  

  animate() {
    let self = this;
    self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
    self.bubblesList.forEach(function(bubble) {
      bubble.update();
      self.ctx.beginPath();
      self.ctx.arc(bubble.posX, bubble.posY, bubble.size, 0, 2 * Math.PI);
      self.ctx.fillStyle = "hsl(" + bubble.colour + ", 10%, 79%)";
      self.ctx.fill();
      self.ctx.strokeStyle = "hsl(" + bubble.colour + ", 10%, 79%)";
      self.ctx.stroke();
    });

    requestAnimationFrame(this.animate.bind(this));
  }

  addBubble(bubble) {
    return this.bubblesList.push(bubble);
  }

  generateBubbles() {
    let self = this;
    for (let i = 0; i < self.bubbleDensity(); i++) {
      self.addBubble(new bubble(self.canvas.width, self.canvas.height));
    }
  }

  bubbleDensity() {
    return Math.sqrt((this.canvas.height, this.canvas.width) * 2);
  }
}


window.onload = function() {
  new background();
};

// **** END MAIN BUBBLES **** //



// **** SVGS **** //


function pathPrepare ($el) {
    var lineLength = $el[0].getTotalLength();
    console.log(lineLength)
    $el.css("stroke-dasharray", lineLength);
    $el.css("stroke-dashoffset", lineLength);
  }

  var $arrow1 = $("path#arrow-1");
  var $arrowHead1 = $("polygon#arrow-head-1");
  var $arrow2 = $("path#arrow-2");
  var $arrowHead2 = $("polygon#arrow-head-2");

  // prepare SVG
  pathPrepare($arrow1);
  pathPrepare($arrowHead1);
  pathPrepare($arrow2);
  pathPrepare($arrowHead2);

  // init controller
  var controller = new ScrollMagic.Controller();

  // build tween
  var tween = new TimelineMax()
    .add(TweenMax.to($arrow1, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))
    .add(TweenMax.to($arrowHead1, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone})) 
    //.add(TweenMax.to("path", 1, {stroke: "#33629c", ease:Linear.easeNone}), 0);			// change color during the whole thing

    var tween2 = new TimelineMax()
    .add(TweenMax.to($arrow2, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))
    .add(TweenMax.to($arrowHead2, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}))

  // build scene
  var scene1 = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 200, tweenChanges: true})
          .setTween(tween)
          // .addIndicators()
          .addTo(controller);
  var scene2 = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 200, tweenChanges: true})
          .setTween(tween2)
          // .addIndicators()
          .addTo(controller);

// **** END SVGS **** //