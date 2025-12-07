import React from 'react';
import styles from './TasksBoard.module.scss';
import { Wrapper } from '~/components/Wrapper';
import { useTranslation } from 'react-i18next';
import { Week } from './Week';
import { LastWeek, ThisWeek, NextWeek } from '../mock';

export const Board = () => {
  const { t } = useTranslation('task_board');


  return <Wrapper className={styles.board}>
    <Week title={t('task_board:last_week')} tasks={LastWeek} />
    <Week title={t('task_board:this_week')} tasks={ThisWeek} />
    <Week title={t('task_board:next_week')} tasks={NextWeek} />
  </Wrapper>
};
