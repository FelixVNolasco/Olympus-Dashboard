import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;

