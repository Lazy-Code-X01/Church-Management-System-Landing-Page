ScrollReveal().reveal('.form', { delay: 1000 });

function logo() {
    location.href = '../index.html'
}


const form = document.querySelector('.form')

form.onsubmit = (e) => {
    e.preventDefault()
    location.href='https://chms3-dashboard.netlify.app/'
}