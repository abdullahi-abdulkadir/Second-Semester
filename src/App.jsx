import { Routes, Route } from 'react-router-dom';
import TodoList from './pages/TodoList';
import TodoDetail from './pages/TodoDetail';
import NotFound from './pages/NotFound';
import './styles/global.css'
function BrokenComponent() {
  throw new Error("Deliberate crash for testing!");
}

function App() {
  return (
   

    <Routes>
      <Route path="/" element={<TodoList />} />
      <Route path="/todos/:id" element={<TodoDetail />} />
      <Route path="/trigger-error" element={<BrokenComponent />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
