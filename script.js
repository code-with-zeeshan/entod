document.addEventListener('DOMContentLoaded', function () {
    const galleryTitle = document.getElementById('gallery-title');
    const medicineGallery = document.getElementById('medicine-gallery');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.querySelector('.search-container button');
    const darkModeToggle = document.getElementById('checkbox');
    const glotekImage = document.getElementById('glotekImage');
    const darkModeStylesheet = 'style-dark.css';
    const darkModeImageSrc = 'Images/my-image.png'; // Path to the dark mode image
    const lightModeImageSrc = 'Images/1723848402944-removebg-preview.png'; // Path to the light mode image
    let currentCategory = '';
    let ignoreBlur = false;
    
     // Search Bar Toggle
  function toggleSearchBar() {
        if (!searchInput.classList.contains('active')) {
            searchInput.classList.add('active');
            searchInput.focus();
        }
    }
    
    searchButton.addEventListener('click', toggleSearchBar);
    

    searchInput.addEventListener('focus', function () {
        ignoreBlur = true;
    });

    

    searchInput.addEventListener('blur', function () {
        if (ignoreBlur) {
            setTimeout(() => {
                searchInput.classList.remove('active');
            }, 200);
            ignoreBlur = false;
        }
    });

    // Collapse search bar if click is detected outside
    document.addEventListener('click', function (event) {
        if (!searchInput.contains(event.target) && !searchButton.contains(event.target)) {
            searchInput.classList.remove('active');
        }
    });

    

   // Dark mode toggle
   

   function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    if (isDarkMode) {
        loadCSS(darkModeStylesheet);
        glotekImage.src = darkModeImageSrc;
    } else {
        unloadCSS();
        glotekImage.src = lightModeImageSrc;
    }
}

function loadCSS(href) {
    let link = document.getElementById('darkModeStylesheet');
    if (!link) {
        link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        link.id = 'darkModeStylesheet';
        document.head.appendChild(link);
    }
}

function unloadCSS() {
    const existingLink = document.getElementById('darkModeStylesheet');
    if (existingLink) {
        document.head.removeChild(existingLink);
    }
}


  // Initialize dark mode based on user preference (if any)
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    loadCSS(darkModeStylesheet);
    glotekImage.src = darkModeImageSrc;
    darkModeToggle.checked = true; // Ensure the toggle reflects the saved state
}

// Toggle dark mode on click or touch
function toggleDarkModeHandler() {
    toggleDarkMode();
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

darkModeToggle.addEventListener('change', toggleDarkModeHandler);

// New code for theme switch
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);


// Shrink gallery title on scroll
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > 50) { // Adjust this value based on when you want the title to shrink
        galleryTitle.classList.add('shrink');
    } else {
        galleryTitle.classList.remove('shrink');
    }
});


    const medicines = {
        'Surgical Range': [
            { name: 'Phenocaine Plus', image: 'Images/IMG_20240817_001420_962-removebg-preview.png', detailImage: 'Images/Images2/DocScanner Aug 27, 2024 10-39 PM_20.jpg', description: 'Intracameral Injection' },
            { name: 'Hyloject 14', image: 'Images/IMG_20240817_001254_202-removebg-preview.png', detailImage: 'Images/Images2/DocScanner Aug 27, 2024 10-39 PM_28.jpg' },
            { name: 'Hyloject CS', image: 'Images/IMG_20240817_001226_896-removebg-preview.png', detailImage: 'Images/Images2/DocScanner Aug 27, 2024 10-39 PM_12.jpg' },
            { name: 'Hyloject Duo', image: 'Images/1723836803904-removebg-preview.png', detailImage: 'Images/Images2/DocScanner Aug 27, 2024 10-39 PM_27.jpg'},
            
            { name: '4 QuinPFS 0.5ml', image: 'Images/1723836769144-removebg-preview.png', detailImage: 'Images/Images2/DocScanner Aug 27, 2024 10-39 PM_16.jpg'},
            { name: 'BSSOL', image: 'Images/IMG_20240817_000946_548-removebg-preview.png', detailImage: 'Images/Images2/DocScanner Aug 27, 2024 10-39 PM_1.jpg'},
            { name: 'Carbatod', image: 'Images/1723836704662-removebg-preview.png', detailImage: 'Images/Images2/DocScanner Aug 27, 2024 10-39 PM_11.jpg' },
            { name: 'Tromide-Plus', image: 'Images/1723836661867-removebg-preview.png', detailImage: 'Images/Images2/DocScanner Aug 27, 2024 10-39 PM_5.jpg', description: 'Eye Drops/UNI-ED' },
            { name: 'P-Caine', image: 'Images/IMG_20240817_000525_607-removebg-preview.png', detailImage: 'Images/Images2/DocScanner Aug 27, 2024 10-39 PM_3.jpg', description: 'Eye Drops' },
            { name: 'BlueTod', image: 'Images/1723836725159-removebg-preview.png', detailImage: 'Images/Images2/DocScanner Aug 27, 2024 10-39 PM_24.jpg' },
            
            { name: 'POVISWAB', image: 'Images/1723836749701-removebg-preview.png', detailImage: 'Images/Images2/DocScanner Aug 27, 2024 10-39 PM_37.jpg', description: 'Swabstick' },
            { name: 'AKUSAID', image: 'Images/1723836686577-removebg-preview.png', detailImage: 'Images/Images2/DocScanner Aug 27, 2024 10-39 PM_25.jpg', description: 'UNI-ED' },
            { name: 'I-DEW', image: 'Images/IMG_20240817_001334_143-removebg-preview.png', detailImage: 'Images/Images2/DocScanner Aug 27, 2024 10-39 PM_33.jpg', description: 'LID Wipes' },
            { name: 'CYCLOFEZ & ENTODASE & Homacid', image: 'Images/Blank 2 Grids Collage3.png', detailImage: 'Images/Images2/DocScanner Aug 27, 2024 10-39 PM_23.jpg', description: 'Eye Drops & Injection' },
         ],
        'Anti-Glaucoma': [
            { name: 'ABPress & ABPressPF', image: 'Images/Blank 2 Grids Collage2.png', detailImage: 'Images/Images2/DocScanner Aug 27, 2024 10-39 PM_4.jpg', description: 'Eye Drops' },
            { name: 'DUO-2', image: 'Images/1723834578197-removebg-preview.png', detailImage: 'Images/Images2/DocScanner Aug 27, 2024 10-39 PM_35.jpg', description: 'Eye Drops' },
            { name: 'T-1 PF', image: 'Images/IMG_20240816_231841_029-removebg-preview.png', detailImage: 'Images/Images2/DocScanner Aug 27, 2024 10-39 PM_21.jpg', description: 'Eye Drops' },
            { name: 'T-BET PF', image: 'Images/IMG_20240816_232321_267-removebg-preview.png', detailImage: 'Images/Images2/DocScanner Aug 27, 2024 10-39 PM_14.jpg', description: 'Eye Drops' },
            { name: 'LatePM', image: 'Images/1723836520869-removebg-preview.png', detailImage: 'Images/Images2/DocScanner Aug 27, 2024 10-39 PM_32.jpg', description: 'Eye Drops' },
            { name: 'BITOD LS', image: 'Images/1723836563294-removebg-preview.png', detailImage: 'Images/Images2/DocScanner Aug 27, 2024 10-39 PM_30.jpg', description: 'Eye Drops' },
            { name: 'EN-DOR & EN-DOR Plus', image: 'Images/Blank 2 Grids Collage1.png', detailImage: 'Images/Images2/DocScanner Aug 27, 2024 10-39 PM_17.jpg', description: 'Eye Drops' },
            { name: 'Brent-LS', image: 'Images/1723835639207-removebg-preview.png', detailImage: 'Images/Images2/DocScanner Aug 27, 2024 10-39 PM_13.jpg', description: 'Eye Drops' },
            { name: 'Brintod', image: 'Images/IMG_20240816_232826_995-removebg-preview.png', detailImage: 'Images/Images2/DocScanner Aug 27, 2024 10-39 PM_19.jpg', description: 'Eye Drops' },
            { name: 'TIMOL-P & Press-DT', image: 'Images/Blank 2 Grids Collage.png', detailImage: 'Images/Images2/DocScanner Aug 27, 2024 10-39 PM_34.jpg', description: 'Eye Drops & Tablets' },
        ],
        'Dry Eye Range ': [
            { name: 'TheoTears D', image: 'Images/IMG_20240816_235821_110-removebg-preview.png', detailImage: 'Images/Images2/DocScanner Aug 27, 2024 10-39 PM_26.jpg', description: 'Eye Drops' },
            { name: 'TheoTears', image: 'Images/IMG_20240816_235349_872-removebg-preview.png', detailImage: 'Images/Images2/DocScanner Aug 27, 2024 10-39 PM_22.jpg', description: 'Eye Drops' },
            { name: 'CycloTears D', image: 'Images/1723836641046-removebg-preview.png', detailImage: 'Images/Images2/DocScanner Aug 27, 2024 10-39 PM_18.jpg', description: 'Eye Drops' },
            { name: 'CycloTears', image: 'Images/1723836578227-removebg-preview.png', detailImage: 'Images/Images2/DocScanner Aug 27, 2024 10-39 PM_31.jpg', description: 'Eye Drops/UNI-ED' },
            { name: 'SMARTMEGA-500', image: 'Images/1723839459591-removebg-preview.png', detailImage: 'Images/Images2/DocScanner Aug 27, 2024 10-39 PM_29.jpg', description: 'Capsules' },
            { name: 'BioTears', image: 'Images/1723836593231-removebg-preview.png', detailImage: 'Images/Images2/DocScanner Aug 27, 2024 10-39 PM_15.jpg', description: 'Eye Drops' },
            { name: 'Ophthapan', image: 'Images/1723836614034-removebg-preview.png', detailImage: 'Images/Images2/DocScanner Aug 27, 2024 10-39 PM_7.jpg', description: 'Eye Gel' },
            { name: 'TREHAMOIST', image: 'Images/IMG_20240818_114852_344-removebg-preview.png', detailImage: 'Images/Images2/DocScanner Aug 27, 2024 10-39 PM_2.jpg', description: 'Eye Drops' },
        ],
       'Other Range': [
            { name: 'OPTIGESIC CT', image: 'Images/IMG_20240817_001956_352-removebg-preview.png', detailImage: 'Images/Images2/DocScanner Aug 27, 2024 10-39 PM_9.jpg', description: 'Tablets' },
            { name: 'OPTICIDIC DSR', image: 'Images/1723839051780-removebg-preview.png', detailImage: 'Images/Images2/DocScanner Aug 27, 2024 10-39 PM_6.jpg', description: 'Capsules' },
            { name: 'MONODEXA', image: 'Images/IMG_20240817_000805_036-removebg-preview.png', detailImage: 'Images/Images2/DocScanner Aug 27, 2024 10-39 PM_10.jpg', description: 'Eye Drops' },
            { name: 'LV Flox & LV Flox Forte', image: 'Images/Images2/Blank 2 Grids2 Collage.png', detailImage: 'Images/Images2/DocScanner Aug 27, 2024 10-39 PM_36.jpg', description: 'Eye Drops' },
            
            { name: 'BESITOP', image: 'Images/IMG_20240817_000725_711-removebg-preview.png', detailImage: 'Images/Images2/DocScanner Aug 27, 2024 10-39 PM_8.jpg', description: 'Eye Drops' },
        ]
        };

   
function renderMedicines(category, filterQuery = '') {
    const categoryMedicines = medicines[category];
if (!categoryMedicines) return; // Check if the category exists

    medicineGallery.innerHTML = ''; // Clear existing items
    galleryTitle.textContent = category.replace('-', ' ').replace(/(^|\s)\S/g, l => l.toUpperCase());

    const filteredMedicines = medicines[category].filter(medicine =>
     medicine.name.toLowerCase().includes(filterQuery.toLowerCase())
);


    // If no medicines match the filter, display a message
    if (filteredMedicines.length === 0) {
        const noResultsMessage = document.createElement('p');
        noResultsMessage.textContent = 'No medicines available in this category or matching your search query.';
        noResultsMessage.style.textAlign = 'center';
        noResultsMessage.style.color = '#7f8c8d';
        medicineGallery.appendChild(noResultsMessage);
        return;
    }

    filteredMedicines.forEach(medicine => {
        const item = document.createElement('div');
        item.classList.add('medicine-item');
        const detailsUrl = `details.html?name=${encodeURIComponent(medicine.name)}&image=${encodeURIComponent(medicine.detailImage)}&description=${encodeURIComponent(medicine.description)}`;
        item.innerHTML = `
            <a href="${detailsUrl}">
                <img src="${medicine.image}" alt="${medicine.name}">
                <h2>${medicine.name}</h2>
                <p>${medicine.description || ''}</p>
            </a>
        `;
        medicineGallery.appendChild(item);
        
       
        // Trigger animation
        setTimeout(() => item.classList.add('in-view'), 100);
    });
}
    

   // Category selection with click and touch
   function categorySelectionHandler(event) {
    document.querySelector('.sidebar li.active')?.classList.remove('active');
    event.currentTarget.classList.add('active');
    currentCategory = event.currentTarget.getAttribute('data-category');
    renderMedicines(currentCategory); // Render medicines for the selected category
}

document.querySelectorAll('.sidebar li').forEach(li => {
    li.addEventListener('click', categorySelectionHandler);
    li.addEventListener('touchstart', categorySelectionHandler);
});


   


    
    // Perform search
    function performSearch() {
        const query = searchInput.value;
        renderMedicines(currentCategory, query);
    }
    

     // Attach the search function to the input event
    searchInput.addEventListener('input',  performSearch); 

    // Check if service workers are supported
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      // Register the service worker
      navigator.serviceWorker.register('/service-worker.js').then(registration => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }).catch(error => {
        console.error('ServiceWorker registration failed: ', error);
      });
    });
  }
  // Check if we are in standalone mode and try to enter immersive mode
  if (window.matchMedia('(display-mode: standalone)').matches) {
    if (window.AndroidFullScreen && typeof window.AndroidFullScreen.immersiveMode === 'function') {
        console.log('Standalone mode detected.');
        window.AndroidFullScreen.immersiveMode(
            () => console.log('Entered immersive mode successfully'),
            (error) => console.error('Failed to enter immersive mode', error)
        );
    } else {
        console.warn('AndroidFullScreen API not available or immersiveMode function is undefined.');
    }
  }

 // Function to check if the device is mobile or tablet
function isMobileOrTablet() {
    return window.matchMedia('(max-width: 1024px)').matches;
}


    // Check if the device is mobile or tablet
    if (isMobileOrTablet()) {
        const footer = document.querySelector('.footer');
        
        // Ensure the footer element exists
        if (footer) {
            document.addEventListener('focusin', (event) => {
                if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
                    footer.style.display = 'none';
                }
            });

            document.addEventListener('focusout', () => {
                footer.style.display = 'block';
            });
        } else {
            console.warn('Footer element not found.');
        }
    }
});



