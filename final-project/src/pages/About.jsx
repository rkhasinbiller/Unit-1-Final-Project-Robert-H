import calmingImage from "../assets/calming.jpg";
import Form from "../components/Form";

<Form />

export default function About() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>About This App</h2>
       <img
        src={calmingImage}
        alt="A calming scene"
        style={{ width: "100%", maxWidth: "400px", marginTop: "1rem", borderRadius: "10px" }}
      />
      
      <p>
        The Pomodoro App is timer that helps you stay productive by breaking your work into 25-minute focus sessions. 
        After each session, take a short break and come back refreshed.
      </p>
      <p>
        You’ll also get motivational quotes to keep your spirits high while working hard!
      </p>
    </div>
  );
}
