// A $( document ).ready() block

$(document).ready(function() {
	
	// Single Show Slider
	$('.bxslider').bxSlider({
		pager: false
	});
	
	// Isotope Filter, Home Page
	var $container = $('.shows'); 
    $container.isotope({ 
        filter: '*', 
        animationOptions: { 
            duration: 750, 
            easing: 'linear', 
            queue: false, 
        } 
    }); 
  
    $('nav ul.filterBtn a').click(function(){ 
        var selector = $(this).attr('data-filter'); 
        $container.isotope({ 
            filter: selector, 
            animationOptions: { 
                duration: 750, 
                easing: 'linear', 
                queue: false, 
            } 
        }); 
      return false; 
    });
	
	// Active/Selected State for Filters
	var $optionSets = $('nav ul.filterBtn'), 
		   $optionLinks = $optionSets.find('a'); 

		   $optionLinks.click(function(){ 
			  var $this = $(this); 
		  // don't proceed if already selected 
		  if ( $this.hasClass('selected') ) { 
			  return false; 
		  } 
	   var $optionSet = $this.parents('nav ul.filterBtn'); 
	   $optionSet.find('.selected').removeClass('selected'); 
	   $this.addClass('selected');  
	});

	// Reset Filters
	$(".isotope-reset").click(function(){
		$("nav ul.filterBtn a").isotope({
			filter: '*'
		});
	});
	
	
	function changeFont(fontSize) {
      return function() {
         $('html').css('font-size', fontSize + '%');
         sessionStorage.setItem('fSize', fontSize);
      }
    }

    var normalFont = changeFont(100),
	mediumFont 	   = changeFont(115),
	largeFont  	   = changeFont(125);

    $('.js-font-decrease').on('click', function(){
      normalFont();
    });

    $('.js-font-normal').on('click', function(){
      mediumFont();
    });

    $('.js-font-increase').on('click', function(){
      largeFont();
    });

    if (sessionStorage.length !== 0) {
      $('html').css('font-size', sessionStorage.getItem('fSize') + '%');
    };
	
	
});
