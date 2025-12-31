const card = document.getElementById("card");
const music = document.getElementById("music");
const lines = document.querySelectorAll(".text p");
const flowerBox = document.getElementById("flower-container");

let opened = false;

/* RANDOM FLOWERS */
function createFlower() {
    const flower = document.createElement("span");
    flower.innerHTML = ["🌸","🌷","🌺"][Math.floor(Math.random() * 3)];
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = 4 + Math.random() * 4 + "s";
    flower.style.fontSize = 16 + Math.random() * 20 + "px";
    flowerBox.appendChild(flower);
    setTimeout(() => flower.remove(), 8000);
}
setInterval(createFlower, 300);

/* CLICK = OPEN + MUSIC */
card.addEventListener("click", () => {
    if (!opened) {
        opened = true;
        card.classList.add("open");

        /* 🔊 FORCE MUSIC PLAY */
        music.volume = 0.35;
        music.currentTime = 0;

        const playPromise = music.play();
        if (playPromise !== undefined) {
            playPromise.catch(err => {
                console.log("Autoplay blocked, retrying on interaction");
            });
        }

        /* TEXT LINE BY LINE */
        lines.forEach((line, i) => {
            setTimeout(() => {
                line.classList.add("show");
            }, i * 700);
        });
    }
});
