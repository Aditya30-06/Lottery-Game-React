import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./ticket";
import "./lottery.css";

export default function Lottery({ n, winCondition, targetValue }) {
  const [ticket, setTicket] = useState(genTicket(n));
  const isWinning = winCondition(ticket);

  const buyTicket = () => {
    setTicket(genTicket(n));
  };

  return (
    <div className="container">
      <h1>Lottery Game 🎲</h1>
      <h3>Winning Sum: {targetValue}</h3>

      <div className="ticket-box">
        <Ticket ticket={ticket} />
      </div>

      <button onClick={buyTicket}>Buy Ticket</button>

      <h3 className={isWinning ? "winning-msg" : "try-again"}>
        {isWinning
          ? `🎉 Congratulations! You've hit the lucky sum of ${targetValue}!`
          : `😢 No luck this time. Your ticket's sum is ${sum(ticket)}. Try again!`}
      </h3>
    </div>
  );
}
