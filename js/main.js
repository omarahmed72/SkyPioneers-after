const swiper = new Swiper(".compoundsSwiper", {
  //   loop: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  parallax: true,
  pagination: {
    el: ".compoundsSwiper .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".compoundsSwiper .swiper-button-next",
    prevEl: ".compoundsSwiper .swiper-button-prev",
  },
  //   on: {
  //     slideChange: function () {
  //         const parallaxBg = document.querySelector('.parallax-bg');
  //         const currentIndex = this.activeIndex;
  //         parallaxBg.style.transform = `translateX(${-20 *currentIndex}%)`;
  //     },
  //   },
});

var developersSwiper = new Swiper(".developersSwiper", {
  slidesPerView: 2,
  spaceBetween: 15,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  speed: 600 /* سرعة السويب */,
  grabCursor: true /* شكل اليد عند السحب */,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: { slidesPerView: 3, spaceBetween: 15 },
    1024: { slidesPerView: 4, spaceBetween: 20 },
    /* ✅ هنا السر: في الشاشات الكبيرة اعرض 5 كروت، سيصغر حجم الكارت تلقائياً */
    1280: { slidesPerView: 5, spaceBetween: 20 },
  },
});

//___________________________________________________________________________________________________

// --- 1. Hero Swiper ---
var heroSwiper = new Swiper(".hero-swiper", {
  loop: true, // التكرار اللانهائي
  effect: "fade", // تأثير الاختفاء والظهور بدلاً من السحب
  autoplay: {
    delay: 5000, // يقلب تلقائياً كل 5 ثواني
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//___________________________________________________________________________________________________

// --- 2. Categories Swiper ---
var catSwiper = new Swiper(".cat-swiper", {
  slidesPerView: 1, // شريحة واحدة في الموبايل
  spaceBetween: 20, // مسافة بين الشرائح
  breakpoints: {
    640: { slidesPerView: 2 }, // تابلت: شريحتين
    1024: { slidesPerView: 3 }, // ديسكتوب: 3 شرائح
  },
  navigation: {
    nextEl: ".cat-next", // ربطنا الأزرار اللي عملناها فوق
    prevEl: ".cat-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
