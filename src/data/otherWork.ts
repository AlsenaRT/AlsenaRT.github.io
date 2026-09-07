export interface OtherWork {
  year: string;
  title: string;
  category: string;
  description: string;
  meta: string[];
}

export const otherWork: OtherWork[] = [
  {
    year: "2024",
    title: "LSTM From Scratch",
    category: "Research / Development",
    description:
      "Implemented a dynamic Long Short-Term Memory network from scratch in C++ without relying on machine-learning libraries, as part of a three-month research project.",
    meta: [
      "C++",
      "Deep Learning",
      "800+ lines",
    ],
  },

  {
    year: "2024",
    title:
      "ESDM Application Beta Testing",
    category: "Software Testing",
    description:
      "Participated in a focused beta-testing session for a Ministry of Energy and Mineral Resources application, identifying and documenting 24 software issues.",
    meta: [
      "QA",
      "Black-box testing",
      "24 documented issues",
    ],
  },
];