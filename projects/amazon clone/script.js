// Language Dropdown Toggle
const languageSelector = document.querySelector('.language');
const languageDropdown = document.querySelector('.selector');
const languageOptions = document.querySelector('.language-options');

languageDropdown.addEventListener('click', () => {
    languageOptions.classList.toggle('active');  // Toggle visibility of the dropdown options
});

// Search Bar Toggle
const searchBar = document.querySelector('.nav-input');
const searchIcon = document.querySelector('.search-icon');

searchIcon.addEventListener('click', () => {
    searchBar.classList.toggle('expanded');  // Expand or collapse the search bar
});

// Cart Item Count Update
let cartItemCount = 0;
const cartCountDisplay = document.querySelector('.cart-item-count');

// Function to update cart count
function updateCartCount() {
    cartCountDisplay.textContent = cartItemCount;
}

// Adding an item to the cart (for demonstration)
const addToCartButtons = document.querySelectorAll('.add-to-cart'); // Add a class 'add-to-cart' to the relevant buttons

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartItemCount++;
        updateCartCount();
    });
});

// Hide search input when clicking outside
document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav-search')) {
        searchBar.classList.remove('expanded');
    }
});

// Dropdown toggle for Language Selector (example of a language dropdown with options)
const languageOptionsList = document.querySelector('.language-options');

if (languageOptionsList) {
    languageOptionsList.innerHTML = `
        <li><a href="#">English</a></li>
        <li><a href="#">Urdu</a></li>
        <li><a href="#">Somali</a></li>
        <li><a href="#">Hindi</a></li>
    `;
}