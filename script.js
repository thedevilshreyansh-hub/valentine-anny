const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const card = document.querySelector('.card');
const successMsg = document.getElementById('success-msg');

// 1. Floating "NO" Button Logic
noBtn.addEventListener('mouseover', () => {
    // Calculate random position
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// 2. "YES" Click Logic
yesBtn.addEventListener('click', () => {
    document.querySelector('.title').style.display = 'none';
    document.querySelector('.question').style.display = 'none';
    document.querySelector('.button-group').style.display = 'none';
    successMsg.classList.remove('hidden');
});

// 3. Create Background Floating Hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.getElementById('hearts-container').appendChild(heart);

    setTimeout(() => { heart.remove(); }, 5000);
}
setInterval(createHeart, 300);
