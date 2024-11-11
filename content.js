// Function to pause the video
function pauseVideo() {
    const video = document.querySelector("video");
    if (video && !video.paused) {
      video.pause();
      console.log("Video paused");
    }
  }
  
  // Function to play the video
  function playVideo() {
    const video = document.querySelector("video");
    if (video && video.paused) {
      video.play();
      console.log("Video resumed");
    }
  }
  
  // Event listener for page visibility changes
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      pauseVideo();
    } else if (document.visibilityState === "visible") {
      playVideo();
    }
  });
  