$(document).ready(function() {

  var $window = $(window),
      $topOffsetTxt = $('#topOffsetTxt'),
      $windowWTxt = $('#windowWTxt');

  // Old school debuggins using Alert
  // annoying if you have to alert a lot of data
  // but hey, works anyway.
  //alert('your message');

  console.log('your message'); 
  
  // debugging code
  $window.on('scroll', function() {
    
    $topOffset = $(this).scrollTop();
	    
    console.log($topOffset);
    
    $topOffsetTxt.text($topOffset+'px');
    
	});

  $window.on('resize', function() {
    
    $windowWidth = $(this).width();
    
    console.log($windowWidth);
    
    $windowWTxt.text($windowWidth+'px');
    
  });
  
});