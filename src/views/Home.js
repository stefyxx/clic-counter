import React from 'react';

function Home({
  onIncrement,
  onDecrement,
  counter,
}) {
  return (
    <div>
      <div>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
      <div>

        <button>
          Vous avez cliqué {counter} fois
        </button>
      </div>
    </div>
  );
};

export default Home;
