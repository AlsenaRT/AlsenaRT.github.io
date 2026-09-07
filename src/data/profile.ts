export const profile = {
  introduction: [
    "I'm a UI/UX designer with a Computer Science background. Most of my work has involved systems with a lot of information behind the interface — institutional websites, internal administrative tools, dashboards, and existing software products.",
    "That technical background does not make development a second identity I try to compete with. It gives me another way to understand the design problem: what data exists, how an interface connects to an existing system, what implementation constraints are real, and where a design decision becomes expensive or impractical.",
  ],

  experience: [
    {
      period: "May 2026 - Sept. 2026",
      organization: "FMIPA Universitas Gadjah Mada",
      role: "UI/UX Designer",
      description:
        "Redesigned the user interface and information architecture for the university's institutional website, improving usability and accessibility for all users.",
    },
    
    {
      period: "Feb. 2026 - Apr. 2026",
      organization: "Datacakra",
      role: "UI/UX Designer Intern",
      description:
        "Worked across product-design and technical-support assignments, including a Smart Building dashboard concept for proposal communication and product surveying, information-architecture mapping, and requirements work around RekMed and SATUSEHAT.",
    },

    {
      period: "Aug. 2024 - Jan. 2025",
      organization:
        "FMIPA Universitas Gadjah Mada",
      role: "Full-stack Developer Intern",
      description:
        "Independently developed an academic monitoring and early-warning module inside an existing faculty administration system, covering approximately 1,500 student records, role-based access, reporting, notifications, and functional testing.",
    },
  ],

  education: {
    degree:
      "Computer Science",
    institution:
      "Universitas Gadjah Mada",
  },

  design: [
    "Figma",
    "Interface Design",
    "Responsive Design",
    "Information Architecture",
    "Wireframing",
    "Prototyping",
    "Design Systems",
  ],

  development: [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "CodeIgniter 4",
    "WordPress",
    "MySQL",
    "Git",
  ],

  workingAreas: [
    {
      number: "01",
      title:
        "Information-heavy interfaces",
      description:
        "I enjoy working out hierarchy, navigation, filtering, and interaction when the underlying information is more complicated than the screen should feel.",
    },

    {
      number: "02",
      title:
        "Design close to implementation",
      description:
        "I am comfortable discussing CMS constraints, frontend behaviour, data relationships, and technical trade-offs rather than treating the design file as an isolated deliverable.",
    },

    {
      number: "03",
      title:
        "Existing systems",
      description:
        "Several of my projects began with software or information structures that already existed, so understanding constraints before changing them has become an important part of how I work.",
    },
  ],
} as const;