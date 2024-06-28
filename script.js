// Add any interactivity you need here
document.addEventListener('DOMContentLoaded', () => {
    // Example: Form submission alert
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Form submitted!');
    });
});
