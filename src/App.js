import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Blog from './components/Blog';

function App() {
  return (
    <div className="bg-zinc-800">
      <Navbar />
      <Blog />
    </div>
  );
}

export default App;
