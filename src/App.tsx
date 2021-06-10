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
  Box,
} from "@material-ui/core";
import {VisibilityOff} from "@material-ui/icons";
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
  leftTitle: {
    fontWeight: "bold",
  },
  rightTitle: {
    color: "#ffffff",
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    color: "#ffffff",
    lineHeight: 1.5,
  },
  stepInfo: {
    position: "absolute",
    top: 20,
    right: 30,
    display: "flex",
    alignItems: "center",
  },
  stepTitle: {
    fontWeight: "bold",
    fontSize: 12,
  },
});

const Dot = () => <span className="dot"></span>;

const App = () => {
  const styles = useStyles();

  return (
    <div className="wrapper">
      <div className="division left">
        <Box className={styles.stepInfo}>
          <Typography variant="body2" className={styles.stepTitle}>
            Step 1 of 3
          </Typography>
          <Dot />
          <Dot />
          <Dot />
        </Box>

        <div className="left-content">
          <Typography variant="h4" className={styles.leftTitle}>
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
      <div className="division right">
        <div className="right-content">
          <Typography variant="h4" className={styles.rightTitle}>
            Dummy heading
          </Typography>

          <Typography variant="body2" className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            cupiditate at modi officiis quasi provident repudiandae distinctio
            ea totam deleniti, iusto doloremque cumque excepturi et! Sunt dolor
            cupiditate consectetur nostrum officiis? Fugit vero voluptatem nam
            voluptate eos, reiciendis quos ea.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default App;
