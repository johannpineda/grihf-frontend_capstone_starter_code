import React from "react";
import Navbar from "./components/Navbar.jsx";
import Notification from "./components/Notification.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Notification />
      <main>
        <h1>StayHealthy</h1>
        <p>Healthcare access anytime, anywhere.</p>
      </main>
    </>
  );
}
