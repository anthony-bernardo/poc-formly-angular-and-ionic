import { selectFactoryConfig } from "../app.config"

export class SelectItemServiceFactory {
    create(fieldKey: string) {

        const className = selectFactoryConfig[fieldKey as keyof typeof selectFactoryConfig]

        if (!className) {
            throw new Error("service do not exist for this field")
        }

        return new className()
    }
}

