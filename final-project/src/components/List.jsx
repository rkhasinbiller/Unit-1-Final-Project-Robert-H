export default function List() {
  const items = ["Helps stay focused.", "Gives you a goal to shoot for.", "Helps if you're short on time. You can always find 25 min to study."];

  return (
    <div>
      <h3>Why Use Pomodoro</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}