import PropTypes from "prop-types";
import s from "./Contact.module.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Box from "@mui/material/Box";

function Contact({ id, name, number, deleteFunction }) {
  return (
    <li className={s.listItem}>
      <Box sx={{ display: "flex" }}>
        <p>{`${name}: ${number}`}</p>
        <Button
          sx={{ marginLeft: "10px" }}
          endIcon={<DeleteIcon />}
          onClick={() => {
            deleteFunction(id);
          }}
        >
          Delete
        </Button>
      </Box>
    </li>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteFunction: PropTypes.func.isRequired,
};

export default Contact;
