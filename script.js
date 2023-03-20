// Get the element with id="home" and click on it
window.addEventListener('DOMContentLoaded', (event) => {
    console.log("Home button click code is running");
	document.getElementById("home").click();
});

function appHeight() {
  const doc = document.documentElement;
  doc.style.setProperty('--vh', (window.innerHeight*.01) + 'px');
}

window.addEventListener('resize', appHeight);
appHeight();

const slideGallery = document.querySelector('.slides');
const slides = slideGallery.querySelectorAll('div');
const thumbnailContainer = document.querySelector('.thumbnails');
const slideCount = slides.length;
const slideWidth = 540;

const highlightThumbnail = () => {
	thumbnailContainer
		.querySelectorAll('div.highlighted')
		.forEach(el => el.classList.remove('highlighted'));
	const index = Math.floor(slideGallery.scrollLeft / slideWidth);
	thumbnailContainer
		.querySelector(`div[data-id="${index}"]`)
		.classList.add('highlighted');
};

const scrollToElement = el => {
	const index = parseInt(el.dataset.id, 10);
	slideGallery.scrollTo(index * slideWidth, 0);
};

thumbnailContainer.innerHTML += [...slides]
	.map((slide, i) => `<div data-id="${i}"></div>`)
	.join('');

thumbnailContainer.querySelectorAll('div').forEach(el => {
	el.addEventListener('click', () => scrollToElement(el));
});

slideGallery.addEventListener('scroll', e => highlightThumbnail());

highlightThumbnail();


function openPage(pageName, elmnt, color) {
	// Hide all elements with class="tabcontent" by default */
	var i, tabcontent, tablinks, underline, tabimgs;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	
	// Show the specific tab content
	document.getElementById(pageName).style.display = "flex";
	
	// Hide all underlines
	underline = document.getElementsByClassName("underline");
	for (i = 0; i < underline.length; i++) {
		underline[i].style.opacity = "0";
	}
	
	// Show selected underline
	underline = elmnt.getElementsByClassName("underline");
	
	for (i = 0; i < underline.length; i++) {
		underline[i].style.opacity = "1";
	}
	
	tabimgs = document.getElementsByClassName("tabs");
	
	if (pageName == "Photos") {
		document.body.style.backgroundColor = "#000000";
		for (i = 0; i < tabimgs.length; i++) {
			tabimgs[i].style.filter="invert(100%)";
		}
	} else {
		document.body.style.backgroundColor = "#FCB3C0";
		for (i = 0; i < tabimgs.length; i++) {
			tabimgs[i].style.filter="none";
		}
	}
}