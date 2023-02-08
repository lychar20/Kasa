import "./index.css";
import * as React from "react";

import { Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import Error from './components/Error'

const App = () => {
  return (
    <div className="">
           
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
           <Route path="/about" element={<About />} />
          {/* <Route path="freelances" element={<Freelances />} />  */}

          
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;