import React from 'react';
import classname from '../classname';
import Icon from '../icon/Icon';
import { Appearance } from '../types';
import styles from './Banner.module.css';

interface BannerProps {
  persistent?: Boolean;
  appearance?: Appearance;
  icon?: React.ReactNode;
  title?: string;
  description: string;
}

const Banner = ({
  persistent = true,
  appearance = Appearance.Info,
  icon = '',
  title = '',
  description = '',
}: BannerProps) => {
  return (
    <div className={classname(styles.banner, styles[appearance])}>
      {icon && <div className={styles.bannerIconContainer}>{icon}</div>}
      <div className={styles.bannerTextContainer}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Banner;
