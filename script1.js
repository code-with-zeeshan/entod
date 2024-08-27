// Function to go back to the previous page
function goBack() {
    window.history.back();
}

// Function to get a query parameter by name
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Get the relevant elements
const fullscreenImage = document.getElementById('fullscreenImage');

// Retrieve the query parameters
const imageSrc = getQueryParam('image');  // This is now the 'detailImage' passed from the gallery

// Populate the details page with the data from the URL parameters
if (imageSrc) fullscreenImage.src = decodeURIComponent(imageSrc);

// Show the overlay
document.getElementById('overlay').style.display = 'block';

// Function to toggle full-screen mode
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        // Enter fullscreen mode
        document.documentElement.requestFullscreen().catch((err) => {
            console.error(`Error attempting to enable fullscreen mode: ${err.message}`);
        });
    } else {
        // Exit fullscreen mode
        document.exitFullscreen().catch((err) => {
            console.error(`Error attempting to exit fullscreen mode: ${err.message}`);
        });
    }
}

// Add event listener to the image to toggle full-screen mode on click
fullscreenImage.addEventListener('click', toggleFullScreen);

// Check if Fullscreen API is supported
if (document.fullscreenEnabled) {
    console.log('Fullscreen API is supported.');
} else {
    console.log('Fullscreen API is not supported.');
}
