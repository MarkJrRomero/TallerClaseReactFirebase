import './App.css';
import Show from './componnets/Show'
import Create from './componnets/Creat'
import Edit from './componnets/Show'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>

        <Route path='/' element= { <Show />} />
        <Route path='/create' element= { <Create />} />
        <Route path='/edit/:id' element= { <Edit />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;