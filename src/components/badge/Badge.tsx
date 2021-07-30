import React from 'react';
import classname from '../classname';
import { Appearance } from '../types';
import styles from './Badge.module.css';

interface BadgeProps {
  text: string;
  appearance?: Appearance;
}

const Badge = ({ text, appearance = Appearance.Positive }: BadgeProps) => {
  return (
    <span className={classname(styles.badge, styles[appearance])}>{text}</span>
  );
};

export default Badge;
