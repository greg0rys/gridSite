// throw an event listener on the window, once all DOMcontent is loaded, JS will apply styles needed.

window.addEventListener("DOMContentLoaded", function () {
	var body = document.querySelector("BODY");
	body.style.background = "#94959C";
	var header = document.querySelector(".header");
	header.style.width = "50%";
	header.style.marginLeft = "auto";
	header.style.marginRight = "auto";
});
