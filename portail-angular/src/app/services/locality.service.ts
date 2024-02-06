import { ISelectService } from "./ISelectService";

export class LocalityService implements ISelectService {
    async getData(term: string) {
        const result = await fetch(`https://api.escuelajs.co/api/v1/products/?title=${term}`)
        const data = await result.json();
        const items = data.map((p: any) => ({ title: p.title, id: p.id }));

        return items
    }
}
