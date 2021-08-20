var tl = gsap.timeline();

tl.from('.navbar-brand', {duration: 2, opacity:0, x: 20, ease: 'elastic(1.4, 0.3)'})
.from('.first-anim', {duration: 1.4 , opacity: 0, y:-80, stagger: 0.6 }, "-= 0.2")
  .from('.timeline-image', {duration: 2, opacity: 0, delay: 1.2, y: 100, ease: 'bounce'}, "-= 1.9")
  .from('.skill-cont', { duration: 1, opacity: 0, y: 50, x: 50, stagger: 0.5}, )
  .from('.mt-4 .padding', {duration: 1.4, opacity: 0, x: -100, stagger: .6}, "-=1.1")
    