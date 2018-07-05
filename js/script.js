$(document).ready(function(){

	var winWidth = $(window).width();
	var winHeight = $(window).height();
	var checkWidth = "960";

	

	//  main rolling banner
	function main_banner(){
		var main_bx = $('.main_bx').bxSlider({
			pager: true,
			controls:false
		});
	}
	main_banner();


    var noti_bx = {
		mode: 'vertical',
		auto: true,
		pager: false,
		controls:false
	}
	var why_bx = {
		pager: false,
		infiniteLoop:false,
		hideControlOnEnd:true,
		controls:true
	}
	var exper_bx = {
		slideMargin:10,
		minSlides: 2,
		infiniteLoop:false,
		controls:false
	}
	function start_roll(){
		m_noti = $('.bullet01').bxSlider(noti_bx);
		m_why = $('.bx_why').bxSlider(why_bx);
		m_exper = $('.bx_exper').bxSlider(exper_bx);
	}
	//모바일 슬라드 롤링
    if( winWidth>checkWidth ){
		console.log("피시");
	} else {
			start_roll();
			console.log("모바일");
	}

	$(window).resize(function() {
		winWidth = $(window).width();
		if( winWidth>checkWidth ){
			var hasMain = $('body').hasClass('main');
			if( hasMain ){
			location.reload();
			} else {
				console.log("no main");
			}
		} else {
			var hasMain = $('body').hasClass('main');
			if( hasMain ){
				start_roll();
				//main_bx.reloadSlider();
				location.reload();
			}
		}
	});
	
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
	var chk_exper = $('.contents').hasClass('exper');
	var chk_stay = $('.contents').hasClass('stay');

		if (chk_exper)
		{
			FixedTab();
		}
		if (chk_stay)
		{
			FixedTab();
		}
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
	
	//2018-06-25
	$('.btn_box .next.time').click(function(){
		 var p_pop = $('.popup');
		 	if (p_pop.outerHeight() < $(document).height() ) p_pop.css('margin-top', '-'+p_pop.outerHeight()/2+'px');
			else temp.css('top', '0px');
			if (p_pop.outerWidth() < $(document).width() ) p_pop.css('margin-left', '-'+p_pop.outerWidth()/2+'px');
			else p_pop.css('left', '0px');
		$('.popup').fadeIn(200);
		$('#maskPC').fadeIn(200);
	});


	/* 체험학습 교재 */
	function showList(){
	
	}
	$('.dl_button').click(function(){
		$(this).toggleClass('on');
		$(this).next().toggleClass('on');
	});
	$('.total_btn .close_work a').click(function(){
		$('.total_btn').removeClass('on');
	});
	/* [s] 탭메뉴*/
	$('.tab_box').on('click', '.menu a', function(e){
		var $parent = $(this).parent();
		var _index = $parent.index();
		var $cont = $('.section').find('.tab_cont > div').eq(_index);
		e.preventDefault();
		$parent.add($cont).addClass('active').siblings().removeClass('active');
	}).find('.menu a').eq(0).trigger('click');
	var n= (new Date()).getMonth();
	$('.tab_box.month').on('click', '.menu a', function(e){
		var $parent = $(this).parent();
		var _index = $parent.index();
		var $cont = $('.section').find('.tab_cont > div').eq(_index);
		e.preventDefault();
		$parent.add($cont).addClass('active').siblings().removeClass('active');
	}).find('.menu a').eq(n).trigger('click');
	/* [e] 탭메뉴*/
	

	//mainVisual
    $(".location>li").click(function(){
        clearTimeout(rolling);
        $index = $(this).index();
        banner_view($index);
		banner_start();//카운트 다시 시작(기억x)
        return false;
    });

	function banner_view(n){    
		$(".slideBox>li").eq(n).fadeIn().siblings().hide();
		$(".location>li").eq(n).addClass("active").siblings().removeClass("active");
	}
	var m =$('.main').length;
	

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
	//top scroll
	$('.btnTop a').click(function(ev){
		ev.preventDefault();
		var targetHash = $(this).attr('href'),
			$targetObj = $(targetHash),
			scroll_to = $targetObj.offset().top -100

		$('html, body').stop(true,false).animate({scrollTop: scroll_to},700, 'easeInOutQuart', function(){ });
	});

	$('.exper_navi li a').click(function (ev) {
		ev.preventDefault();
		var targetHash = $(this).attr('href'),
		$targetObj = $(targetHash),
		scroll_to = $targetObj.offset().top 
		if( winWidth>checkWidth ){
			$('html, body').stop(true,false).animate({scrollTop: scroll_to - 70},700, 'easeInOutQuart', function(){  });
		} else {
			//mobile
			$('html, body').stop(true,false).animate({scrollTop: scroll_to - 120},700, 'easeInOutQuart', function(){  });
		}
		
	});
	//scroll
    $(window).scroll(function(e){
		var chk_exper = $('.contents').hasClass('exper');
		var chk_stay = $('.contents').hasClass('stay');

		if (chk_exper)
		{
			var nowPos = $(window).scrollTop();
			var fixedTab = $('.exper_navi').offset();
			var ctrl_sec01 =  $('#job_exper').offset().top;
			var ctrl_sec02 =  $('#safe_exper').offset().top;
			var ctrl_sec03 =  $('#emotion_exper').offset().top;
			var ctrl_sec04 =  $('#history_exper').offset().top;
			
			$('.exper_navi li').removeClass("on");
			if( nowPos >= ctrl_sec01  && nowPos <= ctrl_sec02 - 105) {
				$('.exper_navi li').eq(0).addClass("on");
			} else if ( nowPos >= ctrl_sec02 - 100  && nowPos <= ctrl_sec03 - 200) {
				$('.exper_navi li').eq(1).addClass("on");
			} else if ( (nowPos >= ctrl_sec03 - 120)  && nowPos <= ctrl_sec04 -130 ) {
				$('.exper_navi li').eq(2).addClass("on");
			} else if ( nowPos >= ctrl_sec04 - 120)  {
				$('.exper_navi li').eq(3).addClass("on");
			};
			$('.exper_navi li a').click(function (ev) {
				ev.preventDefault();
				var targetHash = $(this).attr('href'),
				$targetObj = $(targetHash),
				scroll_to = $targetObj.offset().top 
				if( winWidth>checkWidth ){
					$('html, body').stop(true,false).animate({scrollTop: scroll_to - 40},700, 'easeInOutQuart', function(){  });
				} else {
					//mobile
					$('html, body').stop(true,false).animate({scrollTop: scroll_to - 120},700, 'easeInOutQuart', function(){  });
				}
				
			});
		} 
	});
	
});