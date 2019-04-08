window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#60d394",
        "#ff6666",
        "#7c3ef9",
        "#e88af7",
        "#5aeda5",
        "#f2ef6a"
    ];
    //souds 
    pads.forEach((pad, index) =>{
        pad.addEventListener('click', function(){
        sounds[index].currentTime = 0;
        sounds[index].play();
        createBubbles(index);
        });
    });
    // Visuals 
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = `jump${index} 1s ease`;
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        });
    }
});
