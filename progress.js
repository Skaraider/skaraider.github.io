document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.toggleButton');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
            if (targetElement.style.display === "none") {
                targetElement.style.display = "block";
            } else {
                targetElement.style.display = "none";
            }
        });
    });
});
