import React from "react";
import { Navigate } from "react-router-dom";
import Cookie from "js-cookie";
function ProtectedRoute({ children }) {
  const userId = Cookie.get("email");
  if (!userId) return <Navigate to="/" replace />;
  return children;
}

export default ProtectedRoute;
