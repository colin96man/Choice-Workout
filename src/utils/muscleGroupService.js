import tokenService from './tokenService';
const BASE_URL = '/api/muscleGroups';

//index
export function getAllMuscleGroups() {
    return fetch(BASE_URL, {
        headers: {
            'Authorization': `Bearer ${tokenService.getTokenFromLocalStorage()}`
          }
    })
    .then(allMuscleGroups => allMuscleGroups.json());
}