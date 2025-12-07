import React from "react";
import { useTranslation } from "react-i18next";
import { Typography } from "~/components/Typography";
import styles from './TasksBoard.module.scss';
import { Board } from "./Board";

export const TasksBoard = () => {
  const { t } = useTranslation("task_board");

  return (
    <section className={styles.tasks_board}>
      <div>
        <Typography component="h1">{t("task_board:header")}</Typography>
        <Typography component="p">
          {t("task_board:header_description")}
        </Typography>
      </div>
      <Board />
    </section>
  );
};
