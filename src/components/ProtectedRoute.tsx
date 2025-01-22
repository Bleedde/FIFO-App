import { Navigate, Outlet } from "react-router-dom";
import { useItemContext } from "../context/useItemContext";

import { superballs } from "ldrs";

superballs.register();

export const ProtectedRoute = () => {
  const { isUserLoggedIn, loading } = useItemContext();

  if (loading) {
    return <l-superballs size="40" speed="1.4" color="black" />;
  }

  if (!isUserLoggedIn) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};
