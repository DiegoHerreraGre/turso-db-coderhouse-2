import React, { useState } from "react";

export default function AddPersonForm() {
  const [personData, setPersonData] = useState({
    name: "",
    lastname: "",
    age: "",
    phone: "",
    email: "",
  });

  const onAddPerson = async () => {
    const response = await fetch("http://localhost:8080/users/recieve", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(personData),
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPerson(personData);
    setPersonData({
      name: "",
      lastname: "",
      age: "",
      phone: "",
      email: "",
    });
  };

  return (
    <>
      <h1>Add Person</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={personData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="LastName"
          name="lastname"
          value={personData.lastname}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Age"
          name="age"
          value={personData.age}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={personData.phone}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={personData.email}
          onChange={handleChange}
        />
        <button type="submit">Add Person</button>
      </form>
    </>
  );
}
