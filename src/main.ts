import "./style.css";
import { type Experience } from "./data/cv.types";
import { getCvData } from "./data";

const app = document.querySelector<HTMLDivElement>("#app");

const params = new URLSearchParams(window.location.search);
const cvName = params.get("cv") ?? "sample";
const cvData = getCvData(cvName);

if (!app) {
  throw new Error("Could not find the #app element.");
}

function renderExperience(item: Experience): string {
  const companyMeta = [item.location, item.type].filter(Boolean).join(" · ");

  return `
    <article class="experience-item">
      <div class="company-header">
        <div>
          <h3 class="company-name">${item.company}</h3>

          ${companyMeta ? `<p class="company-meta">${companyMeta}</p>` : ""}
        </div>

        <span class="date">
          <b>${item.startDate} – ${item.endDate}</b>
        </span>
      </div>

      <div class="role-list">
        ${item.roles
          .map(
            (role) => `
              <section class="role-item">
                <div class="role-header">
                  <h4>
                    ${role.role}
                    <span class="role-duration">· ${role.duration}</span>
                  </h4>
                </div>

                <ul>
                  ${role.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
                </ul>
              </section>
            `,
          )
          .join("")}
      </div>
    </article>
  `;
}

function renderContactIcon(label: string): string {
  switch (label.toLowerCase()) {
    case "email":
      return `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"
          />
        </svg>
      `;

    case "linkedin":
      return `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M6.5 8.25H3V21h3.5V8.25ZM4.75 3A2.03 2.03 0 1 0 4.75 7.06 2.03 2.03 0 0 0 4.75 3ZM21 13.68c0-3.84-2.05-5.63-4.79-5.63-2.2 0-3.19 1.21-3.74 2.06V8.25H9V21h3.47v-6.31c0-1.66.32-3.27 2.38-3.27 2.03 0 2.05 1.9 2.05 3.38V21H21v-7.32Z"
          />
        </svg>
      `;

    case "phone":
      return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z"
      />
    </svg>
  `;
    case "portfolio":
      return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm7.93 9h-3.07a13.72 13.72 0 0 0-1.15-4.39A8.02 8.02 0 0 1 19.93 11ZM12 4.05c.84.98 1.77 2.91 2.16 5.95H9.84C10.23 6.96 11.16 5.03 12 4.05ZM8.29 6.61A13.72 13.72 0 0 0 7.14 11H4.07a8.02 8.02 0 0 1 4.22-4.39ZM4.07 13h3.07a13.72 13.72 0 0 0 1.15 4.39A8.02 8.02 0 0 1 4.07 13ZM12 19.95c-.84-.98-1.77-2.91-2.16-5.95h4.32c-.39 3.04-1.32 4.97-2.16 5.95Zm3.71-2.56A13.72 13.72 0 0 0 16.86 13h3.07a8.02 8.02 0 0 1-4.22 4.39Z"
      />
    </svg>
  `;
    case "artstation":
      return `
    <svg
      class="artstation-icon"
      viewBox="0 0 208.8 195.9"
      aria-hidden="true"
    >
      <g fill="currentColor">
        <path d="M51.4 123.3l8.9 15.4c1.8 3.5 5.4 5.9 9.5 5.9h59.3l-12.3-21.3H51.4z" />
        <path d="M157.2 123.4c0-2.1-.6-4.1-1.7-5.8l-34.8-60.4c-1.8-3.4-5.3-5.7-9.4-5.7H92.9l53.7 93 8.5-14.7c1.6-2.8 2.1-4 2.1-6.4z" />
        <path d="M108.1 108.1 84.2 66.6l-24 41.5h47.9z" />
      </g>
    </svg>
  `;

    default:
      return "";
  }
}

app.innerHTML = `
  <main class="cv">
    <header class="cv-header">
      <div class="identity">
        <div
          class="profile-photo"
          style="
            --photo-x: ${cvData.photo.translateX}px;
            --photo-y: ${cvData.photo.translateY}px;
            --photo-scale: ${cvData.photo.scale};
            --photo-position: ${cvData.photo.objectPosition ?? "center"};
          "
        >
          <img
            src="${cvData.photo.src}"
            alt="Portrait of ${cvData.name}"
          />
        </div>

        <div class="identity-text">
          <h1>${cvData.name}</h1>
          <p class="target-title">${cvData.targetTitle}</p>
          <p class="location">${cvData.location}</p>
          <p class="core-technologies">
            ${cvData.coreTechnologies.join(" · ")}
          </p>
        </div>
      </div>

      <div class="contact-panel">
        <address class="contact-icons">
          ${cvData.contacts
            .filter((contact) => contact.showIcon)
            .map(
              (contact) => `
                <a
                  class="contact-icon"
                  href="${contact.href}"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="${contact.label}"
                  title="${contact.label}"
                >
                  ${renderContactIcon(contact.label)}
                </a>
              `,
            )
            .join("")}
        </address>

        <address class="contact-details">
        ${cvData.contacts
          .filter(
            (contact) =>
              contact.label.toLowerCase() === "email" ||
              contact.label.toLowerCase() === "phone",
          )
          .map(
            (contact) => `
                <a
                  href="${contact.href}"
                >
                  ${contact.displayText}
                </a>
              `,
          )
          .join("")}
        </address>
      </div>
    </header>

    <section>
      <h2>Summary</h2>
      <p class="summary">${cvData.summary}</p>
    </section>

    <section>
      <h2>Experience</h2>
      <div class="section-content">
        ${cvData.experience.map(renderExperience).join("")}
      </div>
    </section>

    <section>
      <h2>Technical Skills</h2>

      <div class="skills-grid">
        ${cvData.skills
          .map(
            (group) => `
              <div class="skill-group">
                <h3>${group.name}</h3>
                <p>${group.skills.join(" · ")}</p>
              </div>
            `,
          )
          .join("")}
      </div>
    </section>
  </main>
`;
