import { WRAPPER_TYPE } from "./types";
import styles from './Wrapper.module.scss';

export const WRAPPER_MAP: Record<WRAPPER_TYPE, string> = {
  [WRAPPER_TYPE.BASE]: styles.wrapper_base,
  [WRAPPER_TYPE.LANE]: styles.wrapper_lane,
  [WRAPPER_TYPE.CARD]: styles.wrapper_card,
}