gsap.registerPlugin(ScrollTrigger);



const lenis = new Lenis();


lenis.on('scroll', ScrollTrigger.update);

// Zintegruj Lenis z pętlą animacji GSAP dla maksymalnej płynności
gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
});

// Opcjonalnie: wyłącz wygładzanie lagów dla tikera GSAP, co często poprawia płynność w połączeniu z Lenis
gsap.ticker.lagSmoothing(0);

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.menu-overlay');

function closeMenu() {
    hamburger.classList.remove('open');
    menu.classList.remove('open');
    overlay.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
}

hamburger.addEventListener('click', function(e) {
    e.stopPropagation();
    const isOpen = hamburger.classList.toggle('open');
    menu.classList.toggle('open');
    overlay.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

overlay.addEventListener('click', closeMenu);
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Zamknij menu przy zmianie rozmiaru ekranu (powyżej 1000px)
window.addEventListener('resize', () => {
    if(window.innerWidth > 1000) closeMenu();
});

const heroTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
    }
});

heroTl.to(".hero_left img", { y: "20%" }, 0);
heroTl.to(".hero_name", { y: "100%" }, 0);
heroTl.to(".hero_desc", { y: "120%" }, 0);







ScrollTrigger.matchMedia({
  // desktop
  "(min-width: 769px)": function () {
    const aboutTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "top top",
        end: "bottom bottom",
        pin: ".about-text",
        scrub: 1,
      },
    });

    const text = new SplitType(".fade-text", { types: "words" });
    aboutTl.from(text.words, {
      opacity: 0.1,
      stagger: 0.1,
    });
  },

  // mobile
  "(max-width: 768px)": function () {
    // Brak 'pin' dla urządzeń mobilnych
    const text = new SplitType(".fade-text", { types: "chars" });
    gsap.fromTo(
      text.chars,
      { opacity: 0.1 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: ".about",
          start: "top 70%",
          end: "bottom 90%",
          scrub: true,
        },
        stagger: 0.05,
        duration: 1.2,
      }
    );
  },
});




gsap.from(".services_header > *", {
  scrollTrigger: {
    trigger: ".services",
    start: "top 80%",
  },
  opacity: 0,
  y: 30,
  duration: 1,
  ease: "power3.out"
});

gsap.to(".reviews", {
  marginTop: "-30vh", // Używamy ujemnego marginesu, aby "pociągnąć" sekcję w górę i zlikwidować lukę
  scrollTrigger: {
    trigger: ".services", // Animacja zaczyna się, gdy sekcja .services jest na ekranie
    start: "center center", // Start, gdy środek .services jest w środku ekranu
    end: "bottom top",      // Koniec, gdy dół .services dotknie góry ekranu
    scrub: true,            // Płynne przewijanie
  },
});





gsap.from(".reviews_header > *", {
  scrollTrigger: {
    trigger: ".reviews",
    start: "top 80%",
  },
  opacity: 0,
  y: 30,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out"
});

gsap.from(".review-card", {
  scrollTrigger: {
    trigger: ".reviews_container",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  stagger: 0.2,
  duration: 0.8,
  ease: "power2.out"
});



$(document).ready(function() {
    // Transition effect for navbar 
    $(window).scroll(function() {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if($(this).scrollTop() > 500) { 
          $('.navbar').addClass('solid');
      } else {
          $('.navbar').removeClass('solid');
      }
    });
});

gsap.from(".footer_container > *", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top 95%",
  },
  opacity: 0,
  y: 40,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out"
});
