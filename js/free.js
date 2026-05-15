/* ---- Daily Phrase Cycler ---- */
const phrases = [
    'お疲れ様です (Otsukaresama) — Good work today.',
    'コードを書いています (Code wo kaiteimasu) — I am writing code.',
    '頑張ってください (Ganbatte kudasai) — Do your best!',
    '未来は今です (Mirai wa ima desu) — The future is now.',
    '日本語を勉強しています (Nihongo wo benkyou shiteimasu) — I am studying Japanese.'
];

let pIndex = 0;
const pElem = document.getElementById('phrase-text');

function cyclePhrases() {
    pElem.style.opacity = '0';
    setTimeout(() => {
        pElem.textContent = '> ' + phrases[pIndex];
        pElem.style.opacity = '1';
        pIndex = (pIndex + 1) % phrases.length;
    }, 460);
}

if (pElem) {
    setInterval(cyclePhrases, 4000);
    cyclePhrases();
}

/* ---- Resource Access Button ---- */
function requestAccess(btn) {
    const original = btn.textContent;
    btn.textContent = 'COMING SOON';
    btn.classList.add('locked');
    setTimeout(() => {
        btn.textContent = original;
        btn.classList.remove('locked');
    }, 2200);
}
