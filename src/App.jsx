import React, { useState, useEffect } from "react";
import InputField from "./models/InputField";
import Select from "./models/Select";
import Textarea from "./models/Textarea";
import SubmitBtn from "./models/SubmitBtn";
import sendRequest from "./controllers/sendRequest";

//Dummy data for list of programming languages
const listProgramingLangs = [
  { id: 1, name: "Javascript" },
  { id: 2, name: "Kotlin" },
  { id: 3, name: "HTML and CSS" },
  { id: 4, name: "PHP" },
];

//Toptal temporary post bin url
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

  //Checking empty fields in form and set disabled submit button
  useEffect(() => {
    if (
      name.length > 1 &&
      email.length > 1 &&
      password.length > 1 &&
      phone.length > 1 &&
      pLang.length > 1 &&
      message.length > 1
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, email, password, phone, message]);

  //Adding function which handling submit form
  const onSubmitHandler = (e) => {
    e.preventDefault();
    //Send request function to send data to post bin service
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
          validationMsg="Name must be between 3 and 20 characters" /*Send validation message*/
        />
        <InputField
          inputType="email"
          inputLabel="Email"
          placeholder="test@nex-gen.eu"
          value={email}
          onChangeFunc={setEmail}
          validationMsg="It`s not valid email address" /*Send validation message*/
        />
        <InputField
          inputType="password"
          inputLabel="Password"
          placeholder="**********"
          value={password}
          onChangeFunc={setPassword}
          validationMsg="Password must be between 5 and 17 characters" /*Send validation message*/
        />
        <InputField
          inputType="number"
          inputLabel="Phone"
          placeholder="+359 888 888 888"
          value={phone}
          onChangeFunc={setPhone}
          validationMsg="Number must start with 359" /*Send validation message*/
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
        <SubmitBtn submitValue="submit" disabled={disabled} /*Disabled button if all fields are fulfilled*/ />
      </form>
    </div>
  );
}

export default App;
