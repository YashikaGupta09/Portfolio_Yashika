const toggleBtn = document.getElementById('theme-toggle-btn');

function toggleTheme() {
    document.body.classList.toggle('light-theme');
}

toggleBtn.addEventListener('change', toggleTheme);

const menuItems = document.querySelectorAll('.right-items li');

menuItems.forEach(item => {
    item.addEventListener('click', function() {
        
        menuItems.forEach(item => {
            item.classList.remove('active');
        });

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
        delay += 1000;
    });
}

window.addEventListener('load', revealText);
