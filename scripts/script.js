$(document).ready(function() {
	$('.burger').click(function(event) {
		$('.burger').toggleClass('burger_active'); 
		$('.menu').toggleClass('menu_active');
		$('.page').toggleClass('page_lock');
	});
});