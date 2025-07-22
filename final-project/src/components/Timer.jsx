import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes
  const [quote, setQuote] = useState(null);       // For quote text
  const intervalRef = useRef(null);               // Timer ID

}