import React, { useState, useEffect } from 'react';
import { isDark } from '../store.js';

export default function RToggleTheme(e) {
    const x = e.clientX;
    const y = e.clientY;

    const element = document.getElementById('currTheme');
    if (element) {
        element.className = !isDark.value ? 'i-line-md:moon-rising-alt-loop' : 'i-line-md:moon-filled-alt-to-sunny-filled-loop-transition';
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
            `circle(2000px at ${x}px ${y}px)`,
        ];
        console.log('Starting animation with clipPath:', clipPath);
        console.log(width)

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

    
}

function toggleHtmlClass() {
    const htmlElement = document.documentElement;
    if (isDark.value) {
        htmlElement.classList.add('dark');
    } else {
        htmlElement.classList.remove('dark');
    }
}
