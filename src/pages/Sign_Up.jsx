import React, { useState } from "react";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

export default function Sign_Up() {
  const [form, setForm] = useState({
    role: "patient", name: "", email: "", phone: "", password: ""
  });
  const [message, setMessage] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${API}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    const data = await response.json();
    setMessage(data.message || "Registration completed");
  };

  return (
    <form onSubmit={submit}>
      <select value={form.role} onChange={e => setForm({...form, role:e.target.value})}>
        <option value="patient">Patient</option>
        <option value="doctor">Doctor</option>
      </select>
      <input placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
      <input placeholder="Email" type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/>
      <input placeholder="Phone" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})}/>
      <input placeholder="Password" type="password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})}/>
      <button type="submit">Sign Up</button>
      <p>{message}</p>
    </form>
  );
}
