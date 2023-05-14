import './App.css';
import Calc from './comp/Calc/Calc';
import {Routes, Route, Link} from 'react-router-dom'
import BMI from './comp/BMI/BMI';

function App() {
  return (
    <div className="App">
      <nav className='nav'>
        <Link className='link' to='/calc'>Calc</Link>
        <Link className='link' to='/bmi'>BMI</Link>
      </nav>
      <Routes>
        <Route path='/calc' element={<Calc/>}></Route>
        <Route path='/bmi' element={<BMI/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
