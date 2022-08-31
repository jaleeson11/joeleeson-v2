import Headroom from "headroom.js";

const nav = document.querySelector('header');
const headroom = new Headroom(nav, {
	offset: 150
});

const mediaQuery = window.matchMedia("(min-width: 767px)");
if (mediaQuery.matches) {
	headroom.init();
}