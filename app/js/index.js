document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const dateTimeDisplay = document.getElementById('date-time');
    let dialog = document.getElementById("search-dialog");
    let btn = document.getElementById("search-button");
    let closeButton = document.querySelector(".close-button");
    let languageSelect = document.getElementById("language-select");
  

    // Show dialog modal
    btn.onclick = function() {
        dialog.showModal();
    }

    closeButton.onclick = function() {
        dialog.close();
    }
/*
    dialog.addEventListener('click', function(event) {
        if (event.target === dialog) {
            dialog.close();
        }
    });
*/
    languageSelect.onchange = function() {
        var selectedLanguage = languageSelect.value;
        alert("Language selected: " + selectedLanguage);
        // Add your language change logic here
    }

    // Show scroll to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 200) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Display current date and time
    function updateDateTime() {
        const now = new Date();
        dateTimeDisplay.textContent = now.toLocaleString();
    }
    updateDateTime();
    setInterval(updateDateTime, 1000);

    // Show calendar on date-time click
    window.showCalendar = function() {
        alert(`Today's date is: ${new Date().toLocaleDateString()}`);
    };
});