
export class UserPreferencesService {
    async getData() {
        return new Promise(async (resolve, reject) => {
            const result = await fetch(`http://localhost:3000/user-preferences`)
            const data = await result.json();

            resolve(data)
        })
    }
}
