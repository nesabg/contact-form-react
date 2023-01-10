
import React, { useState } from "react"
import InputField from "./models/InputField";
import Select from "./models/Select";
import Textarea from "./models/Textarea";
import SubmitBtn from "./models/SubmitBtn";

const listProgramingLangs = [
  { id: 1, name: "Javascript" },
  { id: 2, name: "Kotlin" },
  { id: 3, name: "HTML and CSS" },
  { id: 4, name: "PHP" },
];

function App() {
  const [name, setName] = useState('') 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [pLang, setPlang] = useState('Javascript')
  const [message, setMessage] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault()
    console.log({
      name,
      email,
      password,
      phone,
      pLang,
      message
    })
  }

  return (
    <div className="App">
      <h1>Contact form React</h1>
      <form onSubmit={e => onSubmitHandler(e)}>
        <InputField
          inputType="text"
          inputLabel="Name"
          placeholder="Ivan Ivanov"
          value={name}
          onChangeFunc={setName}
        />
        <InputField
          inputType="email"
          inputLabel="Email"
          placeholder="test@nex-gen.eu"
          value={email}
          onChangeFunc={setEmail}
        />
        <InputField
          inputType="password"
          inputLabel="Password"
          placeholder="**********"
          value={password}
          onChangeFunc={setPassword}
        />
        <InputField
          inputType="number"
          inputLabel="Phone"
          placeholder="+359 888 888 888"
          value={phone}
          onChangeFunc={setPhone}
        />
        <Select labelText="Programmin languages" defaultLang={pLang} data={listProgramingLangs} onChangeFunc={setPlang} />
        <Textarea labelText="Message" value={message} onChangeFunc={setMessage}/>
        <SubmitBtn submitValue="submit" />
      </form>
    </div>
  );
}

export default App;
