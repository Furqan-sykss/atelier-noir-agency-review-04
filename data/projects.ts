export type Project = {
  id: string;
  title: string;
  client: string;
  year: string;
  category: string;
  image: string;
  description: string;
  size: "wide" | "portrait" | "square";
};

export const projects: Project[] = [
  {
    id: "01",
    title: "[PROJECT NAME]",
    client: "[CLIENT NAME]",
    year: "2026",
    category: "Digital / Brand",
    image: "/images/cherrydeck-rMILC1PIwM0-unsplash.jpg",
    description: "A visual identity translated into a tactile digital environment.",
    size: "wide"
  },
  {
    id: "02",
    title: "[PROJECT NAME]",
    client: "[CLIENT NAME]",
    year: "2026",
    category: "Interactive / Motion",
    image: "/images/pexels-mikael-blomkvist-6476578.jpg",
    description: "A moving interface built around rhythm, material and interaction.",
    size: "portrait"
  },
  {
    id: "03",
    title: "[PROJECT NAME]",
    client: "[CLIENT NAME]",
    year: "2025",
    category: "Creative Development",
    image: "/images/pexels-silverkblack-23496709.jpg",
    description: "An editorial commerce experience with a deliberately quiet interface.",
    size: "square"
  }
];
