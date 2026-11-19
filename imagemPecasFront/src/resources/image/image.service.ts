import { Image } from './image.resources';

class ImageService {
    baseURL: string = 'http://localhost:8080/v1/images';

    async buscar(query: string = "", extension: string = "") : Promise<Image[]> {
        const params = new URLSearchParams({ query, extension });
        const url = `${this.baseURL}?${params.toString()}`;
        const response = await fetch(url);
        return await response.json();
    }
      
}

export const useImageService = () => new ImageService();
