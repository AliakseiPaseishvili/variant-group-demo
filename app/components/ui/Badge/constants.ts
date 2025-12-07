import { BADGE_TYPE } from "./types";
import styles from './Badge.module.scss';

export const BADGE_MAP: Record<BADGE_TYPE, string> = {
  [BADGE_TYPE.LABEL]: styles.badge_label,
  [BADGE_TYPE.TAG]: styles.badge_tag,
} 