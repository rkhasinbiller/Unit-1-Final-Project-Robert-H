export default function List({ items }) {
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
