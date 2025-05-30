const scene = document.querySelector('.scene');
const dog = document.querySelector('.dog');

setInterval(() => {
    // Získaj aktuálnu pozíciu psíka
    const dogLeft = dog.getBoundingClientRect().left;

    // Vytvor hovienko
    const poop = document.createElement('div');
    poop.classList.add('poop');
    poop.style.left = `${dogLeft + 20}px`; // trochu za psíka

    scene.appendChild(poop);

    // Odstráň po 2s
    setTimeout(() => {
        poop.remove();
    }, 2000);
}, 800); // každých 800ms hovienko


// zvuk

const music = document.getElementById('bg-music');
const soundIcon = document.getElementById('sound-icon');
let isPlaying = true;

soundIcon.addEventListener('click', () => {
    if (isPlaying) {
        music.pause();
        soundIcon.src = 'imgs/sound-off.svg';
    } else {
        music.play();
        soundIcon.src = 'imgs/sound-on.svg';
    }
    isPlaying = !isPlaying;
});
