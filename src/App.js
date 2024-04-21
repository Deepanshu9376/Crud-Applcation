// import logo from './logo.svg';
import "./App.css";
import Create from "./Users/Create";
import { Routes, Route } from "react-router-dom";
import View from "./Users/View";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Create/>} />
        <Route path="/view" element={<View />} />
      </Routes>
    </>
  );
}

export default App;
