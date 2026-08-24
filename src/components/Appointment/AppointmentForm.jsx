import React from "react";

export default function AppointmentForm({ form, setForm }) {
  return (
    <form>
      <input name="name" placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
      <input name="phone" placeholder="Phone Number" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})}/>
      <input name="date" type="date" value={form.date} onChange={e=>setForm({...form,date:e.target.value})}/>
      <input name="time" type="time" value={form.time} onChange={e=>setForm({...form,time:e.target.value})}/>
    </form>
  );
}
