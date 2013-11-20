$(document).ready(function(){
  $('.gridly').gridly({
    base: 220, // px 
    gutter: 20, // px
    columns: 4
  });
  $(document).on("click", ".gridly .brick", function(event) {
	var $this, size;
	event.preventDefault();
	event.stopPropagation();
	$this = $(this);
	$('span.close').remove();
	$('.brick.large').removeClass('large').addClass('small').data({
		'width'  : 220,
		'height' : 220
	});
	if ($this.hasClass('small')) {
		size = 700;
		$this.removeClass('small').addClass('large').data({
			'width' : 700,
			'height': 700
		});
		$this.prepend('<span class="close">&times;</span>');
	}
	return $('.gridly').gridly('layout');
  }); 
  
  	$('.brick').delegate('span.close','click', function(event){
  		event.preventDefault();
		event.stopPropagation();
		$(this).parent().removeClass('large').addClass('small').data({
			'width'  : 220,
			'height' : 220
		});
		$(this).unbind('click').remove();
		size = 220;
		return $('.gridly').gridly('layout');
	});
});
