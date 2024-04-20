// import logo from './logo.svg';
import "./App.css";
import Create from "./Users/Create";
import { Routes, Route } from "react-router-dom";
import View from "./Users/View";
import CreatePage from "./pages/CreatePage";
import Card  from './Components/CardComp';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Create/>} />
        <Route path="/view" element={<View />} />
        {/* <Route path="/create" element={<CreatePage />} /> */}
        <Route path="/card" element={<Card/>}/>
      </Routes>
    </>
  );
}

export default App;
