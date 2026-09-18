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
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1800&q=85",
    description: "A visual identity translated into a tactile digital environment.",
    size: "wide"
  },
  {
    id: "02",
    title: "[PROJECT NAME]",
    client: "[CLIENT NAME]",
    year: "2026",
    category: "Interactive / Motion",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=85",
    description: "A moving interface built around rhythm, material and interaction.",
    size: "portrait"
  },
  {
    id: "03",
    title: "[PROJECT NAME]",
    client: "[CLIENT NAME]",
    year: "2025",
    category: "Creative Development",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1600&q=85",
    description: "An editorial commerce experience with a deliberately quiet interface.",
    size: "square"
  }
];
