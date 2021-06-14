import React, {ChangeEvent, useEffect, useState} from "react";
import "../Input/Input.css";

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

  const [hasValue, setHasValue] = useState<boolean>(false);
  const handleBlur = () => setHasValue(true);
  const handleFocus = () => setHasValue(false);

  useEffect(() => {
    function initFields() {
      if (value.length) {
        setHasValue(true);
      }
    }

    initFields();
  }, [value]);

  return (
    <div
      className={`input-group ${error ? "error" : ""} ${
        hasValue && value.length ? "has-value" : ""
      }`}
    >
      <label htmlFor={name}>{label}</label>
      <select
        id={name}
        name={name}
        value={value}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChange={onChange}
        className="input"
      >
        <option value=""></option>
        {options.map((opt) => (
          <option value={opt.toLowerCase()}>{opt}</option>
        ))}
      </select>
      {error ? <span className="helper-text">{error}</span> : null}
    </div>
  );
};

export default Select;
