import React from "react";

export default function Navbar() {
  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <nav>
      <a href="/">Home</a>
      <a href="/appointments">Appointments</a>
      <a href="/signup">Sign Up</a>
      <a href="/login">Login</a>
      <button onClick={logout}>Logout</button>
    </nav>
  );
}
