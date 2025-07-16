import Lottery from "./lottery";
import { sum } from "./helper";

function App() {
  const target = 15;

  const winningCondition = (ticket) => sum(ticket) === target;

  return (
    <>
      <Lottery n={3} winCondition={winningCondition} targetValue={target} />
    </>
  );
}

export default App;
