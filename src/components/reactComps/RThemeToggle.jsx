import React, { useState, useEffect } from 'react';
import { isDark } from '../store.js';

export default function RToggleTheme(e) {
    function toggleHtmlClass() {
        const htmlElement = document.documentElement;
        if (isDark.value) {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }
    }

    function handleToggle(e) {
        const x = e.clientX;
        const y = e.clientY;
        const endX = 0;
        const endY = window.innerHeight;

        const startPath = `path('M ${x},${y} A 1 1 0 1 1 ${x} ${2*y} C ${x+20} ${y*1.4} ${x} ${y} ${x} ${y}')`;


        const middlePath = `path('M ${x},${y} A 1 1 0 1 1 ${x} ${3*y} C ${x*1.2} ${y*1.8} ${x} ${y} ${x} ${y}')`;

        const endPath = `path('M ${x-100},${y} A 1 1 0 1 1 ${x-100} ${2*y} C ${x-80} ${y*1.4} ${x-100} ${y} ${x-100} ${y}')`;

        const element = document.getElementById('currTheme');
        if (element) {
            element.className = !isDark.value 
                ? 'i-line-md:moon-rising-alt-loop rotate-230' 
                : 'i-line-md:moon-filled-alt-to-sunny-filled-loop-transition rotate-230';
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
            const clipPath = [startPath, endPath];

            console.log('Starting animation with clipPath:', clipPath);

            document.documentElement.animate(
                {
                    clipPath: isDark.value ? [...clipPath].reverse() : clipPath,
                },
                {
                    duration: 1500,
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

    return (
        <button onClick={(e) => { handleToggle(e) }}>
            <i id='currTheme' className='i-ri-moon-line rotate-230' />
        </button>
    )
}
