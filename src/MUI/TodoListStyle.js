import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    width: "500px",
  },
  ListItem: {
    borderBottom: "1px solid black",
    background: "rgb(220, 238, 252)",
  },
  activeRow: {
    background: "rgb(187, 238, 253)",
    borderBottom: "1px solid black",
  },
  List: {
    padding: "0px",
  },

  inputText: {
    width: "80%",
    marginBottom: "20px",
    background: "rgb(252, 245, 245)",
  },

  list_wrapper: {
    margin: "20px auto",
    background: "rgb(252, 245, 245)",
    height: "590px",
  },
});

export default useStyles;
