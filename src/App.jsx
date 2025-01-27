import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home"
import CheckLogin from "./pages/CheckLogin"
import Register from "./pages/Register"
import CryptoDetail from "./pages/CryptoDetail";
import Trending from "./components/Trending";
import UserLayout from "./layouts/UserLayout";
import Markets from "./components/Markets";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";

function App() {

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path={""} element={<Home />} />

        <Route path={"market"} element={<UserLayout />}>
          <Route path={""} element={<Markets />} />
          <Route path={"trend"} element={<Trending />} />
        </Route>
        <Route path={"coin/:id"} element={<CryptoDetail />} />
        <Route path={"feed"} element={<Feed /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
