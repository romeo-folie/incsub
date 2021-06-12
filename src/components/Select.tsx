import React, {ChangeEvent} from "react";
import {
  FormControl,
  InputLabel,
  Select as MSelect,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";

interface IProps {
  name: string;
  value: string;
  onChange: (
    event: ChangeEvent<{name?: string | undefined; value: unknown}>
  ) => void;
  label: string;
  options: string[];
  error: string;
  className?: string;
}

const Select: React.FC<IProps> = (props) => {
  const {label, name, value, onChange, error, className, options} = props;

  return (
    <FormControl
      variant="outlined"
      className={className}
      {...(error && {error: true})}
    >
      <InputLabel>{label}</InputLabel>
      <MSelect label={label} name={name} value={value} onChange={onChange}>
        <MenuItem value="">None</MenuItem>
        {options.map((opt) => (
          <MenuItem value={opt.toLowerCase()} key={opt.toLowerCase()}>
            {opt}
          </MenuItem>
        ))}
      </MSelect>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default Select;
