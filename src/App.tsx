import React from "react";
import {
  Typography,
  Link,
  TextField,
  MenuItem,
  Button,
  IconButton,
  InputAdornment,
  makeStyles,
} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import "./App.css";

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
  },
  subtitle: {
    marginTop: 40,
    marginBottom: 35,
  },
  input: {
    marginBottom: 15,
  },
  link: {
    marginLeft: 5,
    fontWeight: "bold",
    color: "primary",
  },
  button: {
    padding: 15,
    marginTop: 10,
    marginBottom: 15,
    textTransform: "capitalize",
  },
  tandc: {
    marginTop: 25,
  },
  title: {
    fontWeight: "bold",
  },
});

const App = () => {
  const styles = useStyles();

  return (
    <div className="wrapper">
      <div className="left">
        <div className="left-content">
          <Typography variant="h4" className={styles.title}>
            Let's set up the account
          </Typography>
          <Typography className={styles.subtitle}>
            Already have an account?
            <Link href="#" color="primary" className={styles.link}>
              Sign in
            </Link>
          </Typography>

          <form className={styles.form}>
            <TextField
              className={styles.input}
              label="Your name"
              variant="outlined"
            />

            <TextField
              className={styles.input}
              label="Email address"
              variant="outlined"
            />

            <TextField
              className={styles.input}
              label="I would describe my user type as"
              variant="outlined"
              select
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="developer">Developer</MenuItem>
              <MenuItem value="designer">Designer</MenuItem>
            </TextField>

            <TextField
              className={styles.input}
              label="Password"
              type="password"
              variant="outlined"
              helperText="Minimum 8 characters"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      // onClick={handleClickShowPassword}
                      // onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      <VisibilityOff />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              variant="contained"
              type="submit"
              color="primary"
              className={styles.button}
            >
              Next
            </Button>

            <Typography variant="body2" className={styles.tandc}>
              By clicking the "Next" button, you agree to creating a free
              account, and to <Link>Terms of Service</Link> and{" "}
              <Link>Privacy Policy</Link>
            </Typography>
          </form>
        </div>
      </div>
      <div className="right">
        <h3>Right</h3>
      </div>
    </div>
  );
};

export default App;
