// App.jsx
import Search from './components/Search';
import './app.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center mb-4">GitHub User Search</h1>
      <Search />
    </div>
  );
}

export default App;
