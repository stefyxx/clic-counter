import React from 'react';
import DivMyButton from './DivMyButton';


function Home({
  onIncrement,
  onDecrement,
  counter,
}) {
  return (
    <div>
      {/* <div>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div> */}
      <DivMyButton onIncrement={onIncrement} onDecrement={onDecrement} />
      <div>
        <button>
          Vous avez cliqué {counter} fois
        </button>
      </div>
    </div>
  );
};

export default Home;
