function goBack() {
    window.history.back();
};

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
};

// Get the relevant elements
const fullscreenImage = document.getElementById('fullscreenImage');


// Retrieve the query parameters
const imageSrc = getQueryParam('image');  // This is now the 'detailImage' passed from the gallery


// Populate the details page with the data from the URL parameters
if (imageSrc) fullscreenImage.src = decodeURIComponent(imageSrc);


// Show the overlay
document.getElementById('overlay').style.display = 'block';

// Function to toggle immersive mode
function toggleImmersiveMode() {
    if (typeof window.AndroidFullScreen !== 'undefined') {
        console.log('Toggling immersive mode...');
        if (window.AndroidFullScreen.isImmersiveModeEnabled) {
            window.AndroidFullScreen.immersiveMode(
                function() { console.log('Entered immersive mode'); },
                function(error) { console.error('Failed to enter immersive mode:', error); }
            );
        } else {
            window.AndroidFullScreen.showSystemUI(
                function() { console.log('Exited immersive mode'); },
                function(error) { console.error('Failed to exit immersive mode:', error); }
            );
        }
    } else {
        console.log('AndroidFullScreen is not available.');
    }
}

// Add event listener to the image to toggle full-screen mode on click
fullscreenImage.addEventListener('click', toggleImmersiveMode);

// Check if AndroidFullScreen is defined and available
if (typeof window.AndroidFullScreen !== 'undefined') {
    console.log('AndroidFullScreen detected.');
    document.addEventListener("DOMContentLoaded", function() {
        console.log('Checking for standalone display mode and AndroidFullScreen...');
        if (window.matchMedia('(display-mode: standalone)').matches) {
            console.log('Standalone mode detected.');
            window.AndroidFullScreen.immersiveMode(
                function() { console.log('Entered immersive mode'); },
                function(error) { console.error('Failed to enter immersive mode:', error); }
            );
        }
    });
} else {
    console.log('AndroidFullScreen is not available.');
}
