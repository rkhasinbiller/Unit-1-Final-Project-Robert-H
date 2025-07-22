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