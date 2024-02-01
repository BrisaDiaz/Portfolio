export interface Caption {
  src: string;
  alt?: string;
  placeholder?: string;
}
type TechnologiesCategory = "language" | "frontend" | "testing" | "hosting";

export interface Project {
  id: number;
  slug: string;
  color?: string;
  background?: string;
  title: string;
  subtitle: string;
  summary: string;
  icon: Caption;
  captions: Caption[];
  technologies: {
    [key in TechnologiesCategory]?: string[];
  };
  credentials?: {
    email: string;
    password: string;
  };
  source_code?: string;
  demo?: string;
}
