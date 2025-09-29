gsap.registerPlugin(ScrollTrigger);

// -----------------------------------------------------
// 1. Integracja Lenis (Smooth Scrolling) z GSAP (ScrollTrigger)
// KLUCZOWE POPRAWKI DLA USUNIĘCIA DRGAŃ
// -----------------------------------------------------

const lenis = new Lenis();

// Powiadom ScrollTrigger o każdym scrollu z Lenis, aby mógł on precyzyjnie animować
lenis.on('scroll', ScrollTrigger.update);

// Zintegruj Lenis z pętlą animacji GSAP dla maksymalnej płynności
gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
});

// Opcjonalnie: wyłącz wygładzanie lagów dla tikera GSAP, co często poprawia płynność w połączeniu z Lenis
gsap.ticker.lagSmoothing(0);


// -----------------------------------------------------
// 2. Obsługa Menu Hamburgera i Nawigacji
// -----------------------------------------------------
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


// -----------------------------------------------------
// 3. Animacje Paralaksy dla sekcji .hero
// -----------------------------------------------------

// Animacja obrazu (Monika Matuszewska)
gsap.to(".hero__left img", {
  y: "50%", // Obraz zjeżdża szybciej w dół niż reszta
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
    
  },
});

// Animacja nazwy (MONIKA MATUSZEWSKA)
gsap.to(".hero__name", {
  y: "120%", // Nazwa znika pod ekranem
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});

// Animacja opisu
gsap.to(".hero__desc", {
  y: "60%", 
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});


// -----------------------------------------------------
// 4. Przypięcie i Animacja sekcji "About"
// -----------------------------------------------------

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



const trainingsTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".trainings",
    start: "top bottom", // Zaczynamy, gdy sekcja wjeżdża od dołu
    end: "bottom top",   // Kończymy, gdy sekcja znika u góry
    scrub: true, // Animacja nie jest powiązana bezpośrednio z przewijaniem
    normalizeScroll : true , 
  }
});

trainingsTl
  // Tekst zaczyna od przesunięcia w dół i wraca do 0
  .fromTo(".trainings__text", {
    y: "15%", // Początek (niżej)
  }, {
    y: "0%", // Koniec (w naturalnej pozycji)
  })
  // Galeria zaczyna od przesunięcia w dół i wraca do 0
  .fromTo(".trainings__gallery", {
    y: "10%", // Początek (niżej, mniej niż tekst)
  }, {
    y: "0%", // Koniec
  }, "<"); // Znak "<" sprawia, że ta animacja zaczyna się równocześnie z poprzednią


// -----------------------------------------------------
// 6. Animacje dla sekcji "Reviews" (opinie)
// -----------------------------------------------------

gsap.from(".reviews__header > *", {
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
    trigger: ".reviews__container",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  stagger: 0.2,
  duration: 0.8,
  ease: "power2.out"
});


// -----------------------------------------------------
// 7. jQuery - Zmiana wyglądu paska nawigacji (Navbar)
// -----------------------------------------------------

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