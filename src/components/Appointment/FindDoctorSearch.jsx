import React, { useState } from "react";

export default function FindDoctorSearch({ doctors = [] }) {
  const [query, setQuery] = useState("");
  const filtered = doctors.filter((doctor) =>
    `${doctor.name} ${doctor.specialty}`.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section>
      <input
        aria-label="Search doctors"
        placeholder="Search by doctor or specialty"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {filtered.map((doctor) => (
        <div key={doctor.id}>{doctor.name} - {doctor.specialty}</div>
      ))}
    </section>
  );
}
