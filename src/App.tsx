import React, {useState, ChangeEvent, FormEvent} from "react";
import {Typography, Link, Button, makeStyles, Box} from "@material-ui/core";
import "./App.css";
import Input from "./components/Input/Input";
import Select from "./components/Select";

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
  },
  subtitle: {
    marginTop: 35,
    marginBottom: 30,
    fontSize: 15,
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
    fontSize: 13,
  },
  leftTitle: {
    fontWeight: "bold",
    fontSize: 30,
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

interface FormValues {
  name: string;
  email: string;
  userType: string;
  password: string;
}

const initialValues = {
  name: "",
  email: "",
  userType: "",
  password: "",
};

const userTypeOptions = ["Developer", "Designer"];

const Dot = () => <span className="dot"></span>;

const App = () => {
  const styles = useStyles();

  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormValues>(initialValues);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    console.log("values ", values);
  };

  const validate = (fieldValues: any = values): void => {
    const errorObj = {...errors};

    if ("name" in fieldValues)
      errorObj.name = fieldValues.name ? "" : "This field is required";
    if ("email" in fieldValues)
      errorObj.email =
        fieldValues.email &&
        /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(fieldValues.email)
          ? ""
          : "Please enter a valid email";
    if ("userType" in fieldValues)
      errorObj.userType = fieldValues.userType.length
        ? ""
        : "This field is required";
    if ("password" in fieldValues)
      errorObj.password =
        fieldValues.password.length >= 8 ? "" : "Minimum of 8 characters";

    setErrors({
      ...errorObj,
    });
  };

  const handleInputChange = (
    event: ChangeEvent<
      HTMLInputElement | {name?: string | undefined; value: unknown}
    >
  ): void => {
    const {name, value} = event.target;

    setValues({
      ...values,
      [name as string]: value,
    });

    validate({[name as string]: value});
  };

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

          <form
            className={styles.form}
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <Input
              label="Your name"
              name="name"
              onChange={handleInputChange}
              value={values.name}
              error={errors.name}
            />

            <Input
              label="Email address"
              name="email"
              onChange={handleInputChange}
              value={values.email}
              error={errors.email}
            />

            <Select
              className={styles.input}
              label="I would describe my user type as"
              name="userType"
              onChange={handleInputChange}
              value={values.userType}
              options={userTypeOptions}
              error={errors.userType}
            />

            <Input
              label="Password"
              name="password"
              onChange={handleInputChange}
              value={values.password}
              error={errors.password}
              onShowPasswordClick={handleShowPasswordClick}
              showPassword={showPassword}
            />

            <Button
              variant="contained"
              type="submit"
              color="primary"
              className={styles.button}
              disabled={
                Object.values(errors).some((err) => err !== "") ||
                (Object.values(errors).every((err) => err === "") &&
                  Object.values(values).some((val) => val === ""))
              }
            >
              Next
            </Button>
          </form>
          <Typography variant="body2" className={styles.tandc}>
            By clicking the "Next" button, you agree to creating a free account,
            and to <Link>Terms of Service</Link> and <Link>Privacy Policy</Link>
          </Typography>
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
