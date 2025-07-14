(function ($) {
	"user strict";
	$(document).ready(function () {
		// wow init
		new WOW().init();

		// faq
		$(".faq-question").on("click", function () {
			if ($(this).closest(".faq-item").hasClass("active")) {
				$(this).closest(".faq-item").removeClass("active");
				$(this).next(".faq-answer").slideUp();
			} else {
				$(this)
					.closest(".faq-item")
					.siblings(".faq-item")
					.removeClass("active");
				$(this)
					.closest(".faq-item")
					.siblings()
					.find(".faq-answer")
					.slideUp();
				$(this).closest(".faq-item").addClass("active");
				$(this).closest(".faq-item").find(".faq-answer").slideDown();
			}
		});
		//swiper
		const swiper = new Swiper(".swiper", {
			loop: true,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
			centeredSlides: true,
			breakpoints: {
				320: {
					slidesPerView: 1.4,
					spaceBetween: 16,
				},
				640: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				1024: {
					slidesPerView: 2.5,
					spaceBetween: 24,
				},
				1200: {
					slidesPerView: 3,
					spaceBetween: 24,
				},
				1441: {
					slidesPerView: 4,
					spaceBetween: 24,
				},
			},
		});
	});
})(jQuery);

// marquee
$(function () {
	$(".marquee").marquee({
		duration: 45000,
		gap: 0,
		direction: "left",
		duplicated: true,
		startVisible: true,
		pauseOnHover: true,
	});

	$(".marquee-right").marquee({
		duration: 45000,
		gap: 0,
		direction: "right",
		duplicated: true,
		startVisible: true,
		pauseOnHover: true,
	});
});
