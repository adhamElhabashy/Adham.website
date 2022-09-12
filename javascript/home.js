document.addEventListener("mousemove", function (e) {
	let x = e.clientX;
	let y = e.clientY;

	document.querySelector(".cursor").style.cssText = `left: ${x}px; top: ${y}px`;
});
// // navbar // //
document.querySelector(".navbar-toggler").onclick = function () {
	document.querySelector("nav").classList.toggle("backg");
};
// // how to make links scroll // //
Array.from(
	document.querySelectorAll(".navbar-nav li a:not([data-section='none'])")
).forEach((a) => {
	a.addEventListener("click", (e) => {
		e.preventDefault();
		document.querySelector(e.target.dataset.section).scrollIntoView({
			behavior: "smooth",
		});
	});
});
// // how to make skills effect // //

Array.from(document.querySelectorAll(".about .face")).forEach((box) => {
	let skillsOne = [
		"Html",
		"Css",
		"Javascript",
		"Pug",
		"Git & Github",
		"Bootstrap",
		"Sass",
		"Unit Testing",
		"Vue.js",
	];
	function changeBackText() {
		let randomNumber = Math.floor(Math.random() * skillsOne.length);
		document.querySelector(".about .box .back").textContent =
			skillsOne[randomNumber];
	}
	function addEffectClass() {
		document.querySelector(".about .box").classList.add("effect");
	}
	function changeFrontText() {
		let randomNumber = Math.floor(Math.random() * skillsOne.length);
		document.querySelector(".about .box .front").textContent =
			skillsOne[randomNumber];
	}
	function removeEffectClass() {
		document.querySelector(".about .box").classList.remove("effect");
	}
	async function doAll() {
		changeBackText();
		addEffectClass();
		setTimeout(() => {
			changeFrontText();
			removeEffectClass();
		}, 1000);
	}
	setInterval(() => {
		doAll();
	}, 3000);
});
// // how to make shooting star effect // //
setInterval(() => {
	document.querySelector(".landing .shooting-star").remove();
	let shooting = document.createElement("div");
	shooting.classList.add("shooting-star");
	shooting.classList.add("shooting");
	document.querySelector(".landing").append(shooting);
	setTimeout(() => {
		document.querySelector(".landing .shooting-star2").remove();
		let shooting = document.createElement("div");
		shooting.classList.add("shooting-star2");
		shooting.classList.add("shooting");
		document.querySelector(".landing").append(shooting);
	}, 4000);
}, 7000);
setInterval(() => {
	document.querySelector(".work .shooting-star").remove();
	let shooting = document.createElement("div");
	shooting.classList.add("shooting-star");
	shooting.classList.add("shooting");
	document.querySelector(".work").append(shooting);
	setTimeout(() => {
		document.querySelector(".work .shooting-star2").remove();
		let shooting = document.createElement("div");
		shooting.classList.add("shooting-star2");
		shooting.classList.add("shooting");
		document.querySelector(".work").append(shooting);
	}, 4000);
}, 7000);
setInterval(() => {
	document.querySelector(".contact .shooting-star").remove();
	let shooting = document.createElement("div");
	shooting.classList.add("shooting-star");
	shooting.classList.add("shooting");
	document.querySelector(".contact").append(shooting);
	setTimeout(() => {
		document.querySelector(".contact .shooting-star2").remove();
		let shooting = document.createElement("div");
		shooting.classList.add("shooting-star2");
		shooting.classList.add("shooting");
		document.querySelector(".contact").append(shooting);
	}, 4000);
}, 7000);
// // change info width in work section // //
document.querySelectorAll(".contact input").forEach((box) => {
	box.onclick = function () {
		this.parentElement.children[0].style.cssText = "transform: translateX(0)";
		this.parentElement.children[1].style.cssText = "transform: translateY(0)";
		this.parentElement.children[4].style.cssText = "transform: translateY(0)";
		this.parentElement.style.cssText = "margin-left: 20px";
		this.addEventListener("blur", function () {
			this.parentElement.children[0].style.cssText =
				"transform: translateX(100%)";
			this.parentElement.children[1].style.cssText =
				"transform: translateY(-100%)";
			this.parentElement.children[4].style.cssText =
				"transform: translateY(100%)";
			this.parentElement.style.cssText = "margin-left: 0";
		});
	};
});
document.querySelector(".contact textarea").onclick = function () {
	this.parentElement.children[0].style.cssText = "transform: translateX(0)";
	this.parentElement.children[1].style.cssText = "transform: translateY(0)";
	this.parentElement.children[4].style.cssText = "transform: translateY(0)";
	this.addEventListener("blur", function () {
		this.parentElement.children[0].style.cssText =
			"transform: translateX(100%)";
		this.parentElement.children[1].style.cssText =
			"transform: translateY(-100%)";
		this.parentElement.children[4].style.cssText =
			"transform: translateY(100%)";
	});
};
// // // create scroll to top // // //
let span = document.querySelector(".btn");
window.onscroll = function () {
	if (window.scrollY >= 600) {
		span.style.cssText = "right: 30px;";
	} else {
		span.style.cssText = "right: -50px";
	}
};
function scrollToTop() {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
}
span.addEventListener("click", scrollToTop);
// // // create sections effect // // //
window.onscroll = function () {
	let about = document.querySelector(".about .container");
	let services = document.querySelector(".services .container");
	let work = document.querySelector(".work .container");
	let contact = document.querySelector(".contact .container");

	if (this.scrollY >= about.offsetTop - 800) {
		about.classList.add("effect");
	}
	if (this.scrollY >= services.offsetTop) {
		services.classList.add("effect");
	}
	if (this.scrollY >= work.offsetTop - 800) {
		work.classList.add("effect");
	}
	if (this.scrollY >= contact.offsetTop - 800) {
		contact.classList.add("effect");
	}
};
