// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');
const nav       = document.querySelector('nav');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        const open = navLinks.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', String(open));
    });

    document.addEventListener('click', e => {
        if (nav && !nav.contains(e.target) && navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });

    navLinks.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            navLinks.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });
}

// Phone reveal (profiler + transmit)
const revealPhoneBtn = document.getElementById('revealPhoneBtn');
const phoneDisplay   = document.getElementById('phoneDisplay');
if (revealPhoneBtn && phoneDisplay) {
    revealPhoneBtn.addEventListener('click', () => {
        phoneDisplay.textContent = '+977 9761878728';
        phoneDisplay.classList.remove('sr-only');
        revealPhoneBtn.style.display = 'none';
    });
}
