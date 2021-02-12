import logo from './logo.svg';
import './App.css';
import { FormBuilder } from 'react-formio';

function App() {
  const type = 'wizard';
  return (
    <div className="App">
      Form Builder
      <FormBuilder form={{ display: type }} onChange={(schema) => console.log(schema)} />
    </div>
  );
}

export default App;
