export type SelectItem = {
    title: string
    id: string
}

export interface ISelectService {
    getData(term: string): Promise<SelectItem[]>;
}

