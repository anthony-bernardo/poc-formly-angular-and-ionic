import fetch from 'cross-fetch';

export class UserPreferencesService {
    async getData() {
        const result = await fetch(`http://localhost:3000/user-preferences`)
        return await result.json();
    }
}
