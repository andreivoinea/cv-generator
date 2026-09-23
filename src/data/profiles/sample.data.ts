import type { CvData } from "../cv.types";

export const cvData = {
  name: "Your Name",

  photo: {
    src: "/profiles/sample-profile.png",
    translateX: 0,
    translateY: 0,
    scale: 1.2,
    objectPosition: "center center",
  },

  targetTitle: "Your Job Title",
  location: "City, Country",

  coreTechnologies: ["Core Skill #1", "Core Skill #2", "Core Skill #3"],

  summary:
    "Write a short professional summary describing your experience, main strengths, areas of expertise, and the type of work you do. " +
    "Keep it concise and focused on you!",

  contacts: [
    {
      label: "Portfolio",
      displayText: "Portfolio",
      href: "https://example.com",
      showIcon: true,
    },
    {
      label: "LinkedIn",
      displayText: "LinkedIn",
      href: "https://www.linkedin.com/in/example",
      showIcon: true,
    },
    {
      label: "Email",
      displayText: "you@example.com",
      href: "mailto:you@example.com",
      showIcon: true,
    },
    {
      label: "Phone",
      displayText: "+00 000 000 000",
      href: "tel:+00000000000",
      showIcon: true,
    },
  ],

  experience: [
    {
      company: "Company Name",
      location: "City, Country",
      startDate: "Jan 2023",
      endDate: "Present",
      type: "Hybrid",
      roles: [
        {
          role: "Current Job Title",
          duration: "3 yrs",
          bullets: [
            "Describe one of your main responsibilities or areas of ownership.",
            "Highlight a project, achievement, or measurable result.",
            "Describe how you collaborated with colleagues, clients, or stakeholders.",
            "Mention a process, system, product, or workflow you improved.",
            "Keep it short and concise",
          ],
        },
      ],
    },

    {
      company: "Previous Company",
      location: "City, Country",
      startDate: "Jan 2020",
      endDate: "Dec 2022",
      type: "Remote",
      roles: [
        {
          role: "Previous Job Title",
          duration: "3 yrs",
          bullets: [
            "Describe the type of work you performed in this position.",
            "Highlight an important contribution or accomplishment.",
            "Mention relevant responsibilities, projects, or collaboration.",
            "Keep it short and concise",
          ],
        },

        {
          role: "Earlier Job Title",
          duration: "1 yr",
          bullets: [
            "Describe your responsibilities in this earlier position.",
            "Highlight how your role or responsibilities developed over time.",
            "Keep it short and concise",
          ],
        },
      ],
    },
  ],

  skills: [
    {
      name: "Category #1",
      skills: ["Skill #1", "Skill #2", "Skill #3"],
    },
    {
      name: "Category #2",
      skills: ["Skill #4", "Skill #5", "Skill #6"],
    },
    {
      name: "Category #3",
      skills: ["Skill #7", "Skill #8", "Skill #9"],
    },
    {
      name: "Category #4",
      skills: ["Skill #10", "Skill #11", "Skill #12"],
    },
  ],

  education: [
    {
      institution: "University or Institution",
      degree: "Degree or Qualification",
      startDate: "2016",
      endDate: "2020",
    },
  ],

  additionalInformation: [
    {
      name: "Languages",
      items: ["Language #1 — Proficiency", "Language #2 — Proficiency"],
    },
    {
      name: "Certifications",
      items: ["Certification #1", "Certification #2"],
    },
    {
      name: "Interests",
      items: ["Interest #1", "Interest #2", "Interest #3"],
    },
    {
      name: "Other",
      items: ["Other #1", "Other #2", "Other #3"],
    },
  ],
} satisfies CvData;
