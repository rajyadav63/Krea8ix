const video = document.querySelector('#page2 video')

window.addEventListener('DOMContentLoaded', () => {
    video.play().catch((e) => {
        console.warn('Autoplay might be blocked:', e);
    })
    gsap.to(video, {
        opacity: 1,
        scale: 1,
        borderRadius: 0,
        duration: 1.5,
        ease: "power2.out"
    });
});