var btnOpenMap = document.querySelector(".open-map");
var btnWriteUs = document.querySelector(".btn-write-us");

var popupOverlay = document.querySelector(".modal-overlay");
var popupMap = document.querySelector(".modal-map");
var popupWriteUs= document.querySelector(".modal-write-us");

var closeMap = popupMap.querySelector(".modal-close");
var closeWriteUs = popupWriteUs.querySelector(".modal-close");

var formWriteUs = popupWriteUs.querySelector("form");
var inputName = popupWriteUs.querySelector("[name=name]");
var inputEmail = popupWriteUs.querySelector("[name=email]");
var inputLetter = popupWriteUs.querySelector("[name=letter]");

var storageName = localStorage.getItem("inputName");


btnOpenMap.addEventListener("click", function(event) {
	event.preventDefault();
	popupOverlay.classList.add("modal-show-overlay");
	popupMap.classList.add("modal-show");
});

btnWriteUs.addEventListener("click", function(event) {
	event.preventDefault();
	popupOverlay.classList.add("modal-show-overlay");
	popupWriteUs.classList.add("modal-show");
	if (storageName) {
		inputName.value = storageName;
		inputEmail.focus();
	} else {
		inputName.focus();
	}
});

formWriteUs.addEventListener("submit", function(event) {
	if (!inputName.value || !inputEmail.value || !inputLetter.value) {
		event.preventDefault();
		popupWriteUs.classList.remove("modal-error");
		popupWriteUs.offsetWidth = popupWriteUs.offsetWidth;
		popupWriteUs.classList.add("modal-error");
	} else {
		localStorage.setItem("inputName", inputName.value);
	}
});

closeMap.addEventListener("click", function(event) {
	event.preventDefault();
	popupOverlay.classList.remove("modal-show-overlay");
	popupMap.classList.remove("modal-show");
});

closeWriteUs.addEventListener("click", function(event) {
	event.preventDefault();
	popupOverlay.classList.remove("modal-show-overlay");
	popupWriteUs.classList.remove("modal-show");
	popupWriteUs.classList.remove("modal-error");
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popupMap.classList.contains("modal-show")) {
			popupOverlay.classList.remove("modal-show-overlay");
			popupMap.classList.remove("modal-show");
		}
	}
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popupWriteUs.classList.contains("modal-show")) {
			popupOverlay.classList.remove("modal-show-overlay");
			popupWriteUs.classList.remove("modal-show");
			popupWriteUs.classList.remove("modal-error");
		}
	}
});