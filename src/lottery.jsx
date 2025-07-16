import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./ticket";
import "./lottery.css";
export default function Lottery({ n, winningSum }) {
  let [ticket, setticket] = useState(genTicket(n));
  let isWinning = sum(ticket) === winningSum;
  let buyTicket = () => {
    setticket(genTicket(n));
  };
  return (
    <div className="container">
      <h1>Lottery Game 🎲</h1>
      <h3>Winning Sum : {winningSum}</h3>
      <div className="ticket-box">
        <Ticket ticket={ticket} />
      </div>
      <button onClick={buyTicket}>Buy Ticket</button>
      <h3 className={isWinning ? "winning-msg" : "try-again"}>
        {isWinning
          ? `🎉 Congratulations! You've hit the lucky sum! ${winningSum} `
          : `😢 No luck this time. Sum of the digits is ${sum(
              ticket
            )}, Try again!`}
      </h3>
    </div>
  );
}
