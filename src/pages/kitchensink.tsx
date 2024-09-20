import { useState } from 'react';

function KitchenSink() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <div style={{ border: '2px solid gray', padding: '20px', textAlign: 'center' }}>
      <div style={{ fontSize: '50px', marginBottom: '20px' }}>
        🧼 🛁 <br />
        <span style={{ fontSize: '24px' }}>Cartoon Kitchen Sink</span>
      </div>
      <div>
        <p>Count: {count}</p>
        <button onClick={incrementCount}>Increment</button>
      </div>
    </div>
  );
}

export default KitchenSink;
