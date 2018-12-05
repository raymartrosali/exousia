let sideNavStatus = false;
let getSideNav = document.querySelector(".sideBar");
let getSideBarCont = document.querySelector(".sideBarCont");
let getTranslateLang = document.querySelectorAll(".translate-lang");
let getSideNavIcon = document.querySelector("#sideNavIcon");
let getTranslate = document.querySelectorAll(".lang-translation");
function sideNavToggle(){
	if (sideNavStatus) {
		getSideNav.style.width = "0px";
		getSideBarCont.style.display = "none";
		sideNavStatus = false;
		getSideNavIcon.classList.remove("fa-times");
		getSideNavIcon.classList.add("fa-language");
	}else{
		getSideNav.style.width = "70px";
		getSideBarCont.style.display = "block";
		sideNavStatus = true;
		getSideNavIcon.classList.remove("fa-language");
		getSideNavIcon.classList.add("fa-times");	
	}
	
}
function translateLang(selectedLang, event){
	for (var i = 0; i < getTranslateLang.length; i++) {
		getTranslateLang[i].classList.remove("lang-active");
	}
		event.target.parentElement.classList.add("lang-active");
	for (var i = 0; i < getTranslate.length; i++) {
		getTranslate[i].classList.remove("show-lang");
	}

	let translationProcess = document.querySelectorAll(".lang-" + selectedLang);
	for (var i = 0; i < translationProcess.length; i++) {
		translationProcess[i].classList.add("show-lang");
	}
}