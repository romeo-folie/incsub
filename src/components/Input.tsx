import React, {ChangeEvent} from "react";
import {TextField, InputAdornment, IconButton} from "@material-ui/core";
import {VisibilityOff} from "@material-ui/icons";

interface Iprops {
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  error: string;
  className: string;
}

const Input: React.FC<Iprops> = (props) => {
  const {name, value, onChange, label, error, className} = props;

  return (
    <TextField
      label={label}
      variant="outlined"
      name={name}
      className={className}
      onChange={onChange}
      value={value}
      {...(error && {error: true, helperText: error})}
      {...(name === "password" && {
        InputProps: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" edge="end">
                <VisibilityOff />
              </IconButton>
            </InputAdornment>
          ),
        },
        type: "password",
      })}
    />
  );
};

export default Input;
