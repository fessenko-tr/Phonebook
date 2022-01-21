import PropTypes from "prop-types";
import s from "./Contact.module.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import Box from "@mui/material/Box";

function Contact({ id, name, number, deleteFunction, editFunction }) {
  return (
    <li className={s.listItem}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "baseline",
          alignItems: "baseline",
        }}
      >
        <p style={{ whiteSpace: "nowrap" }}>{`${name}: ${number}`}</p>

        <Box
          sx={{
            display: "flex",
          }}
        >
          <Button
            sx={{ marginLeft: "10px" }}
            endIcon={<DeleteIcon />}
            onClick={() => {
              deleteFunction(id);
            }}
          >
            Delete
          </Button>
          <Button
            sx={{ marginLeft: "10px" }}
            endIcon={<EditIcon />}
            onClick={() => {
              editFunction({ name, number, id });
            }}
          >
            Edit
          </Button>
        </Box>
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
