import { useState } from "react";
import React from "react";
import "./index.css";

const FIELD_NAME = {
  NAME: "name",
  EMAIL: "email",
  PASSWORD: "password",
};

const initialValues = (values) => ({
  [FIELD_NAME.NAME]: "",
  [FIELD_NAME.EMAIL]: "",
  [FIELD_NAME.PASSWORD]: "",
  ...values,
});

export default function FormArray() {
  const [value, setValue] = useState(() => initialValues({ color: "lime" }));

  const [userList, setUserList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setUserList([...userList, value]);

    setValue(initialValues());
  };

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  console.log(value);

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

        {userList.length > 0 && (
          <ul>
            {userList.map((user, index) => (
              <React.Fragment key={user[FIELD_NAME.NAME]}>
                <li>
                  <User {...user} show={index === 0} />
                </li>
              </React.Fragment>
            ))}
          </ul>
        )}
      </header>
    </div>
  );
}

function User({ name, email, password, show: initialShow }) {
  const [show, setShow] = useState(initialShow);

  const toggleDetails = () => {
    setShow(!show);
  };

  const isShown = initialShow && show;

  return (
    <React.Fragment>
      <div onClick={toggleDetails}>{name}</div>
      {isShown && (
        <ul>
          <li>Email: {email}</li>
          <li>Password: {password}</li>
        </ul>
      )}
    </React.Fragment>
  );
}
