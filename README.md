# CV Generator

A small, data-driven CV generator built with TypeScript, Vite, and Playwright.

CV content is separated from the layout and styling, so creating another CV only requires adding a new profile data file. Profiles can be previewed in the browser and exported to A4 PDFs.

## Features

- Multiple CV profiles
- Type-safe profile data
- Browser preview with Vite
- A4 PDF export with Playwright
- Configurable profile photo positioning and scaling
- Support for:
  - Contact links
  - Professional summary
  - Work experience
  - Multiple roles within the same company
  - Skills and skill categories
  - Education
  - Additional information

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/andreivoinea/cv-generator.git
cd cv-generator

npm install
```

Install Chromium for PDF generation:

```bash
npx playwright install chromium
```

Start the development server:

```bash
npm run dev
```

By default, the app loads the `sample` profile.

## Creating a CV

Profiles are stored in:

```text
src/data/profiles/
```

Copy:

```text
sample.data.ts
```

and rename it, for example:

```text
john.data.ts
```

Then replace the sample data with your own information.

## Previewing Profiles

Profiles are selected using the `cv` query parameter:

```text
http://localhost:5173/?cv=sample
```

```text
http://localhost:5173/?cv=john
```

If no profile is specified, `sample` is loaded by default.

## Exporting to PDF

Export a profile with:

```bash
npm run pdf -- <profile>
```

For example:

```bash
npm run pdf -- sample
```

The generated PDF is saved to:

```text
output/sample.pdf
```

The exporter builds the project, starts a local Vite preview server, waits for fonts and images to load, and exports the page as an A4 PDF.

## Profile Photos

Profile photos can be adjusted directly from the profile data:

```ts
photo: {
  src: "/profiles/photo.jpg",
  translateX: 0,
  translateY: -4,
  scale: 1.5,
  objectPosition: "center",
}
```

The image file size on disk matters for the final PDF output. A very large source image may look perfectly fine in the browser preview, but can significantly increase the generated PDF size.

For that reason, use a reasonably sized/compressed image for the CV itself. If you want the photo to appear larger or differently cropped, adjust it using `scale`, `translateX`, `translateY`, or `objectPosition` rather than relying on an unnecessarily large image file.

## Tech Stack

- TypeScript
- Vite
- HTML / CSS
- Playwright
