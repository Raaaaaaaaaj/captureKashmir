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
     // Disable scrolling
    const music = document.createElement("audio");
    music.src = "js/bgmusic.mpeg"; 
    music.loop = true;
    music.autoplay = true;
    music.volume = 0.2;
    document.body.appendChild(music);

    // Ensure the music is loaded before playing
    music.addEventListener("canplaythrough", function () {
        let playPromise = music.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log("Music is playing...");
            }).catch((error) => {
                console.log("Autoplay blocked! Waiting for user interaction.");
                document.addEventListener("click", () => {
                    music.play();
                }, { once: true }); 
            });
        }
    });
    document.getElementById("popupOverlay").classList.add("show");
	document.body.classList.add("no-scroll");
});
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

