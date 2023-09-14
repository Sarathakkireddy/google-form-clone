import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Createform from './components/generate_form/Createform';

function App() {
  return (
<>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/dash' element={<Dashboard/>}/>
  <Route path='/cf' element={<Createform/>}/>
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
