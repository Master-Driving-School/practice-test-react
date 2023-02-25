import TestSelection from "./TestSelection";
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';


export default function Main() {
  return (
    <BrowserRouter>
      <main id='lenguage-selection'>
        <button className='button-lenguage spanish-button'><NavLink>Español</NavLink></button>
        <button className='button-lenguage english-button'>English</button>
      </main>
      <Routes>
        <Route path='spanish-test' element={<TestSelection /> } />
      </Routes>
    </BrowserRouter>

  );
}