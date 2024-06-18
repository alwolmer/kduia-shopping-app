import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { AppProvider } from './context/AppContext';
import CartValue from './components/CartValue';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <CartValue />
        <h3 className='mt-3'>Shopping Cart</h3>
        <div className='row '>
            <div className='col-sm'>
                <ExpenseList />
            </div>
        </div>
      </AppProvider>
      {/* <h1>Teste</h1>
      <CartValue /> */}
    </div>
  );
}

export default App;