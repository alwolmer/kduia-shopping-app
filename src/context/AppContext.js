import React, { createContext, useReducer } from 'react';

//5. Reducer

export const AppReducer = (state, action) => {
    let new_expenses = [];
    switch (action.type) {
        case 'ADD_QUANTITY':
            let updatedQty = false;
            state.expenses.map((expense) => {
                if (expense.name === action.payload.name) {
                    expense.quantity += action.payload.quantity;
                    updatedQty = true;
                }
                new_expenses.push(expense);
                return true;
            });
            state.expenses = new_expenses;
            action.type = "DONE";
            return {
                ...state,
            };


        case 'RED_QUANTITY': //reduce
            state.expenses.map((expense) => {
                if (expense.name === action.payload.name) {
                    expense.quantity -= action.payload.name;
                    expense.quantity = expense.quantity < 0 ? 0 : expense.quantity;
                }

                new_expenses.push(expense);
                return true;
            });

            state.expenses = new_expenses;
            action.type = 'DONE';
            return {
                ...state,
            }
        
        case 'DELETE_ITEM':
            state.expenses.map((expense) => {
                if (expense.name === action.payload.name) {
                    expense.quantity = 0;
                }
                new_expenses.push(expense);
                return true;
            });
            action.type = 'DONE'
            return {
                ...state,
            };
        
        case 'CHG_LOCATION': //change location
            state.Location = action.payload;
            action.type = 'DONE';
            return {
                ...state,
            };

        default:
            return state;

    }
}

//1. Initial state

const initialState = {
    expenses: [
        { id: "Shirt", name: 'Shirt', quantity: 0, unitprice: 500 },
        { id: "Jeans", name: 'Jeans', quantity: 0, unitprice: 300 },
        { id: "Dress", name: 'Dress', quantity: 0, unitprice: 400 },
        { id: "Dinner set", name: 'Dinner set', quantity: 0, unitprice: 600 },
        { id: "Bags", name: 'Bags', quantity: 0, unitprice: 200 },
    ],
};

// 2. Creates the context (to be imported by components)
export const AppContext = createContext();

//3. Creates the provider component (to wrap the UI components that will access the centralized state)

export const AppProvider = (props) => {
    //4. Set app state (reducer + initial state)
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // reduce takes a callback function to turn an array into a single value
    const totalExpenses = state.expenses.reduce((total, item) => {
        return (total = total + (item.unitprice * item.quantity));
    }, 0); //0 is the initial value

    state.CartValue = totalExpenses;

    return (
        <AppContext.Provider
            value={{
                expenses: state.expenses,
                CartValue: state.CartValue,
                dispatch,
                Location: state.Location
            }}>
            {props.children}
            {/* passing the state object to the children components for rendering */}
        </AppContext.Provider>
    );
};
