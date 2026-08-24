import React from "react";

export default function AppointmentFormIC({ form, setForm }) {
  return (
    <form>
      <label>
        Name
        <input
          name="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </label>
      <label>
        Phone Number
        <input
          name="phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
      </label>
    </form>
  );
}
