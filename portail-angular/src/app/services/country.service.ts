
import { ISelectService } from "./factory/ISelectService";

export class CountryService implements ISelectService {
    async getData(term: string) {
        const result = await fetch(`https://restcountries.com/v3.1/name/${term}`)
        const data = await result.json();
        const items = data.map((p: any) => ({ title: p.name.common, id: p.name.common }));

        return items
    }
}