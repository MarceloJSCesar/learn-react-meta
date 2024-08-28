import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AuthForms from './components/AuthForms';

// let userModel = {
//   message: "Good Morning!",
//   user: {
//     firstname: "Marcelo",
//     lastname: "Cesar",
//   }
// };

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Authentication using Hooks</h1>
        <AuthForms />
      </header>
    </div>
  );
}

export default App;
