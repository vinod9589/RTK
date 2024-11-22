import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";

import EntryForm from "./pages/EntryForm";
import Update from "./pages/Update";
function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entryform" element={<EntryForm />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
