gsap.to("header", {
  backgroundColor: 'white',
  duration: 0.5,
  scrollTrigger: {
      trigger: "header",
      scroller: "body",
      start: "top top", // This specifies the trigger's top aligned with the scroller's top
      scrub: true,
      marker: true
  }
});
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true, // Enable continuous loop
    loopedSlides: 4, // Number of slides to loop
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


// review-carousal
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplay:1000,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
