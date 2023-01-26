import TodoContextProvider from './Components/store/TodoContext';
import { TodoForm } from './Components/TodoForm/TodoForm';

function App() {
  return (
    <div>
      <TodoContextProvider>
      <TodoForm/>
      </TodoContextProvider>
    </div>
  );
}

export default App;
 