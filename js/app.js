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
	
	
	// Increase/Decrease Font Size
	$('#incfont').click(function() {
		curSize = parseInt($('#content').css('font-size')) + 2;
		if (curSize <= 20)
			$('#content').css('font-size', curSize);
	});
	$('#decfont').click(function() {
		curSize = parseInt($('#content').css('font-size')) - 2;
		if (curSize >= 12)
			$('#content').css('font-size', curSize);
	});
	
});

$(document).ready(function() {
  $('#incfont').click(function() {
    curSize = parseInt($('#content').css('font-size')) + 2;
    if (curSize <= 20)
      $('#content').css('font-size', curSize);
  });
  $('#decfont').click(function() {
    curSize = parseInt($('#content').css('font-size')) - 2;
    if (curSize >= 12)
      $('#content').css('font-size', curSize);
  });
});
