const DEFAULT_SCHEME = 'dark';
const SCHEME_KEY = 'scheme';
const SWITCH_NAME = 'mode-switch'

const ColorScheme = {
    DARK: 'dark',
    LIGHT: 'light',
};

function toggleScheme(checked) {
    if (!checked) {
        document.querySelectorAll('*').forEach((element) => {
            if (!element.classList.contains(SWITCH_NAME)) {
                element.classList.add(ColorScheme.LIGHT);
            }
        });
        window.localStorage.setItem(SCHEME_KEY, ColorScheme.LIGHT);
    } else {
        document.querySelectorAll('*').forEach((element) => {
            if (
                !element.classList.contains(SWITCH_NAME) 
                &&
                element.classList.contains(ColorScheme.LIGHT)
            ) {
                element.classList.remove(ColorScheme.LIGHT);
            }
        });
        window.localStorage.setItem(SCHEME_KEY, ColorScheme.DARK);
    }
};

const currScheme = window.localStorage.getItem(SCHEME_KEY) || DEFAULT_SCHEME;
const schemeToggler = document.getElementById(SWITCH_NAME);
const checked = currScheme === DEFAULT_SCHEME

schemeToggler.addEventListener('change', () => toggleScheme(schemeToggler.checked));
schemeToggler.checked = checked;
toggleScheme(checked);

