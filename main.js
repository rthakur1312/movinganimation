console.log("hello");

$(document).mousemove(function(event){
  
    $(".box").each(function(index, element){
      
      var xPos = (event.clientX/$(window).width())-0.5,
         yPos = (event.clientY/$(window).height())-0.5,
         box = element;
    
    TweenLite.to(box, 1, {
      rotationY: xPos * 100, 
      rotationX: yPos * 100,
      ease: Power1.easeOut,
    });
      
    })  
  });