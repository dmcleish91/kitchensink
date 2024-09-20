function KitchenSink() {
  return (
    <div style={{ border: '2px solid gray', padding: '20px', textAlign: 'center' }}>
      <div style={{ fontSize: '50px', marginBottom: '20px' }}>
        🧼 🛁 <br />
        <span style={{ fontSize: '24px' }}>Kitchen Sink</span>
      </div>
      <div>
        <p>Count:</p>
        <button>Increment</button>
      </div>
    </div>
  );
}

export default KitchenSink;
