import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import {Login} from "./components/pages/login/login";
import {Management} from "./components/pages/Management/management";
import {RoutingPath} from "./routes/routing-path";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path={RoutingPath.management} element={<Management />} />
      </Routes>
    </div>
  );
}

export default App;
