import React from 'react';

interface DropdownOptionProps {
  isDefault?: boolean;
  value: number;
  description: string;
}

const DropdownOption = ({
  isDefault = false,
  value,
  description,
}: DropdownOptionProps) => {
  return <option value={value}>{description}</option>;
};

export default DropdownOption;
