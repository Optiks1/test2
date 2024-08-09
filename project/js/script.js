document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.pagecrm_button');
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.classList.add('hover');
        });
        button.addEventListener('mouseout', function() {
            this.classList.remove('hover');
        });
        button.addEventListener('click', function() {
            alert('Button clicked!');
        });
    });
});
