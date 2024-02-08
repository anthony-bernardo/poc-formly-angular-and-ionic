export const resetIfEmpty = (field: any, props: any, form: any) => {
    const resetIfEmpty = props.resetIfEmpty
    if (resetIfEmpty === undefined) return

    form.valueChanges.subscribe((value: any) => {
        const values = resetIfEmpty.map((field: any) => value[field])
        const areEmpty = values.includes("")

        if (areEmpty) {
            if (field.formControl.value === undefined) return

            field.formControl.setValue(undefined)
        }
    })
}
