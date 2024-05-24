"use client";
import React, { useState, useEffect } from "react";
import AddPersonForm from "./addpersonform"; // Renombrado para evitar confusión

export default function UpdatePerson() {
  const [personDataUpdate, setPersonDataUpdate] = useState([]);
  const [newPerson, setNewPerson] = useState({
    name: "",
    lastname: "",
    age: "",
    phone: "",
    email: "",
  });

  const handleAddPerson = (person) => {
    setPersonDataUpdate((prevData) => [...prevData, person]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPerson((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:8080/users/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(personDataUpdate),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    console.log("data updated");
  };

  return (
    <>
      <AddPersonForm onAddPerson={handleAddPerson} />
      <table>
        <tbody>
          {personDataUpdate.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.lastname}</td>
              <td>{person.age}</td>
              <td>{person.phone}</td>
              <td>{person.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={handleUpdate} method="PUT">
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={newPerson.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="LastName"
          name="lastname"
          value={newPerson.lastname}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Age"
          name="age"
          value={newPerson.age}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={newPerson.phone}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={newPerson.email}
          onChange={handleChange}
        />
        <button type="submit">Update Person</button>
      </form>
    </>
  );
}
