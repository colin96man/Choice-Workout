import React from 'react';
import { format } from 'date-fns';
import './WorkoutCard.css'

function WorkoutCard({ entryFromParent, handleDeleteEntry}) {
    return (
        <div className="wo-card">
            <h3 className='card-head'>Routine For <span className='card-date'>{format(new Date(entryFromParent.date), 'MM/dd/yyyy')}</span></h3>
            <ul>
                {entryFromParent.workouts.map((workout, idx) => <li className='card-li' key={workout._id} value={workout}>{workout.description}</li>)}
            </ul>
            <button className='del-btn' onClick={() => handleDeleteEntry(entryFromParent._id)}>DELETE</button>
        </div>
    )
}

export default WorkoutCard;