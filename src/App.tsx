import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AdminContentPage from "./components/layouts/admin/AdminContent/AdminContentPage";
import AdminDefaultPage from "./components/layouts/admin/AdminDefault/AdminDefaultPage";
import ContentPage from "./components/layouts/user/ContentPage";
import DefaultPage from "./components/layouts/user/DefaultPage";
import AboutPage from "./components/pages/userPage/AboutPage";
import LoginPage from "./components/pages/userPage/LoginPage";
import RegisterPage from "./components/pages/userPage/RegisterPage";

type Props = {};

const App = (props: Props) => {
  useEffect(() => {
    document.title = "MUI Workshop";
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<ContentPage />}>
          <Route path="" element={<DefaultPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
        <Route path="admin-dashboard" element={<AdminContentPage />}>
          <Route path="" element={<AdminDefaultPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
