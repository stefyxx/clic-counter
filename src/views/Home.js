import React from 'react';

function Home({
  onIncrement,
  counter,
}) {
  return (
    <div>
      <div>
        <button onClick={onIncrement}>+</button>

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
