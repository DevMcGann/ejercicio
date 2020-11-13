
import './App.css';
const isEqual = require("react-fast-compare");

function App() {
  const a1 = [
    {
      id : "1",
      nombre : "gabriel",
      telefono : [{codigo: "2477"}, {numero:"354411"}]
    },
    {
      id : "2",
      nombre : "pepito",
      telefono : [{codigo: "341"}, {numero:"11223344"}]
    }
  ]

  const a2 = [
    {
      id : "1dddawdada1",
      nombre : "pepita",
      telefono : [{codigo: "011"}, {numero:"123456789"}]
    },
    {
      id : "1",
      nombre : "gabriel",
      telefono : [{codigo: "2477"}, {numero:"354411"}]
    }
  ]


  const comparar = () => {
  if (isEqual(a1[0], a2[1]) ) {
    return true
  }
  }

  comparar()

  return (
    <div className="App">
      <header className="App-header">
       {comparar() ? "Yes": "No"}
      </header>
    </div>
  );
}

export default App;
