"use strict"
const body = document.body;
const menuBurger = document.querySelector('.item-header__burger');
const menu = document.querySelector('.menus-item-header');
if(menuBurger && menu){
    menuBurger.addEventListener('click', function(e){
        menuBurger.classList.toggle('_active');
        menu.classList.toggle('_active');
		if(menuBurger.classList.contains('_active')){
			body.style.overflow = 'hidden';
		}
		if(!menuBurger.classList.contains('_active')){
			body.style.overflow = 'visible';
		}
    });
}










function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();












const native = document.querySelector('.content-native-platform__content');
const nativeGlobal = document.querySelector('.native-platform__content');
const nativeElems = document.querySelectorAll('.content-native-platform__item');
if (document.documentElement.clientWidth < 1300) {
	if(native){
		native.classList.add('swiper-wrapper');
		nativeGlobal.classList.add('swiper');
		nativeElems.forEach(element => {
			element.classList.add('swiper-slide');
		});
	}
}
const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',

  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
	effect: 'fade',
	fadeEffect: {
	  crossFade: true
	},
  });












const swipers = new Swiper('.swipers', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	// Navigation arrows
	navigation: {
	  nextEl: '.reviews-slide__swiper-button-next',
	  prevEl: '.reviews-slide__swiper-button-prev',
	},
	effect: 'fade',
	fadeEffect: {
	  crossFade: true
	},
  });







$(document).ready(function(){
	$('.spollers-section__title').click(function(event){
		if($('.spollers-section__content').hasClass('one')){
			$('.spollers-section__title').not($(this)).removeClass('active');
			$('.spollers-section__subtitle').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});















const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_actives');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_actives');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}







const slideTwoSwiperOne = document.querySelector('.content-native-platform__item-one');
const slideTwoSwiperTwo = document.querySelector('.content-native-platform__item-two');
const slideTwoSwiperThree = document.querySelector('.content-native-platform__item-three');
const slideTwoSwiperFour = document.querySelector('.content-native-platform__item-four');
const slideTwoSwiperFive = document.querySelector('.content-native-platform__item-five');
const slideTwoSwiperSix = document.querySelector('.content-native-platform__item-six');
const slideTwoSwiperSeven = document.querySelector('.content-native-platform__item-seven');
const slideTwoSwiperEght = document.querySelector('.content-native-platform__item-eght');
const slideTwoSwiperNine = document.querySelector('.content-native-platform__item-nine');


if (document.documentElement.clientWidth < 1300) {
	if(slideTwoSwiperOne){
		slideTwoSwiperOne.classList.remove('content-native-platform__item-one');
	}
	if(slideTwoSwiperTwo){
		slideTwoSwiperTwo.classList.remove('content-native-platform__item-two');
	}
	if(slideTwoSwiperThree){
		slideTwoSwiperThree.classList.remove('content-native-platform__item-three');
	}
	if(slideTwoSwiperFour){
		slideTwoSwiperFour.classList.remove('content-native-platform__item-four');
	}
	if(slideTwoSwiperFive){
		slideTwoSwiperFive.classList.remove('content-native-platform__item-five');
	}
	if(slideTwoSwiperSix){
		slideTwoSwiperSix.classList.remove('content-native-platform__item-six');
	}
	if(slideTwoSwiperSeven){
		slideTwoSwiperSeven.classList.remove('content-native-platform__item-seven');
	}
	if(slideTwoSwiperEght){
		slideTwoSwiperEght.classList.remove('content-native-platform__item-eght');
	}
	if(slideTwoSwiperNine){
		slideTwoSwiperNine.classList.remove('content-native-platform__item-nine');
	}
}


const videos = document.querySelectorAll('.videos'),
videosPlay = document.querySelectorAll('.video__play'),
videosPlays = document.querySelectorAll('.img-item-teachers__play');


videosPlays.forEach(element => {
	element.addEventListener('click', function(){
		const roditelElem = element.parentElement;
		const firstElem = roditelElem.firstElementChild;
		const firstElemVideo = firstElem.firstElementChild;
		const imageElemStart =  element.firstElementChild;
			if(firstElemVideo.paused){
				firstElemVideo.play();
				imageElemStart.src = 'img/img-three/teachers/2.png'
			}
			else{
				firstElemVideo.pause();
				imageElemStart.src = 'img/img-three/teachers/1.png'
			}
	});
});
