import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from "./Componets/List";
import UserData from "./Componets/UserData";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/user/:fName" element={<UserData/>} />
      </Routes>
    </Router>
  );
}

export default App;
