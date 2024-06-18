document.addEventListener('scroll', function() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function showDateTime() {
    const date = new Date();
    alert(`Current Date and Time: ${date.toLocaleString()}`);
    document.getElementById('date-time').innerText = date.toLocaleString();
}