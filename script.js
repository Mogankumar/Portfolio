document.addEventListener("DOMContentLoaded", () => {
    // -----------------------------------------------------
    // Existing Intersection Observer Logic
    // -----------------------------------------------------
    // -----------------------------------------------------
    // GSAP Scroll Animations
    // -----------------------------------------------------
    gsap.registerPlugin(ScrollTrigger);

    // Initial Hero Animation
    const heroTl = gsap.timeline();
    heroTl.from(".hero-badge", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out", delay: 0.2 })
        .from(".hero-title", { y: 30, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.5")
        .from(".hero-subtitle", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
        .from(".hero-buttons .btn", { y: 20, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }, "-=0.5")
        .from(".social-icons a", { y: 15, opacity: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }, "-=0.4");

    // About Section
    gsap.from(".section-tag, .modern-about-title", {
        scrollTrigger: { trigger: ".modern-about", start: "top 80%" },
        y: 40, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power3.out"
    });

    gsap.from(".about-paragraphs p", {
        scrollTrigger: { trigger: ".about-paragraphs", start: "top 85%" },
        y: 20, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power2.out"
    });

    gsap.from(".about-buttons .btn", {
        scrollTrigger: { trigger: ".about-buttons", start: "top 90%" },
        x: -20, opacity: 0, duration: 0.6, stagger: 0.15, ease: "power2.out"
    });

    gsap.from(".about-card", {
        scrollTrigger: { trigger: ".about-grid", start: "top 85%" },
        y: 50, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out"
    });

    // Specialization
    gsap.from(".specialization-section h2, .specialization-section p", {
        scrollTrigger: { trigger: ".specialization-section", start: "top 85%" },
        y: 30, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power3.out"
    });

    gsap.from(".carousel-container", {
        scrollTrigger: { trigger: ".carousel-container", start: "top 85%" },
        scale: 0.95, opacity: 0, duration: 1, ease: "power3.out"
    });

    // Education
    gsap.from(".education-section h2", {
        scrollTrigger: { trigger: ".education-section", start: "top 85%" },
        y: 30, opacity: 0, duration: 0.8
    });
    gsap.utils.toArray(".education-item").forEach(item => {
        gsap.from(item, {
            scrollTrigger: { trigger: item, start: "top 85%" },
            x: -50, opacity: 0, duration: 0.8, ease: "power3.out"
        });
    });

    // Projects
    gsap.from(".projects-section h2", {
        scrollTrigger: { trigger: ".projects-section", start: "top 85%" },
        y: 30, opacity: 0, duration: 0.8
    });
    gsap.from(".project-card", {
        scrollTrigger: { trigger: ".projects-grid", start: "top 85%" },
        y: 60, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power3.out"
    });

    window.addEventListener("load", () => {
        ScrollTrigger.refresh();
    });

    // Experience
    gsap.from(".experience-section h2", {
        scrollTrigger: { trigger: ".experience-section", start: "top 85%" },
        y: 30, opacity: 0, duration: 0.8
    });
    gsap.utils.toArray(".timeline-item").forEach(item => {
        gsap.from(item, {
            scrollTrigger: { trigger: item, start: "top 85%" },
            x: 50, opacity: 0, duration: 0.8, ease: "power3.out"
        });
    });

    // Contact
    gsap.from(".contact-section h2, .contact-section p", {
        scrollTrigger: { trigger: ".contact-section", start: "top 85%" },
        y: 30, opacity: 0, duration: 0.8, stagger: 0.2
    });
    gsap.from(".contact-item", {
        scrollTrigger: { trigger: ".contact-card", start: "top 90%" },
        y: 40, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power3.out"
    });

    // -----------------------------------------------------
    // Particle Network Background
    // -----------------------------------------------------
    const canvas = document.getElementById("bg-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width, height;
    let particles = [];

    const mouse = { x: null, y: null, radius: 150 };

    function init() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        particles = [];
        let numParticles = Math.min((width * height) / 12000, 150); // limit max particles
        for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle());
        }
    }

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 1.5;
            this.vy = (Math.random() - 0.5) * 1.5;
            this.size = Math.random() * 2 + 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off edges
            if (this.x < 0 || this.x > width) this.vx = -this.vx;
            if (this.y < 0 || this.y > height) this.vy = -this.vy;

            // Mouse interaction: push away
            if (mouse.x != null && mouse.y != null) {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouse.radius) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (mouse.radius - distance) / mouse.radius;
                    const directionX = forceDirectionX * force * 3;
                    const directionY = forceDirectionY * force * 3;
                    this.x -= directionX;
                    this.y -= directionY;
                }
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(100, 255, 218, 0.8)";
            ctx.fill();
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();

            for (let j = i; j < particles.length; j++) {
                let dx = particles[i].x - particles[j].x;
                let dy = particles[i].y - particles[j].y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(100, 255, 218, ${0.4 * (1 - distance / 120)})`;
                    ctx.lineWidth = 1;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    window.addEventListener("resize", init);
    window.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });
    window.addEventListener("mouseout", () => {
        mouse.x = null;
        mouse.y = null;
    });

    init();
    animate();
});