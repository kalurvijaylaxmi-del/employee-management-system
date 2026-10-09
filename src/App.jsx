import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Employees from "./pages/Employees/Employees";

import "./App.css";

function App() {
return ( <BrowserRouter> <Routes>
<Route path="/" element={<Login />} />
<Route path="/dashboard" element={<Dashboard />} />
<Route path="/employees" element={<Employees />} />
<Route path="*" element={<Navigate to="/" replace />} /> </Routes> </BrowserRouter>

);
}

export default App;
