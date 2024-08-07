import { useState, useEffect } from 'react';
import styles from '../../styles/pathSim.module.css';

export default function PathSim() {
    const [displayedPath, setDisplayedPath] = useState('');
    const currentPath = window.location.href;
    const match = currentPath.match(/http:\/\/[^\/]+\/(.*)/)[1];

    const fullPath = "~/" + match;

    useEffect(() => {
        let currentIndex = 0;
        const intervalId = setInterval(() => {
            setDisplayedPath(fullPath.slice(0, currentIndex));
            currentIndex++;
            if (currentIndex > fullPath.length) {
                clearInterval(intervalId);
            }
        }, 100);
        return () => clearInterval(intervalId);
    }, [fullPath]);

    return (
        <div className="flex">
            <span className={styles.cursorConteiner}>{displayedPath}</span>
            <span className={styles.cursor}>|</span>
        </div>
    );
}
