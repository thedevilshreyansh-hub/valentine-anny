let yesSize = 1;
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

function openFolder() {
    // Hide folder gate
    const gate = document.getElementById('folder-gate');
    gate.style.opacity = '0';
    setTimeout(() => { gate.style.display = 'none'; }, 1000);

    // Start intro sequence
    const intro = document.getElementById('intro-container');
    intro.classList.remove('hidden');

    // Transition to main card after 11 seconds
    setTimeout(() => {
        intro.style.display = 'none';
        document.getElementById('main-content').classList.remove('hidden');
        setInterval(createHeart, 250);
        
        // Initial button positioning
        yesBtn.style.transform = 'translateX(-70px)';
        noBtn.style.transform = 'translateX(70px)';
    }, 11000);
}

const moveNo = () => {
    // Teleport NO button
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    noBtn.style.transform = 'none';

    // Grow YES button
    yesSize += 0.4;
    yesBtn.style.transform = `translateX(-70px) scale(${yesSize})`;
    
    if(yesSize > 4) yesBtn.innerHTML = "JUST CLICK YES! ð¥°";
    if(yesSize > 8) yesBtn.innerHTML = "I WON'T STOP! ð";
};

noBtn.addEventListener('mouseover', moveNo);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveNo();
});

yesBtn.addEventListener('click', () => {
    document.querySelector('.envelope').style.display = 'none';
    document.querySelector('.title').style.display = 'none';
    document.querySelector('.question').style.display = 'none';
    document.querySelector('.button-group').style.display = 'none';
    document.getElementById('success-msg').classList.remove('hidden');
    
    // Celebration heart burst
    for(let i=0; i<40; i++) {
        setTimeout(createHeart, i * 40);
    }
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = ['â¤ï¸', 'ð', 'ð¸', 'â¨', 'ð¹'][Math.floor(Math.random() * 5)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
    document.getElementById('main-content').appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
}
