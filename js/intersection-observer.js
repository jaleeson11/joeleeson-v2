const sections = document.querySelectorAll('section');
const nav = document.querySelector('.navbar__nav');
const navList = nav.querySelectorAll('li');

const options = {
	root: null,
	threshold: 1,
};

const observer = new IntersectionObserver(function(entries, observer) {
	entries.forEach(entry => {
		if (!entry.isIntersecting) {
			return;
		}

		console.log(entry.target);

		const current = entry.target.getAttribute('id');
		console.log(current);
		navList.forEach(item => {
			item.classList.remove('active');
			if (item.classList.contains(current)) {
				item.classList.add('active');
			}
		});

		// observer.unobserve(entry.target);
	})
}, options);

sections.forEach(section => {
	observer.observe(section);
});

