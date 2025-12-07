import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '~/components/ui/Typography/Typography';

export const TasksBoard = () => {
  const { t } = useTranslation('task_board');

  return <main>
    <Typography component="h1">{t('task_board:header')}</Typography>
    <Typography component="p">{t('task_board:header_description')}</Typography>
  </main>
}