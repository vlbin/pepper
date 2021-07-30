import React, { useState } from 'react';
import styles from './Input.module.css';

export enum InputTypes {
  Text = 'text',
  Number = 'number',
  Date = 'date',
}

interface InputProps {
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  _value?: string;
  name?: string;
  placeholder?: string;
  type?: InputTypes;
  label?: React.ReactNode;
  disabled?: boolean;
}

const Input = ({
  onChange = (e) => {},
  _value = '',
  name = '',
  placeholder = '',
  type = InputTypes.Text,
  label = '',
  disabled = false,
}: InputProps) => {
  const [value, setValue] = useState(_value);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
    onChange(e);
  };

  const renderLabel = () => {};

  return (
    <input
      disabled={disabled}
      onChange={handleChange}
      value={value}
      name={name}
      placeholder={placeholder}
      type={type}
      className={styles.input}
    />
  );
};

export default Input;
