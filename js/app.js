// Use (window).load so images in Isotope load first, then the grid
$(window).load(function(){
    // Isotope Filter - Home Page - Filter By Accessibilty
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
	
	
	
	// Isotope Filter - Home Page - Filter By Date/Range
	var $container = $('.shows'); 
    $container.isotope({ 
        filter: '*', 
        animationOptions: { 
            duration: 750, 
            easing: 'linear', 
            queue: false, 
        } 
    });
  
    $('.filterCalendar .row .col-xs-12 a').click(function(){ 
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
	var $optionSets = $('.filterCalendar .row .col-xs-12'), 
		   $optionLinks = $optionSets.find('a'); 

		   $optionLinks.click(function(){ 
			  var $this = $(this); 
		  // don't proceed if already selected 
		  if ( $this.hasClass('selected') ) { 
			  return false; 
		  } 
	   var $optionSet = $this.parents('.filterCalendar .row .col-xs-12'); 
	   $optionSet.find('.selected').removeClass('selected'); 
	   $this.addClass('selected');  
	});
	
	// Select Multiple Accessibility Filters
//	function getComboFilter( filters ) {
//		var i = 0;
//		var comboFilters = [];
//		var message = [];
//		for ( var prop in filters ) {
//			message.push( filters[ prop ].join(' ') );
//            var filterGroup = filters[ prop ];
//            // skip to next filter group if it doesn't have any values
//            if ( !filterGroup.length ) {
//                continue;
//            }
//            if ( i === 0 ) {
//                // copy to new array
//                comboFilters = filterGroup.slice(0);
//            }
//            else {
//				var filterSelectors = [];
//                // copy to fresh array
//				var groupCombo = comboFilters.slice(0); // [ A, B ]
//				// merge filter Groups
//				for (var k=0, len3 = filterGroup.length; k < len3; k++) {
//					for (var j=0, len2 = groupCombo.length; j < len2; j++) {
//						filterSelectors.push( groupCombo[j] + filterGroup[k] ); // [ 1, 2 ]
//					}
//				}
//				// apply filter selectors to combo filters for next group
//				comboFilters = filterSelectors;
//            }
//			i++;
//		}
//		comboFilters.sort();
//        var comboFilter = comboFilters.join(', ');
//		return comboFilter;
//	}
//	function clearAll(){
//		$('a.active').trigger('click');
//		$('#filter-display').empty();
//		var numItemsDisp = $('img.item:not(.isotope-hidden)').length;
//		$('#filter-display').append( '<span class="filter-label data-counter pull-right">Displaying all&nbsp;'+numItemsDisp+'&nbsp;artworks</span>' );
//	}

})


// DOM Ready
$(document).ready(function() {
	
	// Single Show Slider
	$('.bxslider').bxSlider({
		pager: false
	});
	
	
	// Increase/Decrease Font Size
	$('#incfont').click(function() {
		curSize = parseInt($('#content').css('font-size')) + 2;
		if (curSize <= 30)
			$('#content').css('font-size', curSize);
	});
	$('#decfont').click(function() {
		curSize = parseInt($('#content').css('font-size')) - 2;
		if (curSize >= 12)
			$('#content').css('font-size', curSize);
	});
	
	
	
//	$('#date-range9').dateRangePicker({
//		autoClose: false,
//		format: 'YYYY-MM-DD',
//		separator: ' to ',
//		language: 'auto',
//		startOfWeek: 'sunday',// or monday
//		getValue: function()
//		{
//			return $(this).val();
//		},
//		setValue: function(s)
//		{
//			if(!$(this).attr('readonly') && !$(this).is(':disabled') && s != $(this).val())
//			{
//				$(this).val(s);
//			}
//		},
//		startDate: false,
//		endDate: false,
//		time: {
//			enabled: false
//		},
//		minDays: 0,
//		maxDays: 0,
//		showShortcuts: true,
//		shortcuts:
//		{
//			//'prev-days': [1,3,5,7],
//			'next-days': [3,5,7],
//			//'prev' : ['week','month','year'],
//			'next' : ['week','month','year']
//		},
//		customShortcuts : [],
//		inline:false,
//		container:'body',
//		alwaysOpen:false,
//		singleDate:false,
//		lookBehind: false,
//		batchMode: false,
//		duration: 200,
//		stickyMonths: false,
//		dayDivAttrs: [],
//		dayTdAttrs: [],
//		applyBtnClass: '',
//		singleMonth: 'auto',
//		hoveringTooltip: function(days)
//		{
//			return days > 1 ? days + ' days' : '';
//		},
//		showTopbar: true
//	});
	
	// Custom Date Picker
	$('#customBtn').dateRangePicker({
		showShortcuts: false,
		format: 'YYYY-MM-DD'
	}).bind('datepicker-change', function(evt, obj) {
		alert('date1: ' + obj.date1 + ' / date2: ' + obj.date2);
	});
	
	// View Calendar
	$('#customCalendar').dateRangePicker({
		autoClose: true,
		singleDate : true,
		showShortcuts: false
	});

});


