window.addEventListener('DOMContentLoaded', () => {
const buttons = document.querySelectorAll('.button-container button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
    const href = button.dataset.href;
    navigateWithTransition(href);
    });
});

function navigateWithTransition(href) {
    const mainContent = document.querySelector('.main-content');
    mainContent.classList.add('page-transition');
    setTimeout(() => {
    window.location.href = href;
    }, 500); // Transition duration + delay before navigation
}
});
