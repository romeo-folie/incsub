import React, {useState, ChangeEvent, FormEvent} from "react";
import "./App.scss";
import Input from "./components/Input/Input";
import Select from "./components/Select/Select";

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
        <div className="step-info">
          <div className="step-title">Step 1 of 3</div>
          <Dot />
          <Dot />
          <Dot />
        </div>

        <div className="left-content">
          <h4 className="left-title">Let's set up the account</h4>
          <h4 className="subtitle">
            Already have an account?
            <a href="/" id="signInLink">
              Sign in
            </a>
          </h4>

          <form className="form" autoComplete="off" onSubmit={handleSubmit}>
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

            <button
              type="submit"
              className={`sub-btn ${
                Object.values(errors).some((err) => err !== "") ||
                (Object.values(errors).every((err) => err === "") &&
                  Object.values(values).some((val) => val === ""))
                  ? "disabled"
                  : ""
              }`}
            >
              Next
            </button>
          </form>
          <span className="tandc">
            By clicking the "Next" button, you agree to creating a free account,
            and to <a href="/">Terms of Service</a> and{" "}
            <a href="/">Privacy Policy</a>
          </span>
        </div>
      </div>
      <div className="division right">
        <div className="right-content">
          <h4 className="right-title">Dummy heading</h4>

          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            cupiditate at modi officiis quasi provident repudiandae distinctio
            ea totam deleniti, iusto doloremque cumque excepturi et! Sunt dolor
            cupiditate consectetur nostrum officiis? Fugit vero voluptatem nam
            voluptate eos, reiciendis quos ea.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
