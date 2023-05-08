import Image from "./image.interface";
export interface Video {
    id: number;
    title: string;
    description: string;
    duration: string;
    releaseDate: string;
    images: Image[];
}