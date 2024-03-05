import "./App.css";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Navbar from "./components/navbar/NavBar"
import Footer from "./components/footer/Footer"
import LandingPage from "./pages/LandingPage";
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
      <Route>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/profile-form" element={<ProfileFormPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/my-activity" element={<MyActivityPage />} />
        <Route path="/add-request" element={<AddRequestPage />} />
      </Route>
    )
  )

  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}