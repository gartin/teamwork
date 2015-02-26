$(document).ready(function()
{

	$('li').on('click', function()
	{
		$('li').each(function()
		{
			$(this).removeClass('active');
		});
		$(this).toggleClass('active');
	});

	var $articles = $('.wrapper article');

	$articles.not($articles.first()).hide(0);

	$('a[href!="#"]').on('click', function(event)
	{
		var $target = $($(event.target).attr('href'));

		if($target.length)
		{
			$articles.fadeOut(200).delay(200);
			$target.fadeIn(200);
		}

	});

	var $hash = $('a[href=' + window.location.hash + ']');
	if($hash.length)
	{
		$hash.click();
	}

});