import { ISelectService, Options } from "./factory/ISelectService";
import fetch from 'cross-fetch';

export class LocalityService implements ISelectService {
    async getData(term: string, options: Options) {
        const { formModel } = options
        const { zip } = formModel

        const result = await fetch(`http://localhost:3000/locality?zip=${zip}`)
        const data = await result.json();
        const items = data.map((p: any) => ({ title: p.city, id: p.id }));
        const filtered = items.filter((p: any) => p.title.includes(term))

        return filtered
    }
}
