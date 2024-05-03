var button = document.querySelector(".req-btn");
button.addEventListener("click",function(){
  alert("clicked")
})
var header = document.querySelector("header");
window.addEventListener('scroll',function(event){
  // console.log(this.window.pageYOffset)
  if(this.window.pageYOffset >=400){
    header.style.background = "white";
    header.style.padding = "1em 2em";
    // header.style.transform = "translateY(-100%)";
  }
  else{
    header.style.background ="linear-gradient(110deg, #f3f2ff 12.17%, #e8fffe 62.49%, #f5f6ff 103.31%)";
    header.style.padding = "1.5em 2em";
    // header.style.transform = "translateY(0)"
  }

})

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// GSAP animation
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function() {
    // Select all elements with class 'animate-me'
    const paragraphs = document.querySelectorAll('.animate-me');

    // Loop through each paragraph
    paragraphs.forEach((paragraph) => {
        // Set initial position
        gsap.set(paragraph, { y: 30 });

        // GSAP animation using ScrollTrigger
        ScrollTrigger.create({
            trigger: paragraph,
            start: "top 80%", // Adjust as needed
            end: "bottom 20%", // Adjust as needed
            onEnter: () => gsap.to(paragraph, { y: 0, opacity: 1, duration: 0.5 }),
            onLeaveBack: () => gsap.to(paragraph, { y: 30, opacity: 0, duration: 0.5 }),
            onEnterBack: () => gsap.to(paragraph, { y: 0, opacity: 1, duration: 0.5 }),
            onLeave: () => gsap.to(paragraph, { y: 30, opacity: 0, duration: 0.5 })
        });
    });

    // Select all elements with class 'heading'
    const headings = document.querySelectorAll('.heading');

    // Loop through each heading
    headings.forEach((heading) => {
        // Set initial position
        gsap.set(heading, { x: "-100%", opacity: 0 });

        // GSAP animation using ScrollTrigger
        ScrollTrigger.create({
            trigger: heading,
            start: "top 80%", // Adjust as needed
            end: "bottom 20%", // Adjust as needed
            onEnter: () => gsap.to(heading, { x: "0%", opacity: 1, duration: 0.5 }),
            onLeaveBack: () => gsap.to(heading, { x: "-100%", opacity: 0, duration: 0.5 }),
            onEnterBack: () => gsap.to(heading, { x: "0%", opacity: 1, duration: 0.5 }),
            onLeave: () => gsap.to(heading, { x: "-100%", opacity: 0, duration: 0.5 })
        });
    });
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
