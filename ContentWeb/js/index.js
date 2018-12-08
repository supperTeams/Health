$(function() {
	var indexbanner = new Swiper('#indexbanner', {
		loop: true, // 循环模式选项

		// 如果需要分页器
		pagination: {
			el: '.swiper-pagination',
		},

		// 如果需要前进后退按钮
		navigation: {
			nextEl: '.swiper-button-next.b',
			prevEl: '.swiper-button-prev.a',
		},
	});
	var honorbanner = new Swiper('#honorbanner', {
		loop: true, // 循环模式选项
		slidesPerView : 2,
		// 如果需要前进后退按钮
		navigation: {
			nextEl: '.swiper-button-next.d',
			prevEl: '.swiper-button-prev.c',
		},
	});
	var casebanner = new Swiper('#casebanner', {
		loop: true, // 循环模式选项
		slidesPerView : 4,
		// 如果需要前进后退按钮
		navigation: {
			nextEl: '.swiper-button-next.f',
			prevEl: '.swiper-button-prev.e',
		},
	});
	$('.btnBottom').click(function(){$('body,html').animate({scrollTop:$('#pagetop').offset().top-234},300);});
	
})