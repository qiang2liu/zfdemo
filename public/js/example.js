$.fn.extend({
	exampleAjaxRequest: function(){
		var url = $(this).parent().attr('href');
		$.ajax({
			url: url,
			dataType: 'json',
			success: function(data){
				$('.img-wrapper').html(data.html);
				if($('.example-hide-imgbox').has('img')){
					
					$('.example-hide-imgbox').css({
						'left': ($(window).width() - 800)/2 + 'px',
						'top' : ($(window).height() - 625)/2 + 'px'
					}).fadeIn();
				}
			}
		})
	}
});
$(document).ready(function(){
	$('.example-ajax-request').bind('click', function(event){
		event.preventDefault();
		$.fn.exampleAjaxRequest.call($(this));
	});
	$('.example-hide-imgbox span').bind('click', function(){
		$(this).parent().fadeOut();
	})
});
