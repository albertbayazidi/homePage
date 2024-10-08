---
title: 'DIY IR-Camera'
date:  'sdasd'
svg: '<svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 16 16"><path fill="currentColor" d="M9.32 15.653a.81.81 0 0 1-.086-.855c.176-.342.245-.733.2-1.118a2.1 2.1 0 0 0-.267-.779a2 2 0 0 0-.541-.606a3.96 3.96 0 0 1-1.481-2.282c-1.708 2.239-1.053 3.51-.235 4.63a.75.75 0 0 1-.014.901a.87.87 0 0 1-.394.283a.84.84 0 0 1-.478.023c-1.105-.27-2.145-.784-2.85-1.603a4.7 4.7 0 0 1-.906-1.555a4.8 4.8 0 0 1-.263-1.797s-.133-2.463 2.837-4.876c0 0 3.51-2.978 2.292-5.18a.62.62 0 0 1 .112-.653a.56.56 0 0 1 .623-.147l.146.058a7.63 7.63 0 0 1 2.96 3.5c.58 1.413.576 3.06.184 4.527c.325-.292.596-.641.801-1.033l.029-.064c.198-.477.821-.325 1.055-.013c.086.137 2.292 3.343 1.107 6.048a5.5 5.5 0 0 1-1.84 2.027a6.1 6.1 0 0 1-2.138.893a.83.83 0 0 1-.472-.038a.87.87 0 0 1-.381-.29zM7.554 7.892a.42.42 0 0 1 .55.146q.06.09.075.198l.045.349c.02.511.014 1.045.213 1.536c.206.504.526.95.932 1.298a3.06 3.06 0 0 1 1.16 1.422c.22.564.25 1.19.084 1.773a4.1 4.1 0 0 0 1.39-.757l.103-.084c.336-.277.613-.623.813-1.017c.201-.393.322-.825.354-1.269c.065-1.025-.284-2.054-.827-2.972c-.248.36-.59.639-.985.804c-.247.105-.509.17-.776.19a.8.8 0 0 1-.439-.1a.83.83 0 0 1-.321-.328a.83.83 0 0 1-.035-.729c.412-.972.54-2.05.365-3.097a5.87 5.87 0 0 0-1.642-3.16c-.156 2.205-2.417 4.258-2.881 4.7a4 4 0 0 1-.224.194c-2.426 1.965-2.26 3.755-2.26 3.834a3.7 3.7 0 0 0 .459 2.043c.365.645.89 1.177 1.52 1.54C4.5 12.808 4.5 10.89 7.183 8.14l.372-.25z"/></svg>'
coolFactor: 5
---

# IR_interpolator

This project focuses on the initial testing and exploration of data interpolation from the AMG8833 sensor. The goal is to eventually develop a comprehensive IR camera using the insights gained from this stage.

## Overview

The main objective of this project is to understand the feasibility of data interpolation techniques applied to the output of the AMG8833 sensor. The AMG8833 sensor provides thermal data for a 8x8 pixel grid, through interpolation, we seek to enhance this resolution.

## Contents

In this repository, you will find:

<ul  class="custom-list">
  <li><strong>Dataset</strong>: The data collected from my AMG8833 sensor</li>
  <li><strong>Interpolation Script</strong>: The code used to perform data interpolation on the output from the AMG8833 sensor.</li>
  <li><strong>Future Plans</strong>: Discussion of how the gathered insights will be utilized in the subsequent stages of developing a proper IR camera.</li>
</ul>


## Demo

<div align="center">
  <iframe width="80%" style="min-height: 400px;" src="https://github.com/albertbayazidi/IR-Interpolation/assets/102351774/d3559252-e7f2-40f6-a795-8a5bb3ff11f0" frameborder="0" allowfullscreen></iframe>
</div>

## Future Steps

<ul class="custom-list">
  <li>Implement similar code in C++</li>
  <li>Test interpolation on ESP32</li>
  <li>Create a prototype with a built-in screen</li>
</ul>

If the ESP32 is unable to satisfy a decent framerate, I will do the interpolation on a server and just render the result on an ESP32. This, however, is a last resort. Before this, I will try splitting the work on both cores and maybe even iterative methods
