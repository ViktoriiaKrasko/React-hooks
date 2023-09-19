import { useState } from "react";
import "./index.css";

const FIELD_NAME = {
  NAME: "name",
  EMAIL: "email",
  PASSWORD: "password",
};

export default function Form() {
  const [value, setValue] = useState({
    [FIELD_NAME.NAME]: "",
    [FIELD_NAME.EMAIL]: "",
    [FIELD_NAME.PASSWORD]: "",
  });

  const [isSubmitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Name"
              name={FIELD_NAME.NAME}
              value={value[FIELD_NAME.NAME]}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              name={FIELD_NAME.EMAIL}
              value={value[FIELD_NAME.EMAIL]}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              name={FIELD_NAME.PASSWORD}
              value={value[FIELD_NAME.PASSWORD]}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Send</button>
        </form>

        {isSubmitted && (
          <div>
            <h2>Sent data: </h2>
            <p>Name: {value[FIELD_NAME.NAME]}</p>
            <p>Email: {value[FIELD_NAME.EMAIL]}</p>
            <p>Password: {value[FIELD_NAME.PASSWORD]}</p>
          </div>
        )}
      </header>
    </div>
  );
}
