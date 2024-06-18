import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
    const {dispatch} = useContext(AppContext);

    const changeLocation = (newLoc) => {
        dispatch({
            type: 'CHG_LOCATION',
            payload: newLoc,
        });
    }

    return (
        <div className='alert alert-secondary'>
            <select name="Location" id="Location" onChange={event=>changeLocation(event.target.value)}>
                <option value="£">Uk(£)</option>
                <option value="₹">India(₹)</option>
                <option value="€">Europe(€)</option>
                <option value="CAD">Canada(CAD)</option>
            </select>	
        </div>
    );
};

export default Location;