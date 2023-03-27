function toggleScheme(checked) {
    if (!checked) {
        document.querySelectorAll('*').forEach((element) => {
            if (!element.classList.contains('mode-switch')) {
                element.classList.add('light');
            }
        });
    } else {
        document.querySelectorAll('*').forEach((element) => {
            if (
                !element.classList.contains('mode-switch') 
                &&
                element.classList.contains('light')
            ) {
                element.classList.remove('light');
            }
        });
    }
};

const schemeToggler = document.getElementById('mode-switch');
schemeToggler.addEventListener('change', () => toggleScheme(schemeToggler.checked));

