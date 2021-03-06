import React, {
  ChangeEvent,
  useState,
  useLayoutEffect,
  useCallback,
} from "react";
import Show from "../../assets/eye.svg";
import Hide from "../../assets/eye-off.svg";
import "./Input.scss";

interface Iprops {
  name: string;
  value: string;
  label: string;
  error: string;
  showPassword?: boolean;
  onShowPasswordClick?: () => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Iprops> = (props) => {
  const {
    name,
    value,
    onChange,
    label,
    error,
    showPassword,
    onShowPasswordClick,
  } = props;
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
      <input
        id={name}
        name={name}
        value={value}
        type={
          name === "password" ? (showPassword ? "text" : "password") : "text"
        }
        className="input"
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChange={onChange}
      />
      {name === "password" ? (
        <img
          src={showPassword ? Hide : Show}
          alt="Visibility toggle icon"
          onClick={onShowPasswordClick}
        />
      ) : null}
      {error ? <span className="helper-text">{error}</span> : null}
    </div>
  );
};

export default Input;
