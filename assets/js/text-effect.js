// fade-in.js

// Initialize GSAP timeline
const timeline = gsap.timeline();

// Define initial text set
const textSetA = gsap.utils.toArray(".A");

// Define second text set
const textSetB = gsap.utils.toArray(".B");

// Function to generate random duration between min and max seconds
function randomDuration(min, max) {
  return gsap.utils.random(min, max, 0.1);
}

// Function to generate random stagger for animation
function randomStagger(min, max) {
  return gsap.utils.random(min, max, 0.1);
}

// Function to fade in text from set A
function fadeInTextSetA() {
  return timeline.staggerFromTo(
    textSetA,
    randomDuration(1, 3),
    { y: "50px", opacity: 0 },
    { y: "0px", opacity: 1, stagger: { each: randomStagger(0.1, 0.5) }, onComplete: fadeOutTextSetA }
  );
}

// Function to fade out text from set A
function fadeOutTextSetA() {
  return timeline.to(
    textSetA,
    { opacity: 0, stagger: { each: randomStagger(1, 3) }, duration: randomDuration(1, 3) }
  );
}

// Function to fade in text from set B
function fadeInTextSetB() {
    return timeline.staggerFromTo(
      textSetB,
      randomDuration(1, 3),
      { y: "50px", opacity: 0 },
      { y: "0px", opacity: 1, stagger: { each: randomStagger(0.1, 0.5) }, onComplete: fadeOutTextSetA }
    );
}

// Function to fade out text from set B
function fadeOutTextSetA() {
    return timeline.to(
      textSetB,
      { opacity: 0, stagger: { each: randomStagger(1, 3) }, duration: randomDuration(1, 3) }
    );
  }
  


// Initial animation sequence
timeline.add(fadeInTextSetA());
timeline.add(fadeOutTextSetA(), "+=5");
timeline.add(fadeInTextSetB(), "+=1");
