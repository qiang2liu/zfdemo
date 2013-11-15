$.fn.extend({
	exampleAjaxRequest: function(){
		var url = $(this).parent().attr('href');
		$.ajax({
			url: url,
			dataType: 'json',
			success: function(data){
				alert(data);
				$('.example-hide-imgbox').html(data.html);
			}
		})
	}
});
$(document).ready(function(){
	$('.example-ajax-request').bind('click', function(event){
		event.preventDefault();
		$.fn.exampleAjaxRequest.call($(this));
	})
});
