import "./App.css";
import Actions from "./pages/Actions";
import HomePage from "./pages/HomePage";
import BasicTable from "./pages/Table";

function App() {
  return (
    <div style={{ backgroundColor: "#f5f9ff", minHeight: "100vh" }}>
      <HomePage />
      <Actions />
      <BasicTable />
    </div>
  );
}

export default App;
