import { Routes, Route, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Layout from "./Layout"
import Home from "./pages/Home"
import Headphones from "./pages/Headphones"
import Earphones from "./pages/Earphones"
import Speakers from "./pages/Speakers"
import ProductDetails from "./pages/ProductDetails"
import Checkout from "./pages/Checkout"
import Error from "./pages/Error"
function App() {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));
  

    useEffect(() => {
    setToken(localStorage.getItem("token"));
    if (!token && window.location.pathname !== "/register") {
      navigate("/login");
    }
  }, [token, navigate]);

  function ProtectedRoute({children, isAuthentication}) {
     if(!isAuthentication){
       navigate("/login");
       return null;
     }
     return children;
  }

  return (  
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>

      <Route path="/" 
      element={
      <ProtectedRoute isAuthentication={token ? true : false}>
        <Layout>
          <Home/>
        </Layout>
      </ProtectedRoute>
      }/>

<Route path="/headphones" 
      element={
      <ProtectedRoute isAuthentication={token ? true : false}>
        <Layout>
          <Headphones/>
        </Layout>
      </ProtectedRoute>
      }/>

<Route path="/earphones" 
      element={
      <ProtectedRoute isAuthentication={token ? true : false}>
        <Layout>
          <Earphones/>
        </Layout>
      </ProtectedRoute>
      }/>

<Route path="/speakers" 
      element={
      <ProtectedRoute isAuthentication={token ? true : false}>
        <Layout>
          <Speakers/>
        </Layout>
      </ProtectedRoute>
      }/>

<Route path="/products/:id" 
      element={
      <ProtectedRoute isAuthentication={token ? true : false}>
        <Layout>
          <ProductDetails/>
        </Layout>
      </ProtectedRoute>
      }/>

      <Route path="/checkout" 
      element={
        <ProtectedRoute isAuthentication={token ? true : false}>
          <Layout>
            <Checkout/>
          </Layout>
        </ProtectedRoute>
      }/>


      <Route path="*" element={<Error/>}/>
    </Routes>
  )
}

export default App
