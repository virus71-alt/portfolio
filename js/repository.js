function checkGit(btn, url) {
    if (!url) {
        btn.classList.add('unpublished');
        btn.textContent = 'NOT PUBLISHED';
        setTimeout(() => {
            btn.classList.remove('unpublished');
            btn.textContent = 'GIT';
        }, 2200);
    } else {
        window.open(url, '_blank', 'noopener,noreferrer');
    }
}
