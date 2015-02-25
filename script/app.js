$(document).ready(function(){


	$('li').on('click', function(){
		$('li').each(function(){
			if($(this).hasClass('active')) {
				$(this).removeClass('active');
			}
		});

		$(this).toggleClass('active');
	});


	// refactor!!!!
	$('.jokes-nav').on('click', function(){
		$('article').each(function(){
			if($(this).hasClass('visible')) {
				$(this).removeClass('visible')
			}
		});
		$('.jokes').toggleClass('visible');
	});

	$('.home-nav').on('click', function(){
		$('article').each(function(){
			if($(this).hasClass('visible')) {
				$(this).removeClass('visible')
			}
		});
		$('.home').toggleClass('visible');
	});
	$('.gifs-nav').on('click', function(){
		$('article').each(function(){
			if($(this).hasClass('visible')) {
				$(this).removeClass('visible')
			}
		});
		$('.gifs').toggleClass('visible');
	});
	$('.pics-nav').on('click', function(){
		$('article').each(function(){
			if($(this).hasClass('visible')) {
				$(this).removeClass('visible')
			}
		});
		$('.pics').toggleClass('visible');
	});

});