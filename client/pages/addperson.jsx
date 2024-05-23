"use client";
import React from "react";

export default function AddPerson() {
  const [personData, setPersonData] = React.useState({
    name: "",
    lastname: "",
    age: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.table(personData);

    try {
      const response = await fetch("http://localhost:8080/users/recieve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(personData),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
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
