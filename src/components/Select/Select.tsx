import React, {
  ChangeEvent,
  useLayoutEffect,
  useState,
  useCallback,
} from "react";
import "../Input/Input.scss";

interface IProps {
  name: string;
  value: string;
  onChange: (
    event: ChangeEvent<{name?: string | undefined; value: unknown}>
  ) => void;
  label: string;
  options: string[];
  error: string;
}

const Select: React.FC<IProps> = (props) => {
  const {label, name, value, onChange, error, options} = props;

  const [hasValue, setHasValue] = useState<boolean>(false);

  const handleBlur = useCallback(() => {
    if (value.length) {
      setHasValue(true);
    }
  }, [value]);

  const handleFocus = () => setHasValue(false);

  useLayoutEffect(() => {
    handleBlur();
  }, [handleBlur]);

  return (
    <div
      className={`input-group ${error ? "error" : ""} ${
        hasValue ? "has-value" : ""
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
          <option value={opt.toLowerCase()} key={opt.toLowerCase()}>
            {opt}
          </option>
        ))}
      </select>
      {error ? <span className="helper-text">{error}</span> : null}
    </div>
  );
};

export default Select;
