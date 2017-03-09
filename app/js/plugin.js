; (function ($){
	var header = $('header');


	$(window).on('scroll', function (){

		if ($(this).scrollTop() > 30){
			header.addClass ('on-scroll');
		} else { 
			header.removeClass('on-scroll');
		}
		
	})


}) (jQuery);
