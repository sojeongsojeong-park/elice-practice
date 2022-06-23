import "./App.css";
// import logo from "./logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/home' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/about:id' element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
