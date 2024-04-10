const themeToggleBtn = document.getElementById('theme-toggle-btn');

themeToggleBtn.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('light-theme');
    } else {
        document.body.classList.remove('light-theme');
    }
});


// Get all menu items
const menuItems = document.querySelectorAll('.right-items li');

// Add event listener to each menu item
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        // Remove 'active' class from all menu items
        menuItems.forEach(item => {
            item.classList.remove('active');
        });

        // Add 'active' class to the clicked menu item
        this.classList.add('active');
    });
});


const revealTexts = document.querySelectorAll('.reveal-text');

function revealText() {
    let delay = 0;
    revealTexts.forEach((text, index) => {
        setTimeout(() => {
            text.classList.add('show');
        }, delay);
        delay += 1000; // Adjust the delay between each line
    });
}

window.addEventListener('load', revealText);
