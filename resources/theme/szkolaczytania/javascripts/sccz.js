$(function() {

	// initialize scrollable
	$("#carousel").scrollable({
		circular: true
		}).navigator({
		navi: '#nav-carousel',
		indexed: 'true'
	}).autoscroll({
		interval: 5000,
		autopause: true		
	});
	
	// initialize scrollable mini
	$("#carousel-mini").scrollable({
		circular: true
		}).autoscroll({
		interval: 5000,
		autopause: true		
	});	
});