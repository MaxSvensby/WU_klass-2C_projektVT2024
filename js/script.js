let texts = document.querySelectorAll('.logo_text');

texts.forEach(text => {
    // separera alla bokstäver
    text.innerHTML = text.innerHTML.split('').map((letters, i) => `<span style="transition-delay:${i * 40}ms;filter:hue-rotate(-${i * 10}deg)">${letters}</span>`).join('');
});

const burger = document.getElementById('burger')
const nav = document.getElementById('nav-links')

function toggleMenu() {
    nav.classList.toggle('nav-active')
    burger.classList.toggle('crossed_line')
}

burger.addEventListener('click', toggleMenu)