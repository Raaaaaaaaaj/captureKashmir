// window.onload = function () {
    
//     const music = document.createElement("audio");
//     music.src = "bgmusic.mpeg"; 
//     music.loop = true;
//     music.autoplay = true; 

//     document.body.appendChild(music);

    
//     let playPromise = music.play();

//     if (playPromise !== undefined) {
//         playPromise.then(() => {
//             console.log("Music is playing...");
//         }).catch((error) => {
//             console.log("Autoplay blocked! Waiting for user interaction.");
//             document.addEventListener("click", () => {
//                 music.play();
//             }, { once: true }); 
//         });
//     }
// };
document.addEventListener("DOMContentLoaded", function () {
    // Create and configure audio element
    const music = document.createElement("audio");
    music.src = "js/bgmusic.mpeg"; 
    music.loop = true;
    music.volume = 0.2;
    document.body.appendChild(music);

    // Try to play music (Autoplay might be blocked)
    let playPromise = music.play();
    if (playPromise !== undefined) {
        playPromise.catch(() => {
            console.log("Autoplay blocked! Waiting for user interaction.");
            document.addEventListener("click", function playMusic() {
                music.play();
                document.removeEventListener("click", playMusic); // Remove listener after first play
            });
        });
    }
    // popupOverlay.classList.add("show");
    // document.body.classList.add("no-scroll");
    // Show popup only if it hasn't been shown before
    const popupOverlay = document.getElementById("popupOverlay");
    if (popupOverlay && !localStorage.getItem("popupShown")) {
        popupOverlay.classList.add("show");
        document.body.classList.add("no-scroll"); // Disable scrolling
        localStorage.setItem("popupShown", "true"); // Mark as shown
    }
    // localStorage.removeItem('popupShown');
});
setInterval(()=>{
    localStorage.removeItem('popupShown');
    console.log('Popup unlocked !');
}, 3600000);
function setFavicon(url) {
    let link = document.querySelector("link[rel~='icon']");
    
    if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
    }
    
    link.href = url;
}

// Example usage: Set a new favicon
setFavicon("images/logo.jpg.jpg");

