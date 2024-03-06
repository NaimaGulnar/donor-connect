import "./App.css";
import "./ResponsiveApp.css";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Layout from "./Layout"
import LandingPage from "./pages/LandingPage";
import EducationalResourcesPage from "./pages/EducationalResourcesPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import ProfileFormPage from "./pages/ProfileFormPage";
import ProfilePage from "./pages/ProfilePage";
import MyActivityPage from "./pages/MyActivityPage";
import AddRequestPage from "./pages/AddRequestPage";

export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<LandingPage />} />
        <Route path="educational-resources" element={<EducationalResourcesPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="reset-password" element={<ResetPasswordPage />} />
        <Route path="profile-form" element={<ProfileFormPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="my-activity" element={<MyActivityPage />} />
        <Route path="add-request" element={<AddRequestPage />} />
      </Route>
    )
  )


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}