import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from '../pages/Home'
import SignIn from '../pages/SignIn';
import Auth from '../utils/auth'

export default function NavBar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  }

  return (
    <BrowserRouter>
      <nav>
        <h1 className='title'>Master Driving School</h1>
        <ul>
          {Auth.loggedIn() ? (
            <>
              <NavLink to='' >Home</NavLink>
              <NavLink to='signin' onClick={logout}>Sign Out</NavLink>
            </>
          ) : (
            <>
              <NavLink to='signin'>Sign In</NavLink>
            </>
          )}

        </ul>
      </nav>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='signin' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}