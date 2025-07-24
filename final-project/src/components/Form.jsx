import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); // correct location

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) {
      setError("Name is required!");
      setSuccess("");
    } else {
      setError("");
      setSuccess(`Hello, ${name}!`);

       setTimeout(() => {
      setSuccess("");
    }, 3000);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </form>
  );
}
