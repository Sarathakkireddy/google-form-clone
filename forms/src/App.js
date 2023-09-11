import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

function App() {
  return (
<>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/dash' element={<Dashboard/>}/>
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
