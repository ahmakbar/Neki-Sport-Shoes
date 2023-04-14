        TweenMax.staggerFrom(".nav-items ul li", 1.2, {
            duration:5,
        delay: 2.4,    
        opacity: 0,
        y: 50,
        ease: Expo.easeInOut
    }, .2)
    const hero1 = document.querySelector('.hero-1');
    const hero1Paragraphs = hero1.querySelectorAll('p');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Play animation
          TweenMax.staggerFrom(hero1Paragraphs, 1.2, {
            duration: 5,
            // delay: 2.4,
            opacity: 0,
            y: 50,
            ease: Expo.easeInOut
          }, 0.2);
          
          // Stop observing
          observer.unobserve(entry.target);
        }
      });
    });

    // Observe the section
    observer.observe(hero1);

    const reverseObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          // Reverse animation
          TweenMax.to(hero1Paragraphs, 1.2, {
            duration: 0.5,
            opacity: 0,
            y: -50,
            ease: Expo.easeInOut,
            delay: 0.2,
            stagger: 0.2,
            onComplete: () => {
              TweenMax.set(hero1Paragraphs, {opacity: 1, y: 0});
            },
            reverse: true
          });
          
          // Stop observing
          reverseObserver.unobserve(entry.target);
        }
      });
    });

    // Observe the section
    reverseObserver.observe(hero1);

    

    