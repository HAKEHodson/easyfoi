# EasyFOI

A simple, modern website that makes it easy for anyone to draft a clear Freedom of Information (FOI) request to UK public authorities.

## Features

- Prominent search that opens WhatDoTheyKnow’s public archive of over a million requests and responses (so you can check if the information is already public)
- Step-by-step wizard to describe what you want, pick an authority, and generate a properly formatted request
- Ready-to-copy or download request letter based on ICO guidance
- Mailto link when a known FOI email is available
- Local browser tracker that estimates the 20-working-day deadline
- Guidance on rights, tips, refusals, and next steps (internal review → ICO)
- Dark mode
- Links to WhatDoTheyKnow (the established public archive and submission platform) and official ICO / GOV.UK resources

## How to use

1. Open `index.html` in any modern browser (double-click the file, or serve the folder with a simple static server).
2. Fill in the wizard.
3. Copy the request, download it, or open it in your email client.
4. Send it to the public authority (or, preferably, make the request via WhatDoTheyKnow so the response is published for everyone).

All request tracking data stays in your browser’s localStorage — nothing is uploaded.

## Notes

- FOI emails for authorities are approximate and should be verified on the authority’s website or via WhatDoTheyKnow.
- This tool provides general guidance only and is not legal advice.
- For the most comprehensive directory of public authorities and a permanent public archive of requests and responses, use [WhatDoTheyKnow](https://www.whatdotheyknow.com/).

## Deployment

The site is pure static HTML/CSS/JS. You can host it on any static host (GitHub Pages, Netlify, Cloudflare Pages, etc.) by uploading the three files.

Built to make public-sector scrutiny easier.
