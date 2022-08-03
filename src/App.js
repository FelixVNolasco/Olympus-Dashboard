import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./components/Auth/Login";
import { Signup } from "./components/Auth/Signup";
import { Home } from "./pages/Home";
import { Products } from "./pages/products/Products";
import { NewProduct } from "./pages/products/NewProduct";
import { Users } from "./pages/users/Users";
import { Profile } from "./pages/Profile/Profile";
import { useSelector } from "react-redux";

function App() {
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      <Routes>
        {isAuthenticated ? (
          <Route path="/" element={<Home />}></Route>
        ) : (
          <Route
            path="/"
            element={<Navigate to={"/auth/login"} replace />}
          ></Route>
        )}

        <Route path="/users" element={<Users />}></Route>
        <Route path="/product/new" element={<NewProduct />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/auth/login" element={<Login />}></Route>
        <Route path="/auth/signup" element={<Signup />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
