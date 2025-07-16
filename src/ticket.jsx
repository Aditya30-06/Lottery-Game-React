import TicketNum from "./ticketNum";

export default function Ticket({ ticket }) {
  return (
    <div>
      Your Ticket Number is&nbsp;
      <b>
        {ticket.map((num, idx) => (
          <TicketNum num={num} key={idx} />
        ))}
      </b>
    </div>
  );
}
