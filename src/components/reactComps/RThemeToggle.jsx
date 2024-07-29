import { isDark } from '../store.js';

export default function RToggleTheme(e) {
    const endRadius = 1600;
    const x = e.clientX;
    const y = e.clientY;

    const element = document.getElementById('currTheme');
    if (element) {
        element.className = !isDark.value ? 'i-ri-moon-line' : 'i-ri-sun-line';
    }

    if (!document.startViewTransition) {
        console.warn('startViewTransition API is not supported.');
        isDark.set(!isDark.value);
        toggleHtmlClass();
        return;
    }

    const transition = document.startViewTransition(async () => {
        isDark.set(!isDark.value);
        toggleHtmlClass();
    });

    transition.ready.then(() => {
        const clipPath = [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
        ];
        console.log('Starting animation with clipPath:', clipPath);

        document.documentElement.animate(
            {
                clipPath: isDark.value ? [...clipPath].reverse() : clipPath,
            },
            {
                duration: 1000,
                easing: 'ease-in',
                pseudoElement: isDark.value
                    ? '::view-transition-old(root)'
                    : '::view-transition-new(root)',
            }
        );
    }).catch((error) => {
        console.error('Error during transition:', error);
    });

    transition.finished.then(() => {
        console.log('Transition finished');
    });
}

function toggleHtmlClass() {
    const htmlElement = document.documentElement;
    if (isDark.value) {
        htmlElement.classList.add('dark');
    } else {
        htmlElement.classList.remove('dark');
    }
}
