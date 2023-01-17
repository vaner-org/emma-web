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
	var i, tabcontent, tablinks, underline;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	
	// Show the specific tab content
	document.getElementById(pageName).style.display = "block";
	
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
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("home").click();