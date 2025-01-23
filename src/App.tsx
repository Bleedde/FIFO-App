import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import "./App.css";
import Dashboard from "./components/Dashboard";
import LoginComponent from "./components/LoginComponent";
import { ProtectedRoute } from "./components/ProtectedRoute";
import RegisterComponent from "./components/RegisterComponent";
import { useItemContext } from "./context/useItemContext";

function App() {
  const { user } = useItemContext();
  console.log(user);
  return (
    <section className="h-screen w-screen flex flex-col md:flex-row items-center justify-center bg-[#FBF5E5]">
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/register" element={<RegisterComponent />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
