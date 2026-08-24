import React, { useState } from "react";

export default function GiveReviews() {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("5");
  const [submitted, setSubmitted] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={submit}>
      <label>
        Rating
        <select disabled={submitted} value={rating} onChange={e=>setRating(e.target.value)}>
          {[1,2,3,4,5].map(n => <option key={n}>{n}</option>)}
        </select>
      </label>
      <label>
        Review
        <textarea disabled={submitted} value={review} onChange={e=>setReview(e.target.value)} />
      </label>
      <button type="submit" disabled={submitted}>
        {submitted ? "Review Submitted" : "Submit Review"}
      </button>
    </form>
  );
}
