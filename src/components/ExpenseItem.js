import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, Location } = useContext(AppContext);
    
    const handleItemDelete = () => {
        const item = {
            name: props.name,
        };

        console.log(props.name)

        dispatch({
            type: 'DELETE_ITEM',
            payload: item,
        });
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.quantity}</td>
            <td>{Location}{parseInt(props.unitprice)}</td>
            <td>{Location}{parseInt(props.quantity)*parseInt(props.unitprice)}</td>
            <td><FaTimesCircle role='button' size="2.2em" color="red" onClick={handleItemDelete}></FaTimesCircle></td>

        </tr>
    );
};

export default ExpenseItem;
