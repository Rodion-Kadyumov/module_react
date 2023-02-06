import Products from './Pages/Products/Products';
import Basket from './Pages/Basket/Basket';
import ProductDetail from './Pages/Detail/ProductDetail';
import Entry from '../src/Pages/Entry/Entry'
import { Routes, Route } from 'react-router-dom'


function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/basket/:id' element={<ProductDetail />} />
        <Route path='/basket' element={<Basket />} />
        <Route path='/Entry' element={<Entry />} />
      </Routes>
    </div>
  );
}

export default App;