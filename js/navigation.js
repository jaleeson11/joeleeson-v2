import $ from '../node_modules/jquery/dist/jquery'

const nav = $('#navbarNav');
const toggle = $('.navbar__toggle');
const links = $('.nav-link');

toggle.on('click', () => {
	nav.toggleClass('open');

	if (nav.hasClass('open')) {
		$('body').css('overflow', 'hidden');
		toggle.attr('aria-expanded', 'true');
	} else {
		$('body').css('overflow', 'visible');
		toggle.attr('aria-expanded', 'false');
	}
});

links.on('click', (e) => {
	const link = $(e.target);
	e.preventDefault();
	nav.removeClass('open');
	$('body').css('overflow', 'visible');
	toggle.attr('aria-expanded', 'false');

	const mediaQuery = window.matchMedia("(max-width: 767px)");
	const scrollDelay = mediaQuery.matches ? 500 : 0;
	const section = $(link.attr('href')).offset().top;

	setTimeout(() => {
		$('html, body').animate({
			scrollTop: section
		}, 800);
	}, scrollDelay);
});

const scrollTopButton = $('.btn-scroll-top'),
	aboutMeSection = $('#about-me');

$(window).scroll(() => {
	if ($(window).scrollTop() > aboutMeSection.offset().top) {
		scrollTopButton.addClass('fadein');
	} else {
		scrollTopButton.removeClass('fadein');
	}
});

scrollTopButton.on('click', () => {
	$('html, body').animate({
		scrollTop: 0
	}, 800);
});
