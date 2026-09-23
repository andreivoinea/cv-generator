import { mkdir } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { chromium } from "playwright";
import { preview } from "vite";

const cvName = process.argv[2];

if (!cvName) {
  throw new Error("Missing CV name.\nUsage: npm run pdf -- <cv-name>");
}

const outputDirectory = path.resolve("output");
const outputFile = path.join(outputDirectory, `${cvName}.pdf`);

await mkdir(outputDirectory, { recursive: true });

const previewServer = await preview({
  preview: {
    host: "127.0.0.1",
    port: 4173,
    strictPort: false,
  },
});

const address = previewServer.httpServer.address();

if (!address || typeof address === "string") {
  throw new Error("Could not determine the Vite preview server port.");
}

const url = `http://127.0.0.1:${address.port}?cv=${encodeURIComponent(cvName)}`;
const browser = await chromium.launch();

try {
  const page = await browser.newPage();

  page.on("pageerror", (error) => {
    console.error("Page error:", error);
  });

  await page.goto(url, {
    waitUntil: "networkidle",
  });

  await page.locator(".cv").waitFor();

  // Ensure fonts and images are loaded before exporting.
  await page.evaluate(async () => {
    await document.fonts.ready;

    await Promise.all(
      Array.from(document.images).map((image) => {
        if (image.complete) {
          return Promise.resolve();
        }

        return new Promise((resolve, reject) => {
          image.addEventListener("load", resolve, { once: true });
          image.addEventListener("error", reject, { once: true });
        });
      }),
    );
  });

  await page.pdf({
    path: outputFile,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    tagged: true,
  });

  console.log(`PDF exported to:\n${outputFile}`);
} finally {
  await browser.close();

  await new Promise((resolve, reject) => {
    previewServer.httpServer.close((error) => {
      if (error) {
        reject(error);
        return;
      }

      resolve();
    });
  });
}
