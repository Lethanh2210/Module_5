import './App.css';

function App() {
  return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
          <br/>
          <h4>Browser's details: {navigator.userAgent}</h4>
      </div>
  );
}

export default App;
