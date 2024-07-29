import "./App.css";
import Counter from "./Components/Counter";
import TodoList from "./Components/TodoList";
import Employee from "./Components/Employee";
import Explorer from "./Components/Explorer/Explorer";
import { data } from "./Components/Explorer/Constant";
import ScrollDetection from "./Components/ScrollDetection/ScrollDetection";
function App() {
  return (
    <div className="App">
      {/* <Counter/>
      <TodoList/>
      <Employee/> */}
      {/* <Explorer  data={data} /> */}
      <ScrollDetection />
      <ScrollDetection />
      <ScrollDetection />
      <ScrollDetection />
      <ScrollDetection />
      <ScrollDetection />
      <ScrollDetection />
      <ScrollDetection />
      <ScrollDetection />
      <ScrollDetection />
      <ScrollDetection />
    </div>
  );
}

export default App;
