jQuery("document").ready(function($){
	
	var nav = $('.site-menu');
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 600) {
			nav.addClass("f-nav");
		} else {
			nav.removeClass("f-nav");
		}
	});

});
$(function(){
		$('#menu').slicknav();
	});