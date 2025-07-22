import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes
  const [quote, setQuote] = useState(null);       // For quote text
  const intervalRef = useRef(null);               // Timer ID

}

  // Motivational quote 
  function fetchQuote() {
  fetch("https://corsproxy.io/?https://zenquotes.io/api/random")
    .then((res) => res.json())
    .then((data) => {
      const quote = data[0];
      setQuote({
        content: quote.q,
        author: quote.a,
      });
    })
    .catch((err) => {
      console.error("Failed to fetch quote:", err);
    });
}

// Load a quote when app first loads
  useEffect(() => {
    fetchQuote();
  }, []);

  function startTimer() {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft <= 0) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          return 0;
        }
        return prevTimeLeft - 1;
      });
    }, 1000);
  }

  function stopTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  function resetTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTimeLeft(1500); // 25 min
  }

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <>
      <div className="wrapper">
        <h1>Pomodoro Timer</h1>

        <div className="timer-display">
          <span>{minutes}</span>
          <span>:</span>
          <span>{seconds}</span>
        </div>

        <div className="buttons">
          <button className="start" onClick={startTimer}>START</button>
          <button className="stop" onClick={stopTimer}>STOP</button>
          <button className="reset" onClick={resetTimer}>RESET</button>
        </div>

        <div className="quote-section">
          <h2>Motivational Quote</h2>
          {quote ? (
            <>
              <p>"{quote.content}"</p>
              <p>– {quote.author}</p>
            </>
          ) : (
            <p>Loading quote...</p>
          )}
          <button className="quote-btn" onClick={fetchQuote}>New Quote</button>
        </div>
      </div>
    </>
  );


export default App;
