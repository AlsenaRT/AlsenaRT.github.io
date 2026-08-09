export interface Project {
  number: string;
  slug: string;
  title: string;
  shortTitle: string;
  year: string;
  category: string;
  disciplines: string[];
  description: string;
  featured: boolean;

  preview:
    | "fmipa"
    | "monitoring"
    | "rekmed"
    | "datacakra";
}

export const projects: Project[] = [
  {
    number: "01",
    slug: "fmipa-website-redesign",
    title: "FMIPA UGM Website Redesign",
    shortTitle: "FMIPA UGM",
    year: "2026",
    category: "UI/UX Design",
    disciplines: [
      "UI/UX",
      "Web Design",
      "WordPress",
    ],
    description:
      "A complete redesign of FMIPA UGM's faculty website, covering information architecture, visual direction, responsive interface design, and implementation within a constrained WordPress environment.",
    featured: true,

    preview: "fmipa"
  },

{
  number: "02",

  slug:
    "student-performance-monitoring",

  title:
    "Student Performance Monitoring System",

  shortTitle:
    "Student Monitoring",

  year:
    "2024 — 2025",

  category:
    "UI/UX + Full-stack",

  disciplines: [
    "UI/UX Design",
    "Full-stack Development",
    "Data Engineering",
    "System Testing",
  ],

  description:
    "A role-based academic monitoring module for FMIPA UGM that detects delayed mandatory milestones, scopes student data by organizational responsibility, sends staged email warnings, and integrates directly into the faculty's existing Persuratan system.",

  featured:
    true,

  preview:
    "monitoring",
},

  {
  number: "03",

  slug: 
    "rekmed-product-concepts",

  title:
    "Datacakra Product Design Internship",

  shortTitle:
    "Datacakra Internship",

  year:
    "2026",

  category:
    "UI/UX + Product Collaboration",

  disciplines: [
    "UI/UX Design",
    "Product Communication",
    "Information Architecture",
    "Technical Collaboration",
  ],

  description:
    "A remote UI/UX internship spanning a sales-facing Smart Building dashboard concept and requirements-mapping support for the integration of Datacakra's RekMed electronic medical record platform with SATUSEHAT.",

  featured:
    true,

  preview:
    "datacakra",
  },
];