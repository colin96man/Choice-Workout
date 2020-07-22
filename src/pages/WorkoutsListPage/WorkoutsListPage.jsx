import React from 'react';
import WorkoutCard from '../../components/WorkoutCard/WorkoutCard';

function WorkoutsListPage({ entriesFromParent, handleDeleteEntry}) {   
    return (
        <div>
            <h1>My Workouts</h1>
            <div>
                {entriesFromParent.map(entry =>
                    <WorkoutCard 
                        key={entry._id}
                        entryFromParent={entry}
                        handleDeleteEntry={handleDeleteEntry}
                    />
                )}
            </div>
        </div>
    )
}

export default WorkoutsListPage;