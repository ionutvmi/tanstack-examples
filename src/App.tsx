import "./App.css";
import CustomTable from "./table/CustomTable";

const someData = Array.from({ length: 100 }).map((_, index) => ({
  name: "Item " + index,
  price: Math.floor(Math.random() * 99999),
}));

function App() {
  return (
    <div className="App">
      <h1>Using react-table</h1>

      <p>Experimenting with react table, yey</p>

      <CustomTable initialData={someData} />
    </div>
  );
}

export default App;
