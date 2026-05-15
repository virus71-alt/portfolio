/* ---- Contact Form (Formspree) ---- */
const contactForm = document.getElementById('contactForm');
const submitBtn   = document.getElementById('submitBtn');
const formStatus  = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const originalHTML = submitBtn.innerHTML;
        submitBtn.innerHTML = 'TRANSMITTING...';
        submitBtn.disabled  = true;
        formStatus.className = 'form-status';
        formStatus.style.display = 'none';

        try {
            const response = await fetch('https://formspree.io/f/mzdoqvep', {
                method: 'POST',
                body: new FormData(contactForm),
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                formStatus.textContent = '> TRANSMISSION SUCCESSFUL_';
                formStatus.className   = 'form-status success';
                contactForm.reset();
                setTimeout(() => { formStatus.style.display = 'none'; }, 5000);
            } else {
                formStatus.textContent = '> TRANSMISSION FAILED. PLEASE RETRY_';
                formStatus.className   = 'form-status error';
            }
        } catch (_) {
            formStatus.textContent = '> SYSTEM ERROR. UNABLE TO CONNECT_';
            formStatus.className   = 'form-status error';
        } finally {
            submitBtn.innerHTML = originalHTML;
            submitBtn.disabled  = false;
        }
    });
}

/* ---- Music Player ---- */
const audio        = document.getElementById('bgAudio');
const playBtn      = document.getElementById('playBtn');
const trackDisplay = document.getElementById('trackDisplay');
const waveform     = document.getElementById('waveform');
const progressBar  = document.getElementById('progressBar');

const songs = [
    { file: 'track_1.mp3', title: 'Made In Japan' },
    { file: 'track_2.mp3', title: 'Bairan' },
    { file: 'track_3.mp3', title: 'Let Her Go' }
];

const MUSIC_PATH = '../music/';
let currentIndex = 0;
let isPlaying    = false;

function loadSong(index) {
    audio.src = MUSIC_PATH + songs[index].file;
    trackDisplay.textContent = '> ' + songs[index].title;
    progressBar.style.width  = '0%';
}

function setPlayingUI(playing) {
    playBtn.textContent = playing ? '⏸' : '▶';
    playBtn.setAttribute('aria-label', playing ? 'Pause' : 'Play');
    playBtn.style.paddingLeft = playing ? '0' : '3px';
    waveform.classList.toggle('playing', playing);
}

function togglePlay() {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
    } else {
        audio.play().catch(() => {});
        isPlaying = true;
    }
    setPlayingUI(isPlaying);
}

function nextSong() {
    currentIndex = (currentIndex + 1) % songs.length;
    loadSong(currentIndex);
    if (isPlaying) audio.play().catch(() => {});
}

if (audio) {
    loadSong(currentIndex);

    audio.addEventListener('timeupdate', () => {
        if (audio.duration > 0) {
            progressBar.style.width = (audio.currentTime / audio.duration * 100) + '%';
        }
    });

    audio.addEventListener('ended', nextSong);

    audio.addEventListener('error', () => {
        isPlaying = false;
        setPlayingUI(false);
    });
}
