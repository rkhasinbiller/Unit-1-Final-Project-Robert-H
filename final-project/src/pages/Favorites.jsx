import List from "../components/List";

export default function Favorites() {
  const reasons = [
    "Helps stay focused.",
    "Gives you a goal to shoot for.",
    "Helps if you're short on time. You can always find 25 min to study."
  ];

  return (
    <div className="page-wrapper">
      <h2>Favorites</h2>
      <p>Features coming soon. Until then, below is a breakdown of how our sessions work.</p>
      
      <table>
        <thead>
          <tr><th>Session</th><th>Length</th></tr>
        </thead>
        <tbody>
          <tr><td>Work</td><td>25 mins</td></tr>
          <tr><td>Break</td><td>5 mins</td></tr>
        </tbody>
      </table>

      {/* Pass reasons array to List component */}
      <List items={reasons} />
    </div>
  );
}
