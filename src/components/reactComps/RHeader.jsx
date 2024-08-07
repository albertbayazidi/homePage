import { useEffect, useRef, useState } from 'react';
import siteConfig from '../../site-config.js';
import getLinkTarget from '../../utils/link.js';
import PathSim from './pathSim.jsx'

export default function RHeader() {
  const navBarLogo = siteConfig.header.logo || [];
  const navLinks = siteConfig.header.navLinks || [];
  const headerRef = useRef(null);

  return (
    <>
      <header
        id="header"
        ref={headerRef}
        className="w-screen h-20 px-6 flex justify-between items-center relative">
        <div className="flex items-center h-full">
          <a href="/" className="mr-6" aria-label="Header Logo Image">
            <img id="logo" width="32" height="32" src={navBarLogo.src} alt={navBarLogo.alt} />
          </a>
          <nav className="flex flex-wrap gap-x-6 position-initial flex-row">
            {navLinks.map((link) => (
              <a
                key={link.text}
                aria-label={link.text}
                target={link.href.startsWith('http') ? '_blank' : '_self'}
                className="nav-link"
                href={link.href}
              >
                {link.text}
              </a>
            ))}
          </nav>
        </div>
        <PathSim/>
        <div className="flex gap-x-6">
            <a href="https://github.com/albertbayazidi" className="i-ri-github-line" />
        </div>
      </header>
    </>
  );
}
