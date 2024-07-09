// Fade-In.js

timeline = gsap.timeline();

timeline.fromTo(
  ".main-section .hero .text",
  { y: "50px", opacity: 0 },
  { y: "0px", opacity: 1, stagger: 2, duration: 2 },
  "+=1"
);

timeline.to(".main-section .hero .text", { opacity: 0, stagger: 0.5, duration: 1 }, "+=5");

// Fade In B
//    .fromTo(
//      ".hero-text-2",
//      { y: "50px", opacity: 0 },
//      { y: "0px", opacity: 1, stagger: 1, duration: 1 },
//      "+=1"
//    );
//
// No-Repeat
//    timeline.eventCallback("onComplete", function() {
//    timeline.pause();
//    });


