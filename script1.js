// Function to get a query parameter by name
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Get the relevant elements
const fullscreenImage = document.getElementById('fullscreenImage');
const backButton = document.getElementById('backButton');

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
        // Add fullscreen-active class to body to show the back button
        document.body.classList.add('fullscreen-active');
        console.log("Entering fullscreen mode. Back button should appear.");
    } else {
        // Exit fullscreen mode
        document.exitFullscreen().catch((err) => {
            console.error(`Error attempting to exit fullscreen mode: ${err.message}`);
        });
        // Remove fullscreen-active class to hide the back button
        document.body.classList.remove('fullscreen-active');
        console.log("Exiting fullscreen mode. Back button should disappear.");
    }
}

// Event listener to handle fullscreen change
document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement) {
        backButton.style.display = 'block'; // Show back button when entering fullscreen
        console.log("Back button is now visible.");
    } else {
        backButton.style.display = 'none'; // Hide back button when exiting fullscreen
        console.log("Back button is now hidden.");
    }
});

// Add event listener to back button to redirect to the homepage
backButton.addEventListener('click', () => {
    window.location.href = 'index.html'; // Adjust the URL as needed
    console.log("Back button clicked. Redirecting to homepage.");
});

// Add event listener to the image to toggle full-screen mode on click
fullscreenImage.addEventListener('click', toggleFullScreen);

// Check if Fullscreen API is supported
if (document.fullscreenEnabled) {
    console.log('Fullscreen API is supported.');
} else {
    console.log('Fullscreen API is not supported.');
}
