import React, { useState } from "react";

export default function DoctorCard({ doctor, appointmentId }) {
  const [cancelled, setCancelled] = useState(false);

  const cancelAppointment = async () => {
    if (appointmentId) {
      await fetch(`/api/appointments/${appointmentId}`, { method: "DELETE" });
    }
    setCancelled(true);
  };

  return (
    <article>
      <h3>{doctor.name}</h3>
      <p>{doctor.specialty}</p>
      <button disabled={cancelled} onClick={cancelAppointment}>
        {cancelled ? "Appointment Cancelled" : "Cancel Appointment"}
      </button>
    </article>
  );
}
