import "./App.css";
import InputField from "./models/InputField";
import Select from "./models/Select";

function App() {
  const listProgramingLangs = [
    { id: 1, name: "Javascript" },
    { id: 2, name: "Kotlin" },
    { id: 3, name: "HTML and CSS" },
    { id: 4, name: "PHP" },
  ];
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
      <Select labelText="Programmin languages" data={listProgramingLangs}/>
    </div>
  );
}

export default App;
