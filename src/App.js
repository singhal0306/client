import React, { useEffect } from "react";
import Login from "./screens/Login";
import Register from "./screens/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import ProtectedWrapper from "./ProtectedWrapper";
import Layout from "./components/Layout";
import NoPageFound from "./screens/NoPageFound";
import { useDispatch } from "react-redux";
import { getUser } from "./store/userAction";

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <ProtectedWrapper>
              <Layout />
            </ProtectedWrapper>
          }
        >
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </Router>
  );
}

export default App;
