import Title from "antd/es/typography/Title";
import React, { useState } from "react";
import Input from "./Input";

const Dashboard = () => {
  const [valueInput, setValueInput] = useState({
    username: "",
    email: "",
    password: "",
    birthday: "",
    confirmPassword: "",
  });
  const inputProps = [
    {
      id: 1,
      label: "Username",
      name: "username",
      type: "text",
      placeholder: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      require: "",
    },
    {
      id: 2,
      label: "Email",
      name: "email",
      type: "text",
      placeholder: "Email",
      pattern: "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$",
      errorMessage: "It should be a valid email address!",
      require: "",
    },
    {
      id: 3,
      label: "Birthday",
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
    },
    {
      id: 4,
      label: "Password",
      type: "text",
      name: "password",
      placeholder: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      require: "",
    },
    {
      id: 5,
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      pattern: valueInput.password,
      errorMessage: "Password don't match",
      require: "",
    },
  ];

  const handleChange = (ev) => {
    const name = ev.target.name;
    const value = ev.target.value;
    setValueInput({ ...valueInput, [name]: value });
  };
  const submit = (ev) => {
    ev.preventDefault();
    console.log("🚀valueInput---->", valueInput);
    setValueInput({
      username: "",
      email: "",
      password: "",
      birthday: "",
      confirmPassword: "",  
    })
  };
  return (
    <div className="grid place-items-center h-[50vw] ">
      <div>
        <Title level={1}>Register</Title>
        <form onSubmit={submit}>
          {inputProps.map((input) => (
            <Input
              key={input.id}
              {...input}
              value={valueInput[input.name]}
              handleChange={handleChange}
            />
          ))}
          <button className="btn btn-secondary mt-[20px]">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
