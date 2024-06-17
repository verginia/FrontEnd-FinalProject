/*document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    // You can add code here to handle form submission, like sending an email
    // For demonstration purposes, let's just log the form data
    const formData = new FormData(event.target);
    console.log("Form data:", Object.fromEntries(formData));
    alert("Your message has been sent!");
});

// check: https://www.freecodecamp.org/news/how-to-submit-a-form-with-javascript/
*/
document.addEventListener('DOMContentLoaded', function () {
    function updateDateTime() {
        const now = new Date();
        const dateTimeString = now.toLocaleString();
        document.getElementById('datetime').textContent = dateTimeString;
    }

    setInterval(updateDateTime, 1000);
    updateDateTime();

    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});