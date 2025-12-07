import type { ElementType } from 'react';
import styles from './Typography.module.scss';

export const DEFAULT_COMPONENT = 'span';

export const TYPOGRAPHY_MAP: Record<string, string> = {
  'h1': styles.typography_h1,
  'h4': styles.typography_h4,
  'p': styles.typography_p,
};
