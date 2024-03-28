import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductAll from './pages/ProductAll';
import Login from './pages/Login';
import PrivateRoute from './route/PrivateRoute';

const App = () => {
  const [authenticate, setAuthenticate] = useState(false) // true:로그인
  useEffect(() => {
    console.log("로그인", authenticate);
  }, [authenticate]);

  return (
    <div>
      <Navbar authenticate={ authenticate } setAuthenticate={ setAuthenticate }/>
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuthenticate={ setAuthenticate } />} />
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} />} />
      </Routes>
    </div>
  )
}

export default App;

// 1. 총 3개의 페이지 (전체상품 / 로그인 / 상품상세페이지)
// 2. 전체상품페이지 : 전체 상품을 볼 수 있다.
// 3. 로그인페이지 : 로그인버튼을 클릭, 상품페이지클릭시(로그인X)
// 4. 상품상세페이지 : 로그인O 경우 (단, 로그아웃하면 로그인페이지가 보이도록)
// 5. 로그인을하면 로그아웃으로, 로그아웃하면 로그인으로