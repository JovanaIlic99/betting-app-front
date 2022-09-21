import { Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/header/Header";

import AccountPage from "./pages/Account";
import ContactPage from "./pages/Contact";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import { useState } from "react";

function App() {

  const [loggedIn, isLoggedIn] = useState(false);
  const [role, setRole] = useState("");

  function isLoggedInHandler(logIn){
    isLoggedIn(logIn);
  }

  function setRoleHandler(new_role){
    setRole(new_role);
  }

  let home=<LoginPage setLoggedIn={isLoggedInHandler} role={role} setRole={setRole}/>;
  if(loggedIn){
    home=<HomePage setLoggedIn={isLoggedInHandler} setRole={setRole} role={role}/>;
  }else{
    home=<LoginPage setLoggedIn={isLoggedInHandler} role={role} setRole={setRole}/>
    }

  return (
    <>
    <Header loggedIn={loggedIn}/>
      <Routes>
          <Route path="/account" element={<AccountPage setLoggedIn={isLoggedInHandler} setRole={setRoleHandler} role={role}/>} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage setLoggedIn={isLoggedInHandler} setRole={setRoleHandler} role={role}/>} />
          <Route path="/signup" element={<SignUpPage setLoggedIn={isLoggedInHandler} setRole={setRoleHandler} role={role}/>} />
          <Route path="/" element={<HomePage loggedIn={loggedIn} setLoggedIn={isLoggedInHandler} setRole={setRoleHandler} role={role}/>} />
      </Routes>
    <Footer />
    </>
  );
}

export default App;
