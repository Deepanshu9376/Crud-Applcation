// import logo from './logo.svg';
<<<<<<< HEAD
import NavbarHead from "./Components/NavbarHead";
import "./App.css";
import Create from "./Users/Create";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import View from "./Users/View";
// import View2 from "./Users/View2";
const LazyCreate = React.lazy(() => import("./Users/Create3"));
const LazyView = React.lazy(() => import("./Users/View2"));
=======
import "./App.css";
import Create from "./Users/Create";
import { Routes, Route } from "react-router-dom";
import View from "./Users/View";

>>>>>>> 0f2c54eeb8538e4e37a45066e163264a40462908

function App() {
  return (
    <>
<<<<<<< HEAD
      <BrowserRouter>
        <NavbarHead/>
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<>..Loading create</>} >
                <LazyCreate />
              </React.Suspense>
            }
          />
          <Route path="/" element={<Navigate to="/users/create" />} />
          <Route  path="/view"
            element={
              <React.Suspense fallback={<>..Loading view</>} >
                <LazyView />
              </React.Suspense>
            }
           />
        </Routes>
      </BrowserRouter>
=======
      <Routes>
        <Route path="/" element={<Create/>} />
        <Route path="/view" element={<View />} />
      </Routes>
>>>>>>> 0f2c54eeb8538e4e37a45066e163264a40462908
    </>
  );
}

export default App;
