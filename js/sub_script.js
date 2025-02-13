$(document).ready(function(){
	$('body, html').scrollTop(0);

	$("html").addClass("change");

	// Close menu by pressing the ESC key.
	$(document).keyup(function (e) {
	  if ($('html').hasClass('open') && e.keyCode === 27) { // ESC
	    $("html").removeClass("open");
	  }
	});


	$('.burger a').click(function(){
		$("html").toggleClass("open");

		return false;
	});
	$("#menu_div").click(function(){
		$("html").removeClass("open");

	});

	var getPdBtm = $(".quick_div.pd_btm_160").outerHeight() - $(".quick_div.pd_btm_160").height();
	var getPdBtm_2 = getPdBtm * 2;
	var getHeights = $("#main").outerHeight() - getPdBtm_2;
	
	$(window).resize(function(){ 
		getPdBtm = $(".quick_div.pd_btm_160").outerHeight() - $(".quick_div.pd_btm_160").height();
		getPdBtm_2 = getPdBtm * 2;
		getHeights = $("#main").outerHeight() - getPdBtm_2;
	});

	$(function(){
		$(window).scroll(function(){
			if ($(this).scrollTop() > getHeights) {
				
				$(".target_ul").addClass("chart_ani");

				if ($(".target_ul").hasClass("after")) {

				} else {

					setTimeout(function(){

						$(".target_ul").addClass("after");
						
					}, 4000);
				}
			} else if ($(this).scrollTop() < getHeights) {
				
				$(".target_ul").removeClass("after");
				$(".target_ul").removeClass("chart_ani");

				
			} else {
				
				$(".target_ul").removeClass("chart_ani");
				$(".target_ul").removeClass("after");
			}
		});
	});

	$(window).scroll(function(){
		
		if ($(window).scrollTop() >= 30) {
			$("body").addClass("slide");
			$(".top_btn").addClass("add_top");
			$("html").removeClass("change");
		} else {
			$("body").removeClass("slide");
			$(".top_btn").removeClass("add_top");
			$("html").addClass("change");

		}

	});

});

