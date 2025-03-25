const overlaybackground = document.getElementById("overlay");
const videothumbnail = document.getElementById("videothumbnail");
const video = document.getElementById("video");

// Close overlay on load
let overlayIsOpen = false;
overlaybackground.style.display = "none";

// When activated, toggles lightbox
function toggleLightbox() {

    if (overlayIsOpen) {
        // Close overlay
        overlaybackground.style.display = "none";
        overlayIsOpen = false;

        // Pause video, if it is playing
        video.pause();
        
        return;
    }

    // Open overlay
    overlaybackground.style.display = "flex";
    overlayIsOpen = true;
}

// All elements that toggle lightbox
let toggleElements = [overlaybackground, videothumbnail];

// Add event listeners
toggleElements.forEach((element) => {
    element.addEventListener("click", toggleLightbox);
});