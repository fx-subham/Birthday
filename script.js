/* ================= MUSIC ================= */

const music = document.getElementById("music");

let playing = false;

function toggleMusic() {

    if (playing) {

        music.pause();

        playing = false;

        document.getElementById("musicBtn").innerHTML = "🎵";

    } else {

        music.play();

        playing = true;

        document.getElementById("musicBtn").innerHTML = "🔊";

    }

}



/* ================= START EXPERIENCE ================= */

function startExperience() {

    const intro = document.getElementById("intro");

    intro.classList.add("hide");

    music.play()
        .then(() => {
            playing = true;
            document.getElementById("musicBtn").innerHTML = "🔊";
        })
        .catch(() => {
            console.log("Music requires user interaction.");
        });

}



/* ================= COUNTDOWN ================= */

const birthday = new Date("September 28, 2026 00:00:00").getTime();

setInterval(function () {

    const now = new Date().getTime();

    const distance = birthday - now;

    if (distance <= 0) {

        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";

        return;

    }

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("days").innerText =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerText =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerText =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerText =
        String(seconds).padStart(2, "0");

}, 1000);



/* ================= FLOATING HEARTS ================= */

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "💓",
        "🥰"
    ];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 20 + 15 + "px";

    heart.style.animationDuration =
        Math.random() * 5 + 5 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 10000);

}

setInterval(createHeart, 700);



/* ================= SECRET ================= */

function unlockSecret() {

    const answer =
        document.getElementById("secretAnswer")
        .value
        .trim()
        .toLowerCase();

    /*
        CHANGE THIS ANSWER
        TO SOMETHING ONLY SHE KNOWS
    */

    const correctAnswer = "bestfriend";

    if (answer === correctAnswer) {

        document.getElementById("lockScreen")
            .style.display = "none";

        document.getElementById("secretContent")
            .classList.add("show");

        createCelebration();

    } else {

        document.getElementById("wrongAnswer")
            .innerText =
            "Hmm... that's not it 😝 Try again ❤️";

    }

}



/* ================= CELEBRATION ================= */

function createCelebration() {

    for (let i = 0; i < 80; i++) {

        setTimeout(() => {

            const heart =
                document.createElement("div");

            heart.className = "heart";

            heart.innerHTML =
                ["❤️","💖","💕","🎉","✨","🥹"]
                [Math.floor(Math.random() * 6)];

            heart.style.left =
                Math.random() * 100 + "vw";

            heart.style.fontSize =
                Math.random() * 30 + 15 + "px";

            heart.style.animationDuration =
                Math.random() * 3 + 3 + "s";

            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 6000);

        }, i * 50);

    }

}