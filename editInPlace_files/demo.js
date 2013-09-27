$(document).ready(function(){
	$("img.modifyButton").click(function(){
		$(this).prev().editInPlace({
			success: function(){
				$(this).unbind('.editInPlace');
				$(this).unbind('click');
			},
			url:'Admin/p.inline_coupon_edit_frontend.php',
			text_size:55,
			show_buttons: false,
			params:"field=Title"
		});

		$(this).prev().on('click', function(event)
				{
					event.preventDefault();
				});
		$(this).prev().click();
	});

});
