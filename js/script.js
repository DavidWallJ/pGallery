$(document).ready(function() {
	$('nav a').on('click', function() {
		// remove current class from all nav li
		$('nav li').removeClass('current');
		// add `current` class to this li
		$(this).parent().addClass('current');

		// set heading to `current` text
		$('h1#heading').text($(this).text());

		// get and filter link text
		const category = $(this).text().toLowerCase().replace(' ', '-');

		// remove hidden class if `all-projects` is selected
		if (category === 'all-projects') {
			$('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
		} else {
			$('ul#gallery li').each(function() {
				if (!$(this).hasClass(category)) {
					$(this).hide().addClass('hidden');
				} else {
					$(this).fadeIn('slow').removeClass('hidden');
				}
			});
		}
		// Stop link behaviour
		return false;
	});

	// mouseover project adds overlay
	$('ul#gallery li').mouseover(function() {
		let title = $(this).data('title');
		let desc = $(this).data('desc');

		if (title == null) {
			title = '';
		}

		if (desc == null) {
			desc = 'Click to Enlarge';
		}

		// append overlay
		$(this).append(`<div class="overlay"><h3>${title}<h3><p>${desc}</p></div>`);

		// get overlay
		const overlay = $(this).children('.overlay');

		// fade in overlay
		overlay.fadeIn(600);
	});

	// mouseleave project removes overlay
	$('ul#gallery li').mouseleave(function() {
		const overlay = $(this).children('.overlay');

		// fade in overlay
		overlay.fadeOut(500);
	});
});
