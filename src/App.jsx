import "./App.css";
import InputField from "./models/InputField";

function App() {
  return (
    <div className="App">
      <h1>Contact form React</h1>

      <InputField
        inputType="text"
        inputLabel="Username"
        placeholder="Gatakka"
      />
      <InputField
        inputType="text"
        inputLabel="Name"
        placeholder="Ivan Ivanov"
      />
    </div>
  );
}

export default App;
