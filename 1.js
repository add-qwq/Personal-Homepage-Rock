const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.profile-card, .nav, .tag, .post, .section-title, .nickname, .signature, .footer, .tech-bar-container, .theme-btn')
    .forEach(element => observer.observe(element));

document.querySelector('.about-trigger').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.modal-overlay').classList.add('active');
});

document.querySelector('.modal-close').addEventListener('click', () => {
    document.querySelector('.modal-overlay').classList.remove('active');
});

document.querySelector('.modal-overlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        e.target.classList.remove('active');
    }
});

let currentBgIndex = 1;
const bgList = [1, 2, 3, 4, 5];

document.body.style.backgroundImage = `url('${bgList[0]}.jpg')`;

document.querySelector('.switch-bg').addEventListener('click', () => {
    currentBgIndex = (currentBgIndex + 1) % bgList.length;
    document.body.style.backgroundImage = `url('${bgList[currentBgIndex]}.jpg')`;
});

const profileCard = document.querySelector('.profile-card');
const viewBgBtn = document.querySelector('.view-bg');
const footer = document.querySelector('.footer');

function createRestoreButton() {
    const restoreBtn = document.createElement('button');
    restoreBtn.className = 'theme-btn restore-btn';
    restoreBtn.textContent = '恢复显示';

    restoreBtn.addEventListener('click', () => {
        profileCard.classList.remove('hidden');
        footer.classList.remove('footer-fixed');
        restoreBtn.remove();
    });
    return restoreBtn;
}

viewBgBtn.addEventListener('click', () => {
    if (!profileCard.classList.contains('hidden')) {
        profileCard.classList.add('hidden');
        footer.classList.add('footer-fixed');

        const existingRestoreBtn = document.querySelector('.restore-btn');
        if (!existingRestoreBtn) {
            const restoreBtn = createRestoreButton();
            footer.parentNode.insertBefore(restoreBtn, footer);
        }
    }
});