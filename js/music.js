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
    const music = document.createElement("audio");
    music.src = "js/bgmusic.mpeg"; 
    music.loop = true;
    music.autoplay = true;
    music.volume = 0.04;
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
});
