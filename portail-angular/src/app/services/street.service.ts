import { ISelectService, Options } from "./factory/ISelectService";

export class StreetService implements ISelectService {
    async getData(term: string, options: Options) {
        const { formModel } = options
        const { zip, locality } = formModel

        const result = await fetch(`http://localhost:3000/street?zip=${zip}&locality=${locality.title}`)
        const data = await result.json();
        const items = data.map((p: any) => ({ title: p.street, id: p.id }));
        const filtered = items.filter((p: any) => p.title?.toLowerCase().includes(term.toLowerCase()))

        return filtered
    }
}
