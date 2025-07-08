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

    

    document.getElementById('info').addEventListener('toggle', function() {
        alert('The details element was toggled.');
      });

    // Show scroll to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 75) {
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

  //  Show calendar on date-time click
    window.showCalendar = function() {
        alert(`Today's date is: ${new Date().toLocaleDateString()}`);
    };


});

function showPopup(popupId, button) {
    document.getElementById(popupId).style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(btn => btn.classList.remove('active'));
}

function closeAllPopups() {
    closePopup('technicalSkillsPopup');
    closePopup('softSkillsPopup');
}

let softSkillsFull = false;
function toggleSoftSkills() {
    const softSkillsList = document.getElementById('softSkillsList');
    const toggleButton = document.getElementById('toggleSoftSkillsButton');
    if (!softSkillsFull) {
        const additionalSkills = [
            'Time Management',
            'Communication',
            'Active listening',
            'Creativity',
            'Confidence',
            'Willingness to learn',
            'Critical thinking',
            'Open-mindedness',
            'Work Ethic'
        ];
        additionalSkills.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            softSkillsList.appendChild(li);
        });
        toggleButton.textContent = 'Show Less';
        softSkillsFull = true;
    } else {
        const listItems = softSkillsList.querySelectorAll('li');
        listItems.forEach((li, index) => {
            if (index >= 9) li.remove();
        });
        toggleButton.textContent = 'Show More';
        softSkillsFull = false;
    }
}