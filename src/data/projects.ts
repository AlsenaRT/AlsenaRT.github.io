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
    | "rekmed";
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
    slug: "student-performance-monitoring",
    title: "Student Performance Monitoring System",
    shortTitle: "Student Monitoring",
    year: "2024",
    category: "Design & Development",
    disciplines: [
      "UI/UX",
      "PHP",
      "MySQL",
    ],
    description:
      "A role-based academic monitoring feature designed and developed for FMIPA UGM's internal academic dashboard.",
    featured: true,

    preview: "monitoring"
  },

  {
    number: "03",
    slug: "rekmed-product-concepts",
    title: "RekMed Product Concepts",
    shortTitle: "RekMed",
    year: "2026",
    category: "Product UI",
    disciplines: [
      "UI Design",
      "Product Design",
      "Figma",
    ],
    description:
      "High-fidelity healthcare dashboard concepts created to communicate product ideas and proposed functionality to stakeholders.",
    featured: true,

    preview: "rekmed"
  },
];