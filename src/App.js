
import './App.css';
import { useFetch } from './hooks/useFetch';
import Home from './pages/Home/Home';

function App() {

  const { characters } = useFetch();

  return (
    <div className="container-fluid">
      <Home characters={characters} />
    </div>
  );
}

export default App;
