// Use (window).load so images in Isotope load first, then the grid
$(window).load(function(){
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
	
	
	// Date Range Picker
	$('input[name="daterange"]').daterangepicker();
	
	
	// Single Date Picker
	$('input[name="singledate"]').daterangepicker({
		singleDatePicker: true,
		showDropdowns: true
	});

	
	// All Options
	$('#reportrange span').html(moment().subtract(29, 'days').format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));
 
    $('#reportrange').daterangepicker({
        format: 'MM/DD/YYYY',
        startDate: moment().subtract(29, 'days'),
        endDate: moment(),
        minDate: '01/01/2012',
        maxDate: '12/31/2015',
        dateLimit: { days: 60 },
        showDropdowns: true,
        showWeekNumbers: true,
        timePicker: false,
        timePickerIncrement: 1,
        timePicker12Hour: true,
        ranges: {
           'Today': [moment(), moment()],
           'Tomorrow': [moment().add(1, 'days'), moment().add(1, 'days')],
           'Next 7 Days': [moment().add(6, 'days'), moment()],
           'Next 30 Days': [moment().add(29, 'days'), moment()]
        },
        opens: 'left',
        drops: 'down',
        buttonClasses: ['btn', 'btn-sm'],
        applyClass: 'btn-primary',
        cancelClass: 'btn-default',
        separator: ' to ',
        locale: {
            applyLabel: 'Submit',
            cancelLabel: 'Cancel',
            fromLabel: 'From',
            toLabel: 'To',
            customRangeLabel: 'Custom',
            daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr','Sa'],
            monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            firstDay: 1
        }
    }, function(start, end, label) {
        console.log(start.toISOString(), end.toISOString(), label);
        $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    });
	
	
	// Display Today's Date
	Date.prototype.toDateInputValue = (function() {
		var local = new Date(this);
		local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
		return local.toJSON().slice(0,10);
	});
	
	$('#Date').val(new Date().toDateInputValue());
	//$('#Date').moment().format("MMM Do YY");
	//$('#Date').html(moment().format('MMMM D, YYYY') );
});


