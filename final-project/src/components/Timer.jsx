import { useState, useEffect, useRef } from "react";
import "./Timer.css";

export default function Timer({ onSessionStart }) {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

export default function Timer