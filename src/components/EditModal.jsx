import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContactContext } from "../context/ContactContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  p: 5,
};

const EditModal = ({ setOpen, open }) => {
  const { getOneContact, oneContact, updateContact } = useContactContext();
  const [contact, setContact] = useState({
    name: oneContact.name,
    surname: oneContact.surname,
    image: oneContact.image,
    phoneNumber: oneContact.phoneNumber,
  });

  useEffect(() => {
    setContact(oneContact);
  }, [oneContact]);

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
    // addContact(contact);
    updateContact(oneContact.id, contact);
    setOpen(false);
  }
  return (
    <Modal
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box component="form" onSubmit={handleSubmit} sx={style}>
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
          Edit Contact
        </Button>
      </Box>
    </Modal>
  );
};

export default EditModal;
