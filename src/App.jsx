import "./index.css";
import * as React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Housing from "./pages/Housing";
import Header from "./components/Header";
import Error from "components/Error/index";
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
