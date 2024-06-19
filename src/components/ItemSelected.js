import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ItemSelected = (props) => {
    const {dispatch, expenses} = useContext(AppContext);

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [action, setAction] = useState('ADD_QUANTITY');

    const submitEvent = () => {
        console.log(`name: ` + name + `\n quantity: ` + quantity + `\n action: ` + action)
        const item = {
            name: name,
            quantity: parseInt(quantity),
        };

        dispatch({
            type: action,
            payload: item,
        });

        setQuantity('');
    };

    return (
        <div>
            <div className='row'>
                <div className='input-group mb-3' style={{marginLeft: '2rem'}}>
                    <div className='input-group-prepend'>
                        <label className='input-group-text' htmlFor='inputGroupSelect01'>Items</label>
                    </div>
                    <select className='custom-select' id='inputGroupSelect01' onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        {expenses.map((expense) => (
                            <option key={expense.name} value={expense.name} name={expense.name}>{expense.name}</option>
                        ))}
                    </select>
                    <div className='input-group-prepend' style={{marginLeft: '2rem'}}>
                        <label className='input-group-text' htmlFor='inputGroupSelect02'>Quantity</label>
                    </div>
                        <select className='custom-select' id='inputGroupSelect01' onChange={(event) => setAction(event.target.value)}>
                            <option defaultValue value='ADD_QUANTITY' name='Add'>Add</option>
                            <option value='RED_QUANTITY' name='Reduce'>Reduce</option>
                        </select>
                        <span className="eco" style={{ marginLeft: '2rem', marginRight: '8px'}}></span>
                        <input
                            required
                            type='number'
                            id='cost'
                            value={quantity}
                            style={{size: 10}}
                            onChange={(event) => setQuantity(event.target.value)}>
                        </input>
                        <button className='btn btn-primary' onClick={submitEvent} style={{marginLeft: '2rem'}}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default ItemSelected;