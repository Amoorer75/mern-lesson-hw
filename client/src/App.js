import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/routes/Home';
import Items from './components/routes/Items';
import ItemCreate from './components/routes/ItemCreate';
import Item from './components/routes/Item';
import ItemEdit from './components/routes/ItemEdit';


function App() {
  const location = useLocation();
  
  return (
    <div className="App">
      <h3>{location.state ? location.state.msg: null }</h3>

      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/grocerylist' element={<Items />} />
        <Route path='/create-grocerylist' element={<ItemCreate />} />
        <Route path='/grocerylist/:id' element={<Item />} />
        <Route path='/grocerylist/:id/edit' element={<ItemEdit />} />


      </Routes>
    </div>
  );
}

export default App;
