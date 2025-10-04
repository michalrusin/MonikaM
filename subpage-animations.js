gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

    // 1. Animacja dla nagłówka podstrony
    gsap.from(".subpage-hero_content > *", {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.5
    });

    // 2. Animacja dla tytułów sekcji
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 90%",
            },
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: "power2.out"
        });
    });

    // 3. Animacja dla oferty szkoleń (szkolenia.html)
    gsap.utils.toArray('.offer-item').forEach(item => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 85%",
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out"
        });
    });

    // 4. Animacja dla cennika (stylizacje.html)
    gsap.from(".pricelist-category", {
        scrollTrigger: {
            trigger: ".pricelist-section",
            start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out"
    });

    // 5. Animacja dla galerii
    gsap.from(".gallery-item", {
        scrollTrigger: {
            trigger: ".gallery-grid",
            start: "top 85%",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
    });

    // 6. Animacja dla sekcji kontaktowej na dole
    gsap.from(".contact-offer-section > *", {
        scrollTrigger: {
            trigger: ".contact-offer-section",
            start: "top 85%",
        },
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    });

});