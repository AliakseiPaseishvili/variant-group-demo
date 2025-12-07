import React, { type FC } from "react";
import { Wrapper, WRAPPER_TYPE } from "~/components/ui/Wrapper";
import type { TaskWithId } from "~/types/backend";
import styles from "./TasksBoard.module.scss";
import { Typography } from "~/components/ui/Typography";

type TaskProps = Omit<TaskWithId, "id">;

export const Task: FC<TaskProps> = ({ title, description }) => {
  return (
    <Wrapper type={WRAPPER_TYPE.CARD} className={styles.task}>
      <Typography component="h4">{title}</Typography>
      {description && <Typography component="p">{description}</Typography>}
    </Wrapper>
  );
};
