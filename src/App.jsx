import React, { useState, useEffect } from "react";
import InputField from "./models/InputField";
import Select from "./models/Select";
import Textarea from "./models/Textarea";
import SubmitBtn from "./models/SubmitBtn";
import sendRequest from "./controllers/sendRequest";

const listProgramingLangs = [
  { id: 1, name: "Javascript" },
  { id: 2, name: "Kotlin" },
  { id: 3, name: "HTML and CSS" },
  { id: 4, name: "PHP" },
];

const binUrl =
  "https://www.toptal.com/developers/postbin/1673367216237-5493956936988";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [pLang, setPlang] = useState("Javascript");
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if(name.length > 1 && email.length > 1 && password.length > 1 && phone.length > 1 && pLang.length > 1 && message.length > 1 ){
      setDisabled(false)
      console.log(disabled)
    }else{
      setDisabled(true)
      console.log(disabled)
    }
  },[name, email, password, phone, pLang, message])

  const onSubmitHandler = (e) => {
    e.preventDefault();
    sendRequest(
      {
        name,
        email,
        password,
        phone,
        pLang,
        message,
      },
      binUrl
    );
  };

  return (
    <div className="App">
      <h1>Contact form React</h1>
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <InputField
          inputType="text"
          inputLabel="Name"
          placeholder="Ivan Ivanov"
          value={name}
          onChangeFunc={setName}
          validationMsg="Name must be between 3 and 20 characters"
        />
        <InputField
          inputType="email"
          inputLabel="Email"
          placeholder="test@nex-gen.eu"
          value={email}
          onChangeFunc={setEmail}
          validationMsg="It`s not valid email address"
        />
        <InputField
          inputType="password"
          inputLabel="Password"
          placeholder="**********"
          value={password}
          onChangeFunc={setPassword}
          validationMsg="Password must be between 5 and 17 characters"
        />
        <InputField
          inputType="number"
          inputLabel="Phone"
          placeholder="+359 888 888 888"
          value={phone}
          onChangeFunc={setPhone}
          validationMsg="Number must start with 359"
        />
        <Select
          labelText="Languages"
          defaultLang={pLang}
          data={listProgramingLangs}
          onChangeFunc={setPlang}
        />
        <Textarea
          labelText="Message: "
          value={message}
          onChangeFunc={setMessage}
        />
        <SubmitBtn submitValue="submit" disabled={disabled}/>
      </form>
    </div>
  );
}

export default App;
