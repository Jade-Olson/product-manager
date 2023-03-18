import './App.css';
import Main from './views/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import Update from './components/ProductUpdate';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route element={<Main/>} path="/home" default />
        <Route element={<ProductDetails/>} path="/products/:id" />
        <Route element={<Update/>} path="/edit/:id"/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
