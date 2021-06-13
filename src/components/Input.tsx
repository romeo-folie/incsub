import React, {ChangeEvent} from "react";
import {TextField, InputAdornment, IconButton} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";

interface Iprops {
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  error: string;
  className: string;
  onShowPasswordClick?: () => void;
  showPassword?: boolean;
}

const Input: React.FC<Iprops> = (props) => {
  const {
    name,
    value,
    onChange,
    label,
    error,
    className,
    showPassword,
    onShowPasswordClick,
  } = props;

  return (
    <TextField
      label={label}
      variant="outlined"
      name={name}
      className={className}
      onChange={onChange}
      value={value}
      key={name}
      {...(error && {error: true, helperText: error})}
      {...(name === "password" && {
        InputProps: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                edge="end"
                onClick={onShowPasswordClick}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        },
        type: showPassword ? "text" : "password",
      })}
    />
  );
};

export default Input;
