import React from 'react';
import Input, { InputTypes } from '../input/Input';
import styles from './Checkbox.module.css';

interface CheckboxProps {
  name?: string;
  labelText?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent) => void;
  labelPosition?: 'before' | 'after';
}

const Checkbox = ({
  name = '',
  labelText = '',
  checked = false,
  labelPosition = 'after',
  onChange = (e: React.ChangeEvent) => {},
}: CheckboxProps) => {
  const handleChange = (e: React.ChangeEvent) => {
    onChange(e);
  };

  const label = <span>{labelText}</span>;

  return (
    <label>
      {labelPosition === 'before' && label}
      <input
        type="checkbox"
        name={name}
        onChange={handleChange}
        className={styles.checkbox}
      />
      <div className={styles.styledCheckbox}>
        <span className="material-icons md-18 md-light">check</span>
      </div>
      {labelPosition === 'after' && label}
    </label>
  );
};

export default Checkbox;
