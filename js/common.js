// 图片预加载及进度条
window.addEventListener('DOMContentLoaded', function() {
    "use strict";
    var ql = new QueryLoader2(document.querySelector("body"), {
        barColor: "#666",
        backgroundColor: "#eee",
        percentage: true,
        barHeight: 10,
        minimumTime: 100,
        fadeOutTime: 100
    });
});




$(document).ready(function(){
	
	var windW = $(document).width();
	var windH = $(document).height();


	$("#wrapper, .sldArea, .slider, .slider li, .screen, .shot, .shot li, .fakebg, #intro").height(windH);

	if (windW > windH){
		$(".nebula").height(windW).css("marginTop",-windW/2).css("marginLeft",-windW/2);
	} else{
		$(".nebula").height(windH).width(windH).css("marginTop",-windH/2).css("marginLeft",-windH/2);
	}



	$('.screen .shot').bxSlider({
		preloadImages: 'all',
		auto: true,
		speed: 1000,
		pause: 5000,
		mode: 'fade',
		controls: false,
		pager: false
	});

	$('.serif .line').bxSlider({
		auto: true,
		speed: 1000,
		pause: 5000,
		mode: 'fade',
		controls: false,
		pager: false
	});

	$('.sldArea .slider').bxSlider({
		auto: false,
		mode: 'fade',
		pagerCustom: '.location',
		controls: false
	});



	$(".location a").click(function(){
    	var cl = $(this).attr('href');
    	$("#form").attr('action', cl);
    	//$('#form')[0].reset();
    })



	$("#submit").click(function(){
		if ($('#txt1').val() != "" && $('#txt2').val() != ""){
			var loc = $(".location input:checked").val();
			$("#form").attr("action",loc);
			}else{
				alert('请不要留空');
			return false;
			}
	});

	var nick1 = jQuery.url.param("n1");
	var nick2 = jQuery.url.param("n2");
	var gender1 = jQuery.url.param("p1");
	var gender2 = jQuery.url.param("p2");
	$(".name1").html(nick1);
	$(".name2").html(nick2);
	$(".p1").html(gender1);
	$(".p2").html(gender2);
	$("title").html(nick1 + "对" + nick2 + "使用了传说中的海誓山盟 | 剑网三")


	setTimeout(function(){
		$(".fakebg").fadeOut(3000);
		$("#🌹").fadeIn(3000);
	}, 1000);
	
	setTimeout(function(){
		$(".rr01,.rw03,.rw07,.rr05,.rw10,.rr10,.rw11").addClass("fadeIn");
	}, 1000);

	setTimeout(function(){
		$(".rw01,.rr03,.rr06,.rw08,.rr09,.rr12,.rr14,.rw13").addClass("fadeIn");
	}, 2000);

	setTimeout(function(){
		$(".rr02,.rw04,.rr04,.rw06,.rr07,.rw14,.rr13,.rr16").addClass("fadeIn");
	}, 3000);

	setTimeout(function(){
		$(".rw02,.rw05,.rw09,.rr08,.rr11,.rw12,.rr15").addClass("fadeIn");
	}, 4000);


	



	
	// 音乐播放开关设定
	$(".music-trigger").click(function(document){
		if($(this).hasClass("play")){
			$('#stop-btn').click();
			$(this).removeClass("play").addClass("stop");
		} else{
			$('#play-btn').click();
			$(this).removeClass("stop").addClass("play");
		}
	});
	
	
	
});






