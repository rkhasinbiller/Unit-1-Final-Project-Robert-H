import { useState, useRef, useEffect } from "react";
import "./Timer.css";
import QuoteItem from "./QuoteItem";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes
  const [quote, setQuote] = useState(null);
  const intervalRef = useRef(null);

  // Motivational Quote
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
  setQuote({ content: "Failed to fetch quote.", author: "" });
});

  }

  // Load new quote
  useEffect(() => {
    fetchQuote();
  }, []);

  // Start countdown timer
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

  // Reset timer back to 25 minutes
  function resetTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTimeLeft(1500);
  }

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <div className="wrapper">
      <h1>Pomodoro Timer</h1>

      <div className="timer-display">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className="buttons">
        <button className="start-btn" onClick={startTimer}>START</button>
        <button className="stop-btn" onClick={stopTimer}>STOP</button>
        <button className="reset-btn" onClick={resetTimer}>RESET</button>
      </div>

      <div className="quote-section">
        <h2>Motivational Quote</h2>
        {quote ? (
  <QuoteItem content={quote.content} author={quote.author} />
) : (
  <p>Loading quote...</p>
)}

        <button className="quote-btn" onClick={fetchQuote}>New Quote</button>
      </div>
    </div>
  );
}
