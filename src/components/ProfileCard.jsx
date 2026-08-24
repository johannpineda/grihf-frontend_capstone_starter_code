import React, { useState } from "react";

export default function ProfileCard({ patient }) {
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState(patient);

  return (
    <section>
      <h2>{profile.name}</h2>
      <p>{profile.email}</p>
      <p>{profile.phone}</p>

      {editing && (
        <form>
          <input value={profile.name} onChange={e=>setProfile({...profile,name:e.target.value})} />
          <input value={profile.phone} onChange={e=>setProfile({...profile,phone:e.target.value})} />
        </form>
      )}

      <button onClick={() => setEditing(!editing)}>
        {editing ? "Save Profile" : "Edit Profile"}
      </button>
    </section>
  );
}
