import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/Auth/Login";
import { Signup } from "./components/Auth/Signup";
import Home from "./pages/Home";
import { Products } from "./pages/products/Products";
import Users from "./pages/users/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/auth/login" element={<Login />}></Route>
        <Route path="/auth/signup" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
