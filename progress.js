document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.toggleButton');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            if (targetElement.style.display === "none" || targetElement.style.display === '') {
                targetElement.style.display = "block";
                updateProgress(targetElement);
            } else {
                targetElement.style.display = "none";
            }
        });
    });

    function updateProgress(tableElement) {
        let rows = tableElement.querySelectorAll("tr");
        for(let i=0; i<rows.length; i++) {
            let progress = rows[i].querySelector(".progress");
            let value = rows[i].querySelector(".value");
    
            if(progress && value) {
                progress.style.width = value.innerText;
            }
        }
    }
});
