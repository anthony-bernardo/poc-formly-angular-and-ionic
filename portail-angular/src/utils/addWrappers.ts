type WrapperConfig = {
    field: string,
    wrappers: string[]
}

export const addWrappers = (fields: { config: { key: string, type: string }[] }, wrapperList: WrapperConfig[]) => {
    return fields.config.map(f =>
        wrapperList.some(w => w.field == f.key) ?
            ({ ...f, wrappers: wrapperList.find(w => w.field == f.key)!.wrappers })
            : f
    )
}