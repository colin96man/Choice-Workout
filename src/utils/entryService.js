import tokenService from './tokenService';
const BASE_URL = '/api/entries';

//index
export function getAllWorkoutEntries() {
    return fetch(BASE_URL, {
        headers: {
            'Authorization': `Bearer ${tokenService.getTokenFromLocalStorage()}`
        }
    }).then(allEntries => allEntries.json());
}

//create
export function createWorkoutEntry(entryToCreate) {
    console.log(entryToCreate, '<--------- entryToCreate');
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${tokenService.getTokenFromLocalStorage()}`
        },
        body: JSON.stringify(entryToCreate)
    }).then(newEntry => newEntry.json());
}