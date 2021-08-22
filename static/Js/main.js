var tl = gsap.timeline();

tl.from('.navbar-brand', {duration: 2, opacity:0, x: 20, ease: 'elastic(1.4, 0.3)'})
.from('.first-anim', {duration: 1.4 , opacity: 0, y:-80, stagger: 0.6 }, "-= 0.2")
  .from('.timeline-image', {duration: 2, opacity: 0, delay: 1.2, y: 100, ease: 'bounce'}, "-= 1.9")
  .from('.skill-cont', { duration: 1, opacity: 0, y: 50, x: 50, stagger: 0.5}, )
  .from('.mt-4 .padding', {duration: 1.4, opacity: 0, x: -100, stagger: .6}, "-=1.1");
    
  // const Portfolio = (function () {
  //   function makeWords() {
  //     var words = [
  //       {
  //         text: "css3",
  //         weight: 13,
  //       },
  //       {
  //         text: "Git && Github",
  //         weight: 12,
  //       },
  //       {
  //         text: "bootstrap",
  //         weight: 12,
  //       },
  //       {
  //         text: "javascript",
  //         weight: 13,
  //       },
  //       {
  //         text: "python",
  //         weight: 11,
  //       },
  //       {
  //         text: "Programming",
  //         weight: 13,
  //       },
  //       {
  //         text: "Html5",
  //         weight: 15,
  //       },
  //       {
  //         text: "C#",
  //         weight: 11,
  //       },
  //     ];
  //     return words;
  //   }
  
  //   function makeWordCloud(words) {
  //     $(".teaching-domains").jQCloud(words, { delay: 120 });
  //   }
  
  //   function displayWordCloud() {
  //     var count = 1;
  //     $(window).on("scroll", function () {
  //       var y_scroll_pos = window.pageYOffset;
  //       var scroll_pos_test = 2700; 
  //       var words = makeWords();
  //       if (y_scroll_pos > scroll_pos_test && count <= 1) {
  //         makeWordCloud(words);
  //         count++;
  //       }
  //     });
  //   }
  // })();

  // Portfolio.displayWordCloud();
