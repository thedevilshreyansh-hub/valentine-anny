// 1. Handle the 10-second transition
setTimeout(() => {
    document.getElementById('intro-container').style.display = 'none';
    const mainContent = document.getElementById('main-content');
    mainContent.classList.remove('hidden');
    // Start heart rain
    setInterval(createHeart, 200);
}, 11000); // 11 seconds to be safe

// 2. The Dodging "NO" Button
const noBtn = document.getElementById('noBtn');
const moveNo = () => {
    // Limits movement so it stays on screen
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    noBtn.style.transform = 'none'; // Remove the initial centering
};

noBtn.addEventListener('mouseover', moveNo);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevents clicking
    moveNo();
});

// 3. The "YES" Explosion
const yesBtn = document.getElementById('yesBtn');
yesBtn.addEventListener('click', () => {
    document.querySelector('.envelope').style.display = 'none';
    document.querySelector('.title').style.display = 'none';
    document.querySelector('.question').style.display = 'none';
    document.querySelector('.button-group').style.display = 'none';
    document.getElementById('success-msg').classList.remove('hidden');
    
    // Extra hearts for the celebration
    for(let i=0; i<30; i++) {
        setTimeout(createHeart, i * 50);
    }
});

// 4. Heart Generator
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = ['â¤ï¸', 'ð', 'ð¸', 'â¨'][Math.floor(Math.random() * 4)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    heart.style.opacity = Math.random();
    document.getElementById('hearts-container').appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
}
