export default function Footer() {
  return (
    <footer style={{ padding: "1rem", marginTop: "2rem", backgroundColor: "#eee", textAlign: "center" }}>
      <p>Built by Robert Hasinbiller. LaunchCode {new Date().getFullYear}.</p>
      <p>
        <a href="https://zenquotes.io" target="_blank" rel="noreferrer">Quote API: ZenQuotes</a>
      </p>
    </footer>
  );
}
