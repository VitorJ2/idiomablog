    $(document).ready(function(){
		if (document.getElementById('lang')) {
		  $("#lang").prepend("<div id='lang-box'><span id='eng' class='lang-button active'>ENG</span><span id='pt-br' class='lang-button'>PT-BR</span></div>");
		}	
		$('.lang-button').click(function(){
			var id = $(this).attr("id");
			$('.active').removeClass('active')
			$('.lang-text').hide();
			$('.lang-text#'+id).show();
			$(this).addClass('active')
		});
	});