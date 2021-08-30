import { HashRouter } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Layout />
      </HashRouter>
    </div>
  );
}

export default App;
