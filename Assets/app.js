function changeText() {
    const heading = document.getElementById("heading");
    const button = document.getElementById("btn");

    const message = "Welcome, you just triggered the vibe ✨";
    heading.innerHTML = "";

    let i = 0;
    function typeEffect() {
        if (i < message.length) {
            heading.innerHTML += message.charAt(i);
            i++;
            setTimeout(typeEffect, 40);
        }
    }
    typeEffect();

    document.body.style.background =
        "linear-gradient(135deg, #ff9a9e, #fad0c4)";

    heading.style.textShadow = "0 0 20px rgba(255,255,255,0.9)";

    button.style.transform = "scale(1.15)";
    button.style.background = "#764ba2";
    button.style.color = "white";

    setTimeout(() => {
        button.style.transform = "scale(1)";
    }, 200);
}