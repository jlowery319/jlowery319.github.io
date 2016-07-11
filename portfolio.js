$(document).ready(function() {
	
	// toggle which projects are visible
	
	$('#refresh').click(function() {
		// divs are block by default
		// if first 4 are visible, make them invisible & show last 4 
		if ($('.t0').css('display') == 'block') {
			$('.t0, .t1, .t2, .t3').css('display', 'none');
			$('.t4, .t5, .t6, .t7').css('display', 'block');
		}
		// otherwise show 1st 4 again
		else {
			$('.t0, .t1, .t2, .t3').css('display', 'block');
			$('.t4, .t5, .t6, .t7').css('display', 'none');
		}

	});


});