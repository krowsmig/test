// document.addEventListener("DOMContentLoaded", () => {

// 	function animateCounter() { 
// 		const counterElement = document.querySelector(".counter p");
// 		let currentValue = 0;
// 		const updateInterval = 300;
// 		const maxDuration = 2000;
// 		const endValue = 100;
// 		const startTime = Date.now();

// 		function upadteCounter() {
// 			const elapsedTime = Date.now() - startTime;
// 			if ( elapsedTime < maxDuration ) {
// 				currentValue = Math.min(
// 					currentValue + Math.floor(Math.random() * 30) + 5, 
// 					endValue
// 				);
// 				counterElement.textContent = currentValue;
// 				setTimeout(upadteCounter, updateInterval);
// 			} else {
// 				counterElement.textContent = currentValue;
// 				setTimeout(() => {
// 					gsap.to(counterElement, {
// 						// y: -60,
// 						opacity:0,
// 						duration: .5,
// 						ease: "power3.inOut",
// 						onStart: () => {
// 							revealLandingPage();
// 						},
// 					});
// 				}, -100);
// 			}
// 		}

// 		upadteCounter();
// 	}

// 	gsap.to(".counter p", {
// 		y: 0,
// 		duration: .5,
// 		ease: "power3.out",
// 		delay: .1,
// 		onComplete: animateCounter,
// 	});

// 	function revealLandingPage() { 
// 		gsap.to(".ld", {
// 			clipPath: "polygon(0% 200%, 200% 200%, 200% 0%, 0% 0%)",
// 			duration: 1,
// 			ease: "hop",
// 			onStart: () => {
// 				gsap.to(".opa", {
// 					y: 0,
// 					opacity: 1,
// 					duration: 1,
// 					delay: 1,
// 				});
// 				gsap.to(".opa_2", {
// 					// y: -200,
// 					opacity: 1,
// 					duration: 1,
// 					delay: 1,
// 				});
// 				gsap.to(".ld", {
// 					// transform: "translate(-50%, -50%) scale(1)",
// 					duration: 2,
// 					ease: "power3.inOut",
// 					delay: 0,
// 				});
// 				gsap.to(".overlay", {
// 					clipPath: "polygon(0% 0%, 200% 0%, 200% 0%, 0% 0%)",
// 					duration: 2,
// 					delay: 0.5,
// 					ease: "hop",
// 				});
// 				gsap.to("body", {
// 					overflowY: "auto",
// 					stagger: 0.1,
// 					duration: 0.4,
// 					ease: "power4.inOut",
// 					delay: 0.75,
// 				});
// 			},
// 		});
// 	}

// });

// let vh = window.innerHeight * 0.01;
// document.documentElement.style.setProperty('--vh', `${vh}px`);

// window.addEventListener('resize', () => {
//   let vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty('--vh', `${vh}px`);
// });

// gsap.registerPlugin(ScrollTrigger);




$(document).ready(function(){

	$("#for_fun").show().hide();

	$("#sub_nav a").click(function(){

		$(this).addClass("on").siblings().removeClass("on");

		if ($(this).index() == 2 ) {

			$("#projects").hide();
			$("#for_fun").show();
			$("#sub_nav .deco").addClass("on_1");

		} else { 

			$("#sub_nav .deco").removeClass("on_1");
			$("#for_fun").hide();
			$("#projects").show();

		}

		return false;

	});


	$("#for_fun .fn_a").click(function(){
		$("body, html").css("overflow", "hidden");
		$(this).parent().find(".fun_div").addClass("on");


		return false;

	});

	$('.fun_div').click(function(){
		$(".fun_div").removeClass("on");
		$("body, html").css("overflow", "auto");
		return false;
	});

	$('#for_fun .close').click(function(){
		$(".fun_div").removeClass("on");
		$("body, html").css("overflow", "auto");
		return false;
	});
	
	$('body, html').scrollTop(0);

	// handle links with @href started with '#' only
	$(document).on('click', 'a[href^="#"]', function(e) {
	    // target element id
	    var id = $(this).attr('href');

	    // target element
	    var $id = $(id);
	    if ($id.length === 0) {
	        return;
	    }

	    // prevent standard hash navigation (avoid blinking in IE)
	    e.preventDefault();

	    // top position relative to the document
	    var pos = $id.offset().top;

	    // animated top scrolling
	    $('body, html').animate({scrollTop: pos});
	});


	$(window).scroll(function(){
		
		if ($(window).scrollTop() >= 20) {
			$("body").addClass("change");
		} else {
			$("body").removeClass("change");

		}

	});


	// Close menu by pressing the ESC key.
  $(document).keyup(function (e) {
    if ($('.fun_div').hasClass('on') && e.keyCode === 27) { // ESC
      $('.fun_div').removeClass('on');
      $("body, html").css("overflow", "auto");
    } 
  });


  // $("#projects li.li_0 a").click(function(){
	// 	$("body").css("overflow","hidden");
	// 	$("#forfun").addClass("on");

		
	// 	$(this).siblings(".fun_div").animate({
	// 		scrollTop: '0'
	// 	}, 0);

	// 	return false;
	// });

  //   $("#forfun a.close").click(function(){
	// 	$("body").css("overflow","auto");
	// 	$("#forfun").removeClass("on");
	// 	return false;
	// });


});
