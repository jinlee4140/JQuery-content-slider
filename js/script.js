$(document).ready(function() {
	// Set Options

	var speed = 500;             //fade speed
	var autoswitch = true;		 //auto-slider options
	var autoswitch_speed = 4000; //auto-slider speed

	//Add initial active class

	$('.slide').first().addClass('active');

	//Hide all slides
	$('.slide').hide()

	//Show first slide
	$('.active').show();	

	//
	$('#next').on('click', function() {
		alert('next was clicked');
	})

});