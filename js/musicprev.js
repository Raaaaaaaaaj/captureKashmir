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
    let music = document.getElementById("bgMusic");
    setTimeout(()=>{document.querySelector('.rightbtn').click();});
    console.log('clicked');
    // Check if the audio element already exists
    if (!music) {
        // Create and configure audio element
        music = document.createElement("audio");
        music.id = "bgMusic"; // Set ID to avoid duplicates
        music.src = "js/bgmusic.mpeg"; 
        music.loop = true;
        music.volume = 0.2;
        document.body.appendChild(music);
    }

    function playMusic() {
        music.play().then(() => {
            console.log("Music started playing.");
        }).catch(() => {
            console.log("Autoplay still blocked!");
        });
    }

    // Try playing music automatically
    let playPromise = music.play();
    if (playPromise !== undefined) {
        playPromise.catch(() => {
            console.log("Autoplay blocked! Waiting for user interaction.");
            document.addEventListener("click", playMusic, { once: true }); // Play on first click
        });
    }
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

