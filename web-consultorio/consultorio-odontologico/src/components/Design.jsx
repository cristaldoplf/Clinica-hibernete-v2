import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './Navbar';
import Footer from './Footer';
import Login from './Login';
import NotFound from './NotFound';

import DentistList from "../db/DentistList";

function Design() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/dentist" element={<DentistList/>} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default Design;