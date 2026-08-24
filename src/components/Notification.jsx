import React from "react";

export default function Notification({ message = "" }) {
  if (!message) return null;
  return <div role="status" aria-live="polite">{message}</div>;
}
