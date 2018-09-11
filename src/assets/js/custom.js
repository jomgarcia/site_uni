$(document).ready(function () {
	"use strict";	
	
	//WOW JS
	new WOW().init();
	
	//Circle Progress Bar
	$('.chart').easyPieChart({
		easing: 'easeOutBounce',
		scaleColor: false,
		size: 138,
		onStep: function(from, to, percent) {
			$(this.el).find('.percent').text(Math.round(percent));
		}
	});
	
	//Testimonial Carousel (Hosting)
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		variableWidth: false,
		arrows: false,
		responsive: [
			{
			  breakpoint: 991,
			  settings: {
				slidesToShow: 5
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 3
			  }
			}
		]
	});
	
	//Clients Logo Carousel
	$(".clients-logo-carousel").owlCarousel({
		items: 6,
		margin: 30,
		nav: true,
		navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
		dots: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 2,
				nav: false
			},
			480: {
				items: 3,
				nav: false
			},
			768: {
				items: 5
			},
			992: {
				items: 6
			}
		}
	});
	
	//Owl Example Carousel
	$(".owl-example-c").owlCarousel({
		items: 3,
		margin: 20,
		nav: true,
		navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
		dots: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			480: {
				items: 2,
				nav: false
			},
			768: {
				items: 3
			},
			992: {
				items: 3
			}
		}
	});
	
	//Map Pointer
	$(function() {
		$('.contact-map').on('click', function (e) {
			$(this).find('iframe').css('pointer-events', 'auto');
		}).mouseleave(function(e) {
			$(this).find('iframe').css('pointer-events', 'none');
		});
	});
	
	//Counter Up
	$('.counter').counterUp({
		delay: 10,
    	time: 1000
	});
	
	//Scroll Spy
	$('body').scrollspy({ target: 'nav.navbar' });
	
	//Smooth Scrool
	smoothScroll.init();
	
	//Video Popup
	//Magnific Popup
	$('.video-iframe').magnificPopup({
		type: 'iframe',
		iframe: {
			markup: '<div class="mfp-iframe-scaler">' +
					'<div class="mfp-close"></div>' +
					'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
				  '</div>',
			patterns: {
				youtube: {
					index: 'youtube.com/',
					id: 'v=',
					src: 'http://www.youtube.com/embed/%id%?autoplay=1'
				}
			},
			srcAction: 'iframe_src'
		}
	});
	
	//Preloader
	$(window).load(function() { // makes sure the whole site is loaded
		$('.loader__figure').fadeOut(); // will first fade out the loading animation
		$('.loader,.preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
		$('body').delay(350).css({'overflow':'visible'});
	})
	
	//Video Background
	jQuery("#intro").YTPlayer({
		containment:'self',
		autoPlay:true,
		mute:true,
		startAt:0,
		stopAt:55,
		opacity:0.8,
		showYTLogo: false,
		showControls: false	
	});
	
	//Sticky Menu
	$("header").sticky({topSpacing:0})
});
