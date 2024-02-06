import { ISelectService } from "./ISelectService";

export class ZipService implements ISelectService {
    async getData(term: string) {
        const result = await fetch(`https://dummyjson.com/products/search?q=${term}`)
        const data = await result.json();
        const items = data.products.map((p: any) => ({ title: p.title, id: p.id }));

        return items
    }
}
