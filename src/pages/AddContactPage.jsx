import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useContactContext } from "../context/ContactContext";
import { useNavigate } from "react-router-dom";

const AddContactPage = () => {
  const { addContact } = useContactContext();
  const navigate = useNavigate();
  const [contact, setContact] = useState({
    name: "",
    surname: "",
    image: "",
    phoneNumber: "",
  });

  function handleChange(e) {
    if (e.target.name === "phoneNumber") {
      let obj = { ...contact, phoneNumber: Number(e.target.value) };
      setContact(obj);
    } else {
      let obj = { ...contact, [e.target.name]: e.target.value };
      setContact(obj);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      contact.name.trim() === "" ||
      contact.surname.trim() === "" ||
      contact.image.trim() === "" ||
      !contact.phoneNumber
    ) {
      alert("Fill inputs!");
      return;
    }
    addContact(contact);
    navigate("/");
  }

  return (
    <Box
      component="form"
      sx={{ display: "flex", flexDirection: "column", p: 5 }}
      onSubmit={handleSubmit}
    >
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        name="name"
        value={contact.name}
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        label="Surname"
        variant="outlined"
        name="surname"
        value={contact.surname}
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        label="Phone number"
        variant="outlined"
        name="phoneNumber"
        value={contact.phoneNumber}
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        label="Image"
        variant="outlined"
        name="image"
        value={contact.image}
        onChange={handleChange}
      />
      <Button variant="outlined" type="submit">
        Add Contact
      </Button>
    </Box>
  );
};

export default AddContactPage;
