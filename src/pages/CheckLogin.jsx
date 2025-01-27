import React, { useState } from "react"
import Home from "../components/Home"
import Login from "./Login"


const CheckUser = () => {
  
  const goToApp = () => {
    localStorage.setItem("user", true);
  }

  return (
    <div>
    {localStorage.getItem("user")?
      <Home/>
      :
      <Login goToApp={goToApp}/>
    }
    </div>
  )
}

export default CheckUser