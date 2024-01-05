import './App.css';
import Counter from './Components/Counter';
import TodoList from './Components/TodoList';
import Employee from './Components/Employee';

function App() {
  return (
    <div className="App">
      <Counter/>
      <TodoList/>
      <Employee/>
    </div>
  );
}

export default App;
