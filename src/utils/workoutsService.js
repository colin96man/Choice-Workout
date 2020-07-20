import tokenService from './tokenService';
const BASE_URL = '/api/workouts';

//index
export function getAllWorkouts() {
    return fetch(BASE_URL, {
        headers: {
            'Authorization': `Bearer ${tokenService.getTokenFromLocalStorage()}`
          }
    })
    .then(allWorkouts => allWorkouts.json());
}