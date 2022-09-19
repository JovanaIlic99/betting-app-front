import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/header/Header";

import AccountPage from "./pages/Account";
import ContactPage from "./pages/Contact";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
function App() {
  return (
    <>
    <Header />
      <Routes>
          <Route index element={<HomePage />} />
          <Route path="account" element={<AccountPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="*" element={<HomePage />} />
      </Routes>
    <Footer />
    </>
  );
}

export default App;
