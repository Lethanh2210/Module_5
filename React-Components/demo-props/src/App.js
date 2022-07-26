import Welcome from './components/Welcome';
import AddComponent from './components/AddComponent';
import FuncComponent from './components/FuncComponent';

function App() {
  return (
      <div className="App">
        <Welcome name="Thanh" />
          <AddComponent firstNumber={2} secondNumber={3} />
          <FuncComponent firstNumber={3} secondNumber={3} />
      </div>
  );
}
export default App;