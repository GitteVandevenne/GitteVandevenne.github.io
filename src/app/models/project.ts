export interface ProjectAttributes {
    title: string;
    client: string;
    summary: string;
    role: string;
    tags: string[];
    coverImage?: string;   // when absent, render a solid #D5C8D2 block
    cardImage?: string;
    gallery?: string[];
    order: number;         // sort key for the home page card list
}