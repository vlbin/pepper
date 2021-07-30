import React from 'react';
import styles from './Dropdown.module.css';

type option = {
  value: number;
  description: string;
};

interface DropdownProps {
  options: option[];
}

const Dropdown = ({ options }: DropdownProps) => {
  return (
    <select className={styles.dropdown}>
      {options.map((option, index) => {
        return (
          <option key={index} value={option.value}>
            {option.description}
          </option>
        );
      })}
    </select>
  );
};

export default Dropdown;
