export interface OtherWork {
  year: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
}

export const otherWork: OtherWork[] = [
  {
    year: "2024",
    title:
      "LSTM From Scratch",

    category:
      "Research / Machine Learning",

    description:
      "Implemented a dynamic Long Short-Term Memory model from scratch in C++ without machine-learning libraries as part of a research project.",

    tags: [
      "C++",
      "Deep Learning",
      "Research",
    ],
  },

  {
    year: "2024",
    title:
      "Application Beta Testing",

    category:
      "Software Testing",

    description:
      "Participated in beta testing for an internal Ministry of Energy and Mineral Resources application and identified 24 software issues during the testing session.",

    tags: [
      "QA",
      "Testing",
      "Bug Hunting",
    ],
  },
];