import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';

import AuthSignUpPage from '../Pages/Auth_Sign_Up_Page/Auth_Sign_Up_Page';
import AuthLoginPage from '../Pages/Auth_Login_Page/Auth_Login_Page';
import HomePage from '../Pages/Home_Page/Home_Page';
import MissingPage from '../Pages/Missing_Page/Missing_Page';


function App() {

  return (
    <main className="app_main">
      <Routes>
        <Route exact path='/' element={<HomePage />}></Route>
        <Route exact path='/signup' element={<AuthSignUpPage />}></Route>
        <Route exact path='/login' element={<AuthLoginPage />}></Route>
        <Route path='*' element={<MissingPage />}></Route>

        {/* <Route element={<ProtectedRoute navigate={'/login'} outlet={'/wishlist'} />}>
          <Route exact path='/wishlist' element={<WishListPage />}></Route>
        </Route> */}

      </Routes>
    </main>
  );
}

export default App;
