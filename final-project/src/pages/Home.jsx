import Timer from "../components/Timer";
import Form from "../components/Form";


export default function Home() {
  return (
    <div className="page-wrapper">
      <h2>Welcome to The Pomodoro App</h2>
      <p>This app helps you stay productive with 25-minute work intervals.</p>

      <div className="layout">
        <Form />
        <Timer />
      </div>
    </div>
  );
}
