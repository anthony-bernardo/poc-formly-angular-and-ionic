export type SelectItem = {
    title: string
    id: string
}

export type Options = {
    formModel: any
}

export interface ISelectService {
    getData(term: string, options?: Options): Promise<SelectItem[]>;
}

