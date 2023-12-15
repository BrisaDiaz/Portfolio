export interface Project{
    id: number;
    slug: string;
    title: string;
    color: string;
    subtitle: string;
    captions: {
        src: string;
        alt: string;
    }
}