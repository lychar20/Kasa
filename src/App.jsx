import "./index.css";
import * as React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Housing from "./pages/housing";
import Header from "./components/header";
import Error from "components/error/index";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Housing />} />

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
