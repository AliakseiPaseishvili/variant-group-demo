import React, { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Avatar.module.scss';

type AvatarProps = {
  src: string;
}

/**
 * Can be extended with size.
 */
export const Avatar: FC<AvatarProps> = ({ src }) => {
  const { t } = useTranslation('alt');
  return <img src={src} alt={t('alt:profile_alt')} className={styles.avatar_xs} />
}