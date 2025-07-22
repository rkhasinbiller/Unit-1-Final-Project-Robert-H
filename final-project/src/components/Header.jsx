import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{ padding: "1rem", backgroundColor: "#282c34", color: "white" }}>
      <h1>FocusFlow</h1>
      <nav style={{ marginTop: "0.5rem" }}>
        <Link to="/" style={{ color: "white", marginRight: "1rem" }}>Home</Link>
        <Link to="/about" style={{ color: "white", marginRight: "1rem" }}>About</Link>
        <Link to="/favorites" style={{ color: "white" }}>Favorites</Link>
      </nav>
    </header>
  );
}
