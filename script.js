document.addEventListener('DOMContentLoaded', () => {
    // Add hover effect to skills
    const skillItems = document.querySelectorAll('.skills li, .personal-strength li');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', (e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.backgroundColor = '#5a8f9c';
        });
        item.addEventListener('mouseleave', (e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.backgroundColor = '#4a6f7c';
        });
    });

    // Print resume functionality
    const printButton = document.createElement('button');
    printButton.textContent = 'Print Resume';
    printButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #4a6f7c;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        z-index: 1000;
    `;
    printButton.addEventListener('click', () => {
        window.print();
    });
    document.body.appendChild(printButton);

    // Highlight contact info on click
    const contactSection = document.querySelector('.contact');
    contactSection.addEventListener('click', () => {
        contactSection.style.backgroundColor = contactSection.style.backgroundColor ? '' : 'rgba(74, 111, 124, 0.1)';
    });
}); 