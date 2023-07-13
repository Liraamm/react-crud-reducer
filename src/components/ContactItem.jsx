import { Grid, IconButton } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditIcon from "@mui/icons-material/Edit";
import { useContactContext } from "../context/ContactContext";

const ContactItem = ({ setOpen, item }) => {
  const { deleteContact, getOneContact } = useContactContext();

  function handleEdit() {
    getOneContact(item.id);
    setOpen(true);
  }

  return (
    <Grid item xs={12} md={4} lg={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="220"
          image="https://i.pinimg.com/originals/0c/29/1d/0c291d253294df880f1513fe5bcd16ad.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name} {item.surname}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {item.phoneNumber}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton
            color="error"
            onClick={() => {
              deleteContact(item.id);
            }}
          >
            <DeleteOutlineOutlinedIcon />
          </IconButton>
          <IconButton color="primary" onClick={handleEdit}>
            <EditIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ContactItem;
