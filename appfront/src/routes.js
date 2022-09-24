import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/login";
import SignIn from "./pages/SignIn/signIn";
import Dashboard from "./pages/dashboard/dashboard";
import Account from "./pages/account/account";
import Add_product from "./pages/account/add_products";
import Product_page from "./pages/page_product/product_page";
function MainRoutes() {
  const [user, setUser] = useState({})
  const [signInUSer, setSignInUser] = useState({})
  const [produto_Sel, setProduto_sel] = useState({})
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login user={user} setUser={setUser} />} />
        <Route path="/login" element={<Login user={user} setUser={setUser} />} />
        <Route path="/signin" element={<SignIn signInUSer={signInUSer} setSignInUser={setSignInUser} />} />
        <Route path="/dashboard" element={<Dashboard produto_Sel={produto_Sel} setProduto_sel={setProduto_sel} />} />
        <Route path="/account" element={<Account />} />
        <Route path="/addproduct" element={<Add_product />} />
        <Route path="/productpage" element={<Product_page produto_Sel={produto_Sel} setProduto_sel={setProduto_sel} />} />

      </Routes>
    </div>
  );
}
export default MainRoutes;