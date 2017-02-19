

$(document).ready(function() {
    'use strict';
	
	$('form #response').hide();
	
	$('#submit').click(function(e) {
		
		// prevent forms default action until
		// error check has been performed
		e.preventDefault();
				
		// grab form field values
		var valid = '';
        var date = '';
		var required = ' is required.';
		var numguest = parseInt($('form #numguest').val());
		var email = $('#emailid').val();
		var datetimepick = ($('#datetimepick').handleDtpicker('getDate')).toString();
        var message = $('form #suggestions').val();
        if (isNaN(numguest) == true || numguest == 0 || numguest < 0 ) {
			valid = '<p> Please provide a guest list ' + required +'</p>';	
			$('form #numguest').addClass('require');
		}
		else {
			$('form #numguest').removeClass('require');
		}
		
		if (!email.match(/^([a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$)/i)) {
			valid += '<p>Your email' + required +'</p>';												  
			$('form #emailid').addClass('require');
		}
		else {
			$('form #emailid').removeClass('require');
		}
        
		if (message == '' && message.length <= 2) {
			valid += '<p>A message' + required  + '</p>';
			$('form #suggestions').addClass('require');
		}
		else {
			$('form #suggestions').removeClass('require');
		}
		
		// let the user know if there are erros with the form
		if (valid != '') {
			$('form').removeClass().addClass('frm_error');
			$('form #response').removeClass().addClass('error')
				.html('<strong>Please correct the errors below.</strong>' +valid).fadeIn('fast');			
		}
		// let the user know something is happening behind the scenes
		// serialize the form data and send to our ajax function
		else {
			$('form #response').removeClass().addClass('processing').html('Processing...').fadeIn('fast');										
			
			var formData = $('form').serialize();
			submitForm(formData);			
		}			
			
	});
});

// make our ajax request to the server
function submitForm(formData) {
	
	$.ajax({	
		type: 'POST',
		url: 'php/book.php',		
		data: formData,
		dataType: 'json',
		cache: false,
		timeout: 7000,
		success: function(data) { 			
			
			$('form #response').removeClass().addClass((data.error === true) ? 'error' : 'success')
						.html(data.msg).fadeIn('fast');	
						
			if ($('form #response').hasClass('success')) {
				
				setTimeout("$('form #response').fadeOut('fast')", 5000);
			}
		
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
						
			$('form #response').removeClass().addClass('error')
						.html('<p>There was an<strong> ' + errorThrown +
							  '</strong> error due to a<strong> ' + textStatus +
							  '</strong> condition.</p>').fadeIn('fast');			
		},				
		complete: function(XMLHttpRequest, status) { 			
			
			$('form')[0].reset();
		}
	});	
};
