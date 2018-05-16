$(document).ready(function(){

	var winWidth = $(window).width();
	var winHeight = $(window).height();
	var checkWidth = "960";

	//resize
	$(window).resize(function(){
		winWidth = $(window).width();
		if( winWidth>checkWidth ){
			//box_roll();
		} else {
			
		}
	});

	//  main rolling banner
	$('.main_bx').bxSlider({
			pager: true,
			controls:false
		});
	// menuBox inner rolling 
	/*function box_roll(){
		$('.menuBox .slide_box').bxSlider({
			mode : 'fade',
			speed: 1000,
			auto: true,
			autoStart: true,
			pager: true,
			controls:false
		});
		$('.menuBox .pro_list').bxSlider({
			mode : 'fade',
			speed: 1000,
			auto: true,
			autoStart: true,
			pager: true,
			controls:false
		});
	}
	box_roll();*/

	if( winWidth>checkWidth ){
		} else {
			$('.bullet01').bxSlider({
				mode: 'vertical',
				auto: true,
				pager: false,
				controls:false
			});

			$('.bx_why').bxSlider({
				pager: false,
				controls:true
			});

			$('.bx_exper').bxSlider({
				slideMargin:10,
				minSlides: 2,
				infiniteLoop:false,
				controls:true,
				pager: false
			});
		}
	//autocomplete
	$( function() {
		var availableTags = [
		  "ActionScript",
		  "AppleScript",
		  "Asp",
		  "BASIC",
		  "C",
		  "C++",
		  "Clojure",
		  "COBOL",
		  "ColdFusion",
		  "Erlang",
		  "Fortran",
		  "Groovy",
		  "Haskell",
		  "Java",
		  "JavaScript",
		  "Lisp",
		  "Perl",
		  "PHP",
		  "Python",
		  "Ruby",
		  "Scala",
		  "Scheme"
		];
		$( "#tag_name" ).autocomplete({
		  source: availableTags
		});
	  } );
	//location
	$('#wrapCont .status .depth .now').click(function(e){
		e.preventDefault();

		var showBox = $(this).parent();
		var num = $(showBox).find('li').length;
		var boxHeight = (51*num);
		var hasActive = $(showBox).hasClass('active');
		if( hasActive==false ){
			$('#wrapCont  .status .depth ul').css({'height':'41px'}).removeClass('active');
			$(showBox).animate({'height':boxHeight+'px'}, 150).addClass('active');
		} else {
			$(showBox).animate({'height':'41px'}, 75).removeClass('active');
		}
	});

	//예약내역 toggle
	r_list();
	$(".toggle_menu dd").hide();
	$(".toggle_menu dd").hide();
	$(".toggle_menu dt").eq(0).addClass("on");
	$(".toggle_menu dd").eq(0).show();
	function r_list(){
		$(".toggle_menu dt").click(function(){
            if (!$(this).hasClass("on")) {
                $(".toggle_menu dt").removeClass("on");
                $(".toggle_menu dd").hide();
                $(this).addClass("on");
                $(this).next().slideDown();
            } else {
                $(this).removeClass("on");
                $(this).next().slideUp();
            }
		});
	}
	//datepicker
	$(function() {
		$("#datepicker").datepicker({
			dateFormat: "yy/mm/dd",
			monthNames: ['1 월','2 월','3 월','4 월','5 월','6 월','7 월','8 월','9 월','10 월','11 월','12 월'],
			dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],  
		});
	 });

	 $('.exper_box .agree_text').click(function(){
		$('.popup').fadeIn(200);
		$('#maskPC').fadeIn(200);
	});
	$('.btn_close a').click(function(){
		$('.popup').fadeOut(200);
		$('#maskPC').fadeOut(200);
	});
	

	//totalMenu
	$('#wrapTop .btnMenu').click(function(){
		if( winWidth>checkWidth ){
		} else {
			//mobile
			var hasActive = $('#totalMenu').hasClass('active');
			if( hasActive==false ){
				$('#topSearch').hide().removeClass('active');
				$('#totalMenu').show().addClass('active');
				$('#maskMobile').fadeIn(200);
				$('#wrapTop .utilityBox').stop().animate({'right':'0%'}, 150, 'easeOutCirc');
			} else {
				$('#maskMobile').fadeOut(200);
				$('#wrapTop .utilityBox').stop().animate({'right':'-700px'}, 1500, 'easeOutCirc');
				setTimeout(function(){
					$('#totalMenu').hide().removeClass('active');
				}, 150);
			}
		}
	});

	//셀렉트 박스 디자인 입힌거 
	var select = $("select.select");
	select.change(function(){
		var select_name = $(this).children("option:selected").text();
		$(this).siblings("label").text(select_name);
	});

	//menu
	$('.menuBox li a').hover(function(){
		$(this).parent().siblings().find('.depth2').hide();
		$(this).parent().find('.depth2').show();
	});
	$('.menuBox li .depth2').mouseleave(function(){
		$('.menuBox li .depth2').slideUp('fast');
	});
	//mobileMask
	$('#maskMobile').click(function(){
		$('#maskMobile').fadeOut(200);
		$('#wrapTop .utilityBox').stop().animate({'right':'-700px'}, 1500, 'easeOutCirc');
		setTimeout(function(){
			$('#totalMenu').hide().removeClass('active');
			$('#topSearch').hide().removeClass('active');
		}, 150);
	});
	
	/* 탭 상단 고정 */
	function FixedTab() {
		var fixedTab = $('.exper_navi').offset();
		$( window ).scroll( function() {
		  if ( $( document ).scrollTop() > fixedTab.top) {
			$('.exper_navi').addClass("fix");
			$('#job_exper').css("margin-top","150px;")
		  }
		  else {
			$('.exper_navi').removeClass("fix");
		  } 

		});
		
	}
	 FixedTab() ;
	//mainVisual
    $(".location>li").click(function(){
        clearTimeout(rolling);
        $index = $(this).index();
        banner_view($index);
		banner_start();//카운트 다시 시작(기억x)
        return false;
    });
    cnt=0;//호출횟수, 값이 누적되어야하는 변수
    banner_start();
	function banner_start(){
		rolling =setInterval(function (){
		cnt++;banner_view(cnt%3);},4000);
		//인덱스 갯수로 기입

	}
	function banner_view(n){    
		$(".slideBox>li").eq(n).fadeIn().siblings().hide();
		$(".location>li").eq(n).addClass("active").siblings().removeClass("active");
	}
	var m =$('.main').length;

	//mainVisual
    $(".location>li").click(function(){
        clearTimeout(rolling);
        $index = $(this).index();
        banner_view($index);
		banner_start();//카운트 다시 시작(기억x)
        return false;
    });
    cnt=0;//호출횟수, 값이 누적되어야하는 변수
    banner_start();
	function banner_start(){
		$(".slideBox>li").hide();
		$(".slideBox>li.visual1").show();
		rolling =setInterval(function (){
		cnt++;banner_view(cnt%3);},3000);
		//인덱스 갯수로 기입

	}
	function banner_view(n){
		$(".slideBox>li").eq(n).fadeIn(1000).siblings().fadeOut(1000);
		$(".location>li").eq(n).delay(100).addClass("active").siblings().removeClass("active");
	}

	//product rolling 
	if ($('body').hasClass('main'))
	{
		$('.products .prd_list').bxSlider({
			mode : 'fade',
			speed: 1000,
			auto: true,
			autoStart: true,
			pager: false
		});
		$('.people .doc_list').bxSlider({
			mode : 'fade',
			speed: 1000,
			auto: true,
			autoStart: true,
			pager: false
		});
		//scroll indicator
		$(function(){
			var pageInner = $('#wrapTop').offset().top;
			var pageInner2 = $('.contBox1').offset().top;
			var pageInner3 = $('.contBox2').offset().top;
			var pageInner4 = $('.contBox3').offset().top;
			

			$(window).scroll(function(){
				var _scTop = $(window).scrollTop();
				$('.scroll_navi li').removeClass("on");
				if( _scTop >= pageInner - 20 && _scTop <= pageInner2 - 600) {
					$('.scroll_navi li.nav_01').addClass("on");
				} else if ( _scTop >= pageInner2 - 600 && _scTop <= pageInner3- 160) {
					$('.scroll_navi li.nav_01').addClass("on");
				} else if ( (_scTop >= pageInner3 - 160)  && _scTop <= pageInner4-400) {
					$('.scroll_navi li.nav_02').addClass("on");
				} else if ( _scTop >= pageInner4 - 400)  {
					$('.scroll_navi li.nav_03').addClass("on");
				};
			});
			 $('.scroll_navi li a').click(function (e) {
				e.preventDefault();
				var idx = $(this).data("idx");
				var $target = $(".cont").eq(idx -1);
				var $move = $target.offset().top;
				$("html, body").stop(false).animate({ scrollTop: $move - 80}, 400);
			});
		});
	} else {
		console.log("slider_none");
	}
	
	//pipeline_tooltip
	$('.pipe .pipe_grid .detail_list li').click(function(){
		$('.pipe .pipe_grid .detail_list li').removeClass('choice');
		$(this).addClass('choice');
	});
	
	//product_list hover effect
	function over_eft(){
		$(this).parent().toggleClass('over');
	}
	$('.result_list .over_area').hover(over_eft);
	// btn_top
	var globalTopBtnScrollFunc = function() {
		var $btnTop = $('.btnTop');

		$(window).scroll(function() {
			try {
				var iCurScrollPos = $(this).scrollTop();

				if (iCurScrollPos > ($(this).height() / 2)) {
					$btnTop.fadeIn('fast');
				} else {
					$btnTop.fadeOut('fast');
				}
			} catch(e) { }
		});
    	};
	globalTopBtnScrollFunc();

	//main motion
	if ( $('.contBox1').length>0 ){
		$('.contBox1 h2').css({"right":"-200px", "opacity":"0"});
		$('.contBox1 .rndOur').css({"top":"200px", "opacity":"0"});
		$('.contBox1 .box1, .contBox1 .box2').css({"margin-top":"590px","opacity":"0"});
		$('.contBox1 .products').css({"margin-top":"113px", "opacity":"0"});
		
		$('.contBox2 h2').css({"opacity":"0"});
		$('.contBox2 .stock').css({"left":"-20%", "opacity":"0"});
		$('.contBox2 .info1').css({"top":"140px", "opacity":"0"});
		$('.contBox2 .info2').css({"top":"150px", "opacity":"0"});
		$('.contBox2 .about').css({"opacity":"0"});
		$('.contBox2 .cont1,.contBox2 .cont2,.contBox2 .cont3').css({"height":"0", "opacity":"0"});

		$('.contBox3 h2').css({"opacity":"0"});
		$('.contBox3 .people, .contBox3 .news, .contBox3 .glance').css({"margin-top":"200px", "opacity":"0"});
		

		mainMotionStart();
	}
	function mainMotionStart(){		
		$('.contBox1 h2').animate({"right":"0", "opacity":"1"}, 750, 'easeOutCubic');
		$('.contBox1 .rndOur').delay(150).animate({"top":"0", "opacity":"1"}, 750, 'easeOutCubic');
		$('.contBox1 .box1').delay(300).animate({"margin-top":"20px", "opacity":"1"}, 750, 'easeOutCubic');
		$('.contBox1 .box2').delay(350).animate({"margin-top":"20px", "opacity":"1"}, 750, 'easeOutCubic');
		$('.contBox1 .products').delay(350).animate({"margin-top":"-127px", "opacity":"1"}, 750, 'easeOutCubic');
	}
	/* [s] 탭메뉴*/
	$('.year_tap').on('click', '.menu a', function(e){
		var $parent = $(this).parent();
		var _index = $parent.index();
		var $cont = $('.content').find('.history > div').eq(_index);
		e.preventDefault();

		$parent.add($cont).addClass('active').siblings().removeClass('active');
		$('.menu li.active').prev().addClass('no');
	}).find('.menu a').eq(0).trigger('click');
	/* [e] 탭메뉴*/
	$('.tab_menu').on('click', '.menu a', function(e){
		var $parent = $(this).parent();
		var _index = $parent.index();
		var $cont = $('.content').find('.tap_cont > div').eq(_index);
		e.preventDefault();

		$parent.add($cont).addClass('on').siblings().removeClass('on');
		$('.menu li.active').prev().addClass('no');
	}).find('.menu a').eq(0).trigger('click');

	//scroll
    $(window).scroll(function(e){
		var nowPos = $(window).scrollTop();
		var fixedTab = $('.exper_navi').offset();
		
		if( winWidth>checkWidth ){
			if( nowPos<=250 ){
				//$('#wrapTop').stop().animate({'top':'0'}, 150, 'easeOutCirc');
			} else {
				//$('#wrapTop').stop().animate({'top':'-36px'}, 150, 'easeOutCirc');
			}
			//main contentAnimation
			var pos1 = 0;
			var pos2 = 800;
			var pos3 = 1400;
			if( nowPos>=pos1 ){

			}
			if( nowPos>=pos2 ){
				
			}
			if( nowPos>=pos3 ){
				
			}

		} else {
			

		}
	});
});