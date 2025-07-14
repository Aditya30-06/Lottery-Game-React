import { useState } from "react";
import "./Lottery.css";

export default function LotteryGame() {
  const [result, setResult] = useState(null);
  const [randomNUM, setRandomNum] = useState(null);
  const [sum, setSum] = useState(null);

  const generateNumber = () => {
    const num = Math.floor(Math.random() * 900) + 100; 
    setRandomNum(num);
    evaluateResult(num);
  };

  const evaluateResult = (num) => {
    let digitSum = 0;
    while (num > 0) {
      digitSum += num % 10;
      num = Math.floor(num / 10);
    }
    setSum(digitSum);
    setResult(digitSum === 15);
  };

  const gameStarted = randomNUM !== null;

  return (
    <div className="lottery-container">
      <h1 className="lottery-title">🎲 Lottery Number Game</h1>

      <button className="lottery-button" onClick={generateNumber}>
        {gameStarted ? "Play Again" : "Start the Game"}
      </button>

      {gameStarted && (
        <div className="lottery-result">
          <p className={`lottery-message ${result ? "win" : "lose"}`}>
            {result
              ? "🎉 Congratulations! You won the lottery!"
              : "😔 Better luck next time."}
          </p>
          <p className="lottery-details">
            You got <strong>{randomNUM}</strong> and the sum of its digits is{" "}
            <strong>{sum}</strong>.
          </p>
        </div>
      )}
    </div>
  );
}
