document.addEventListener("DOMContentLoaded", function(){
    const trailerBtn = document.getElementById("trailer-btn");
    const trailerVideoContainer = document.querySelector(".trailer-video");
    const trailerVideo = document.getElementById("trailer-video");

    trailerBtn.addEventListener("mouseenter", () => {
        trailerVideoContainer.style.opacity = "1";
        trailerVideo.play();
    });

    trailerBtn.addEventListener("mouseleave", () => {
        trailerVideoContainer.style.opacity = "0";
        trailerVideo.pause();
        trailerVideo.currentTime = 0;
    });
});