import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/Auth/Login";
import { Signup } from "./components/Auth/Signup";
import { Home } from "./pages/Home";
import { Products } from "./pages/products/Products";
import { NewProduct } from "./pages/products/NewProduct";
import { Users } from "./pages/users/Users";
import { Profile } from "./pages/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/product/new" element={<NewProduct />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/auth/login" element={<Login />}></Route>
        <Route path="/auth/signup" element={<Signup />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
