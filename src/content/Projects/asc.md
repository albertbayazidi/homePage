---
title: 'asC'
date: '2025-08-11'
svg: '<svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 24 24"><defs><symbol id="lineMdCogLoop0"><path fill="none" stroke-width="2" d="M15.24 6.37C15.65 6.6 16.04 6.88 16.38 7.2C16.6 7.4 16.8 7.61 16.99 7.83C17.46 8.4 17.85 9.05 18.11 9.77C18.2 10.03 18.28 10.31 18.35 10.59C18.45 11.04 18.5 11.52 18.5 12"><animate fill="freeze" attributeName="d" begin="1.2s" dur="0.3s" values="M15.24 6.37C15.65 6.6 16.04 6.88 16.38 7.2C16.6 7.4 16.8 7.61 16.99 7.83C17.46 8.4 17.85 9.05 18.11 9.77C18.2 10.03 18.28 10.31 18.35 10.59C18.45 11.04 18.5 11.52 18.5 12;M15.24 6.37C15.65 6.6 16.04 6.88 16.38 7.2C16.38 7.2 19 6.12 19.01 6.14C19.01 6.14 20.57 8.84 20.57 8.84C20.58 8.87 18.35 10.59 18.35 10.59C18.45 11.04 18.5 11.52 18.5 12"/></path></symbol></defs><g fill="none" stroke="currentColor" stroke-width="2"><g stroke-linecap="round" stroke-linejoin="round"><path stroke-dasharray="42" stroke-dashoffset="42" d="M12 5.5C15.59 5.5 18.5 8.41 18.5 12C18.5 15.59 15.59 18.5 12 18.5C8.41 18.5 5.5 15.59 5.5 12C5.5 8.41 8.41 5.5 12 5.5z" opacity="0"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.75s" values="42;0"/><set attributeName="opacity" begin="0.3s" to="1"/><set attributeName="opacity" begin="1.05s" to="0"/></path><path stroke-dasharray="20" stroke-dashoffset="20" d="M12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0"/></path></g><g opacity="0"><use href="#lineMdCogLoop0"/><use href="#lineMdCogLoop0" transform="rotate(60 12 12)"/><use href="#lineMdCogLoop0" transform="rotate(120 12 12)"/><use href="#lineMdCogLoop0" transform="rotate(180 12 12)"/><use href="#lineMdCogLoop0" transform="rotate(240 12 12)"/><use href="#lineMdCogLoop0" transform="rotate(300 12 12)"/><set attributeName="opacity" begin="1.05s" to="1"/><animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></g></g></svg>'
coolFactor: 10
---
# asC - ASCII Image Converter

**asC** is a tool that converts any supported image format into an ASCII art representation. 
This tool is perfect for generating text-based images from any of the supported formats.

## Gallery

<p align="center">
  <img src="https://github.com/albertbayazidi/asC/blob/main/output_image/notre_danm_son.png?raw=true" width="40%" style="display: inline-block; margin-right: 10px;" />
  <img src="https://github.com/albertbayazidi/asC/blob/main/output_image/guts_skull.png?raw=true" width="42%" style="display: inline-block;" />
</p>

<p align="center">
  <img src="https://github.com/albertbayazidi/asC/blob/main/output_image/junji_ito.png?raw=true" width="37%" style="display: inline-block; margin-right: 1%;" />
  <img src="https://github.com/albertbayazidi/asC/blob/main/output_image/going_merry.png?raw=true" width="45%" style="display: inline-block;" />
</p>

<p align="center">
<img src="https://github.com/albertbayazidi/asC/blob/main/output_image/guts_berserker_armor.png?raw=true" width="70%" style="display: inline-block;" />

## Features

<ul class="custom-list">
  <li><strong>Convert images to ASCII art</strong>: Transform any image into an ASCII version with customizable scaling and optional color inversion.</li>
  <li><strong>Support for multiple image formats</strong>: asC supports multiple image formats, making it versatile for different use cases.</li>
</ul>


## Usage

To use asC, run the following command in your terminal:

```bash
asC <image_file> [options]
```

## Example

Here’s a simple example of how to use asC:

```bash
asC guts_berserker_armor.jpg -r 0.5 -i > someFile.txt
```

In this example:
<ul class="custom-list">
  <li>The image located at <code>guts_berserker_armor.jpg</code> is converted to an ASCII representation and printed to the terminal.</li>
  <li>The output is scaled to 50% of the original size.</li>
  <li>The colors are inverted to improve visibility.</li>
  <li><strong>&lt;OPTIONAL&gt;</strong>: <code>&gt;</code> puts the output of the terminal to a file.</li>
</ul>

## Improvement 

I am planning on improving this with the following features:
<ul class="custom-list">
  <li>Video support</li>
  <li>GIF support</li>
  <li>Edge detection and styled representation</li>
</ul>


