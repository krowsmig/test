gsap.registerPlugin(ScrollTrigger);



ScrollTrigger.matchMedia({
	"(min-width: 769px)": function(){
	}, 
	"(max-width: 768px)" : function() {

	},
	"all": function() {

	}
});


// tab

var tl_tab_0 = gsap.timeline();
	tl_tab_0.to(".tab_div .tab_2", { color: "#000000" });
	tl_tab_0.to(".tab_div .tab_bg", { opacity:1, left: "3px" });
	tl_tab_0.to(".tab_div .tab_1", { color: "#ffffff" });
	

ScrollTrigger.create({
	trigger: "#img_title_1",
	animation: tl_tab_0,
	start: "top 10px",
	end: "top 10px",
	ease: "power3.inOut",
	toggleAction: "restart none none reverse",
	immediateRender: false,
	scrub: true,

});

var tl_tab_1 = gsap.timeline();
	tl_tab_1.to(".tab_div .tab_1", { color: "#000000" });
	tl_tab_1.to(".tab_div .tab_bg", { left: "86px" });
	tl_tab_1.to(".tab_div .tab_2", { color: "#ffffff" });
	

ScrollTrigger.create({
	trigger: "#img_title_2",
	animation: tl_tab_1,
	start: "top 10px",
	end: "top 100px",
	ease: "power3.inOut",
	toggleAction: "restart none none reverse",
	immediateRender: false,
	scrub: true,

});


var tl_tab_2 = gsap.timeline();
	tl_tab_2.to(".tab_div .tab_2", { color: "#000000" });
	tl_tab_2.to(".tab_div .tab_bg", { left: "170px" });
	tl_tab_2.to(".tab_div .tab_3", { color: "#ffffff" });
	

ScrollTrigger.create({
	trigger: "#img_title_3",
	animation: tl_tab_2,
	start: "top 10px",
	end: "top 100px",
	ease: "power3.inOut",
	toggleAction: "restart none none reverse",
	immediateRender: false,
	scrub: true,

});

var tl_tab_3 = gsap.timeline();
	tl_tab_3.to(".tab_div .tab_3", { color: "#000000" });
	tl_tab_3.to(".tab_div .tab_bg", { left: "253px" });
	tl_tab_3.to(".tab_div .tab_4", { color: "#ffffff" });
	

ScrollTrigger.create({
	trigger: "#img_title_4",
	animation: tl_tab_3,
	start: "top 10px",
	end: "top 100px",
	ease: "power3.inOut",
	toggleAction: "restart none none reverse",
	immediateRender: false,
	scrub: true,

});

var tl_tab_4 = gsap.timeline();
	tl_tab_4.to(".tab_div .tab_4", { color: "#000000" });
	tl_tab_4.to(".tab_div .tab_bg", { left: "336px" });
	tl_tab_4.to(".tab_div .tab_5", { color: "#ffffff" });
	

ScrollTrigger.create({
	trigger: "#img_title_5",
	animation: tl_tab_4,
	start: "top 10px",
	end: "top 100px",
	ease: "power3.inOut",
	toggleAction: "restart none none reverse",
	immediateRender: false,
	scrub: true,

});






// title_1_scroll

ScrollTrigger.create({
	trigger: ".img_title_1_scroll",
	start: "top top",
	end: "bottom bottom",
	toggleAction: "restart none none none",
	pin: ".img_title_1_scroll .for_fixed",

});


var tl_1_0 = gsap.timeline();
	tl_1_0.to(".img_title_1_scroll .pos_ab", { y: 0, transform: "scale(1)"});
	

ScrollTrigger.create({
	trigger: ".img_title_1_scroll .ext_0",
	animation: tl_1_0,
	start: "top 30%",
	ease: "power3.inOut",
	scrub: true,
	snap: true,

});

var tl_1_1 = gsap.timeline();
	tl_1_1.to(".img_title_1_scroll .mob_top", { backgroundColor: "#f8f8f8", duration: .2, delay: 0});
	tl_1_1.to(".img_title_1_scroll .mob_img", { backgroundPosition: "0% 100%", duration:.3, delay: -.4});
	tl_1_1.to(".img_title_1_scroll .comnt_1", { opacity: 1, translateY: 0, duration:.3, delay: -.2});
	tl_1_1.to(".img_title_1_scroll .comnt_2", { opacity: 1, translateY: 0, duration:.3, delay: -.2});
	
ScrollTrigger.create({
	trigger: ".img_title_1_scroll .ext_1",
	animation: tl_1_1,
	start: "top top",
	// end: "bottom bottom",
	toggleAction: "restart none none none",
	ease: "power3.inOut",
	scrub: .5,
	snap: true,

});






// title_3_scroll

var tl_3_0 = gsap.timeline();
	tl_3_0.to(".bnr_bg", { transform: "rotate(0deg) translate(0,0)" });
	tl_3_0.to(".bnr_md", { transform: "rotate(0deg) translate(0,0)" });
	tl_3_0.to(".bnr_sml", { transform: "rotate(0deg) translate(0,0)" });
	tl_3_0.to(".bnr_fmd", { transform: "rotate(0deg) translate(0,0)" });

ScrollTrigger.create({
	trigger: "#img_title_3 .text_div",
	animation: tl_3_0,
	start: "top top",
	// end: "top 600px",
	ease: "power3.inOut",
	// markers: true,
	toggleAction: "restart none none none",
	scrub: .2,

});

var tl_3_0_1 = gsap.timeline();
	tl_3_0_1.to(".bnr_div", { translateX: "-100vw" });
	tl_3_0_1.to(".bnr", { skewX: "10deg", delay: -.6 });

ScrollTrigger.create({
	trigger: "#img_title_3 .ext_0",
	animation: tl_3_0_1,
	start: "top top",
	ease: "power3.inOut",
	// end: "bottom bottom",
	toggleAction: "restart none none none",
	scrub: .2,
	// snap: true,

});



var tl_3_1 = gsap.timeline();
	tl_3_1.to(".img_title_3_scroll .extra .r_banner_1", {opacity: 1});
	tl_3_1.to(".img_title_3_scroll .extra .r_banner_3", {opacity: 1});
	
ScrollTrigger.create({
	trigger: ".img_title_3_scroll .ext_1",
	pin: ".ext_1 .pos_rel",
	pinSpacing: false,
	animation: tl_3_1,
	start: "top top",
	toggleAction: "restart none none none",
	ease: "power3.inOut",
	scrub: .5,
	snap: .5,
});



var tl_3_2_0 = gsap.timeline();
	tl_3_2_0.to(".grey_bg_5", { backgroundColor: "#e4e3e2" });

ScrollTrigger.create({
	trigger: ".img_title_3_scroll .ext_2",
	pinSpacing: false,
	animation: tl_3_2_0,
	start: "top top",
	toggleAction: "restart none none none",
	ease: "power3.inOut",
	scrub: true,
	snap: true,

});



var tl_3_2 = gsap.timeline();
	tl_3_2.to(".img_title_3_scroll .ext_2_1 .mob_img", { backgroundPosition: "0% 100%", duration:1.3,});
	
ScrollTrigger.create({
	trigger: ".img_title_3_scroll .ext_2_1",
	pin: ".ext_2_1 .pos_rel",
	pinSpacing: false,
	animation: tl_3_2,
	start: "top top",
	toggleAction: "restart none none none",
	ease: "ease",
	scrub: .5,
	snap: true,

});

var tl_3_3_1 = gsap.timeline();
	tl_3_3_1.to(".grey_bg_5", { backgroundColor: "#E8E3E2" });

ScrollTrigger.create({
	trigger: ".img_title_3_scroll .ext_2_2",
	pinSpacing: false,
	animation: tl_3_3_1,
	start: "top top",
	toggleAction: "restart none none none",
	ease: "power3.inOut",
	scrub: true,
	snap: true,

});


var tl_3_3 = gsap.timeline();
	tl_3_3.to(".img_title_3_scroll .ext_3 .mob_img em.one", { opacity: .5, duration:.2, transform: "scale(1.2)"});
	tl_3_3.to(".img_title_3_scroll .ext_3 .mob_img em.one", { opacity: .2, duration:.2, transform: "scale(0.5)"});
	tl_3_3.to(".img_title_3_scroll .ext_3 .mob_img em.one", { opacity: 0, duration:.2, transform: "scale(1)"});
	tl_3_3.to(".img_title_3_scroll .ext_3 .mob_btm", { opacity: 0, duration:.2});
	tl_3_3.to(".img_title_3_scroll .ext_3 .mob_img_3_3", { opacity: 1, duration:0.9});

	
ScrollTrigger.create({
	trigger: ".img_title_3_scroll .ext_3",
	pin: ".ext_3 .pos_rel",
	pinSpacing: false,
	animation: tl_3_3,
	start: "top top",
	toggleAction: "restart none none none",
	ease: "ease",
	scrub: true,
	snap: true,

});

var tl_3_4 = gsap.timeline();
	tl_3_4.to(".img_title_3_scroll .ext_3 .mob_img_3_3", { backgroundPosition: "0% 100%" });
	
ScrollTrigger.create({
	trigger: ".img_title_3_scroll .ext_4",
	pin: ".ext_3 .pos_rel",
	pinSpacing: false,
	// duration:2,
	animation: tl_3_4,
	start: "top top",
	toggleAction: "restart none none none",
	scrub: .5,

});



var tl_3_5 = gsap.timeline();
	tl_3_5.to(".grey_bg_5", { backgroundColor: "#252525" });


	
ScrollTrigger.create({
	trigger: ".img_title_3_scroll .ext_5",
	animation: tl_3_5,
	start: "top top",
	toggleAction: "restart none restart none",
	ease: "ease",
	scrub: true,
	snap: true,

});

var tl_3_6 = gsap.timeline();
	tl_3_6.to(".img_title_3_scroll .ext_6 .mob_img em.one", { opacity: .5, duration:.3, transform: "scale(1.2)"});
	tl_3_6.to(".img_title_3_scroll .ext_6 .mob_img em.one", { opacity: .3, duration:.3, transform: "scale(0.5)"});
	tl_3_6.to(".img_title_3_scroll .ext_6 .mob_img em.one", { opacity: 0, duration:.3, transform: "scale(1)"});
	tl_3_6.to(".img_title_3_scroll .ext_6 .mob_btm.mob_btm_0", { opacity: 0, duration:.3});
	tl_3_6.to(".img_title_3_scroll .ext_6 .mob_btm.mob_btm_1", { opacity: 1, duration:.3});
	tl_3_6.to(".img_title_3_scroll .ext_6 .mob_img_4_1", { opacity: 1, duration:1.3});
	
ScrollTrigger.create({
	trigger: ".img_title_3_scroll .ext_6",
	pin: ".ext_6 .pos_rel",
	pinSpacing: false,
	animation: tl_3_6,
	start: "top top",
	toggleAction: "restart none none none",
	ease: "power3.inOut",
	scrub: true,
	snap: true,

});
var tl_3_7 = gsap.timeline();
	tl_3_7.to(".img_title_3_scroll .ext_6 .mob_img_4_1", { backgroundPosition: "0% 100%"});


	
ScrollTrigger.create({
	trigger: ".img_title_3_scroll .ext_7",
	pin: ".ext_6 .pos_rel",
	pinSpacing: false,
	// duration:2,
	animation: tl_3_7,
	start: "top top",
	toggleAction: "restart none none none",
	scrub: .2,

});





// img_title_4
var tl_4 = gsap.timeline();
	tl_4.to("#img_title_4 .img_title_1", { opacity:1, transform: "scale(1)"});


ScrollTrigger.create({
	trigger: "#img_title_4 .scroll_div",
	animation: tl_4,
	start: "top 60%",
	end: "top 10%",
	ease: "power3.inOut",
	// markers: true,
	toggleAction: "restart none restart none",
	scrub: .5,
	// snap: true,

});






// img_title_5

ScrollTrigger.create({
	trigger: ".img_title_5_scroll",
	start: "top top",
	end: "bottom bottom",
	toggleAction: "restart none none none",
	pin: ".img_title_5_scroll .for_fixed",

});

var tl_5 = gsap.timeline();
	tl_5.to(".img_title_5_scroll .pos_ab", { y: 0, transform: "scale(1)"});


ScrollTrigger.create({
	trigger: ".img_title_5_scroll .ext_0",
	animation: tl_5,
	start: "top 30%",
	ease: "power3.inOut",
	scrub: .5,
	snap: true,

});


var tl_5_1 = gsap.timeline();
	tl_5_1.to(".img_title_5_scroll .mob_img em.one", { opacity: .5, duration:.3, transform: "scale(1.2)"});
	tl_5_1.to(".img_title_5_scroll .mob_img em.one", { opacity: .3, duration:.3, transform: "scale(0.5)"});
	tl_5_1.to(".img_title_5_scroll .mob_img em.one", { opacity: 0, duration:.3, transform: "scale(1)"});
	tl_5_1.to(".img_title_5_scroll .mob_btm", { opacity: 1, delay: -.2});
	tl_5_1.to(".img_title_5_scroll .mob_img_1", { opacity: 1, delay: -.4});


ScrollTrigger.create({
	trigger: ".img_title_5_scroll .ext_1",
	animation: tl_5_1,
	start: "top top",
	toggleAction: "restart none none none",
	ease: "power3.inOut",
	scrub: true,
	snap: true,

});




var tl_5_2 = gsap.timeline();
	tl_5_2.to(".img_title_5_scroll .mob_img em.two", { opacity: .5, duration:.3, transform: "scale(1.2)"});
	tl_5_2.to(".img_title_5_scroll .mob_img em.two", { opacity: .3, duration:.3, transform: "scale(0.5)"});
	tl_5_2.to(".img_title_5_scroll .mob_img em.two", { opacity: 0, duration:.3, transform: "scale(1)"});
	tl_5_2.to(".img_title_5_scroll .mob_img_1", { opacity: 1, delay: -.2});
	tl_5_2.to(".img_title_5_scroll .mob_btm_1", { opacity: 1, delay: -.2});


ScrollTrigger.create({
	trigger: ".img_title_5_scroll .ext_2",
	animation: tl_5_2,
	start: "top top",
	ease: "power3.inOut",
	scrub: true,
	snap: true,

});

var tl_5_3 = gsap.timeline();
	tl_5_3.to(".img_title_5_scroll .mob_img em.three", { opacity: .5, duration:.3, transform: "scale(1.2)"});
	tl_5_3.to(".img_title_5_scroll .mob_img em.three", { opacity: .3, duration:.3, transform: "scale(0.5)"});
	tl_5_3.to(".img_title_5_scroll .mob_img em.three", { opacity: 0, duration:.3, transform: "scale(1)"});
	tl_5_3.to(".img_title_5_scroll .mob_btm_1", { opacity: 0, delay: -.2});




ScrollTrigger.create({
	trigger: ".img_title_5_scroll .ext_3",
	animation: tl_5_3,
	start: "top top",
	ease: "power3.inOut",
	scrub: true,
	snap: true,

});

var tl_5_4 = gsap.timeline();
	tl_5_4.to(".img_title_5_scroll .mob_img.mob_img_1", { backgroundPosition: "0% 100%", duration:2,});

	
ScrollTrigger.create({
	trigger: ".img_title_5_scroll .ext_4",
	pinSpacing: false,
	animation: tl_5_4,
	start: "top top",
	toggleAction: "restart none none none",
	scrub: .2,

});





$(document).ready(function(){
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

	var pd_btm  = $("#img_title_1 .img_title_div > .pd_tp_bm_300").outerHeight() - $("#img_title_1 .img_title_div > .pd_tp_bm_300").height();
	var top_height = $("#gnb").outerHeight() + $("#main").outerHeight() + $("#target").outerHeight() - ( pd_btm / 2 );
	var top_height_2 = top_height + $("#img_title_1").outerHeight();
	
	$(window).resize(function(){
		pd_btm  = $("#img_title_1 .img_title_div > .pd_tp_bm_300").outerHeight() - $("#img_title_1 .img_title_div > .pd_tp_bm_300").height();
		top_height = $("#gnb").outerHeight() + $("#main").outerHeight() + $("#target").outerHeight() - ( pd_btm / 2 );
		top_height_2 = top_height + $("#img_title_1").outerHeight();
	});

	
	$(window).scroll(function(){

		
		if ($(this).scrollTop() > top_height) {
			
			$("#menu_tab").addClass("show_now");
	
		}  else {
			$("#menu_tab").removeClass("show_now");
		}
	

	
	
	
	});	
		
});



$(window).on("load", function() {

		
		// lazy loading for background images
		$(".lazy_img").removeClass("lazy_css");


});
