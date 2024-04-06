// //React is a single page application

// //useState Hook allows functional Components to manage state.
// state means data
// incase of login useState is used to manage input field (wx - username, password)
// need to import {useState} form React library
// need to initialize state inside functional Component
// we declare state variable using useState Hook
// here email and password are state variable
// setEmail and setPassword is provided by useState to update these variables

import React, { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formDataList, setFormDataList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const fromData = {
      email: email,
      password: password,
    };
    console.log("formData added", fromData);
    //list data
    setFormDataList([...formDataList, fromData]);
    setPassword("");
    setEmail("");
  };

  //it is a eventHandler fucntion to update these state variable whenever input values changes
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  //Rendering JSX,
  return (
    <div>
      <h2>Login Page</h2>
      <label>Email</label>
      <input type="text" value={email} onChange={handleEmailChange} /> <br />
      <label>password</label>
      <input
        type="text"
        value={password}
        onChange={handlePasswordChange}
      />{" "}
      <br />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      {/* Display form Data*/}
      <h2>FormData list</h2>
      <ul>
        {formDataList.map((formData, i) => {
          return (
            <li>
              email -{formData.email}
              password - {formData.password}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
