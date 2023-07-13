import { CircularProgress, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useContactContext } from "../context/ContactContext";
import ContactItem from "./ContactItem";
import EditModal from "./EditModal";

const ContactList = () => {
  const [open, setOpen] = React.useState(true);
  const { contacts, getContacts } = useContactContext({
    name: "",
    surname: "",
    image: "",
    phoneNumber: "",
  });

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div>
      <Typography sx={{ my: 3 }} variant="h3" component="h3">
        Contact book
      </Typography>
      <Grid sx={{ my: 3 }} container spacing={2}>
        {contacts.length > 0 ? (
          contacts.map((item) => (
            <ContactItem setOpen={setOpen} item={item} key={item.id} />
          ))
        ) : (
          <Container>
            <CircularProgress />
          </Container>
        )}
      </Grid>
      <EditModal setOpen={setOpen} open={open} />
    </div>
  );
};

export default ContactList;
