document.querySelectorAll('.faqbox').forEach(box => {
    box.addEventListener('click', () => {
        box.classList.toggle('active');
    });
});