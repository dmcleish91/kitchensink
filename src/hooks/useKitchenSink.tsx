import { useState } from 'react';

function useKitchenSink() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  return { count, incrementCount };
}

export default useKitchenSink;
