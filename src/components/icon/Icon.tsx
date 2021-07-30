import React from 'react';
import classname from '../classname';
import { IconSize } from '../types';

interface IconProps {
  name: string;
  _size?: IconSize;
  color?: string;
}

const Icon = ({ name, _size = IconSize.Small, color = '' }: IconProps) => {
  return (
    <span
      className={classname('material-icons', _size)}
      style={{
        color: color,
      }}
    >
      {name}
    </span>
  );
};

export default Icon;
