import React, { type FC } from "react";
import { Wrapper, WRAPPER_TYPE } from "~/components/ui/Wrapper";
import styles from "./TasksBoard.module.scss";
import type { TaskWithId } from "~/types/backend";
import { Task } from "./Task";

type WeekProps = { title: string; tasks: TaskWithId[] };

export const Week: FC<WeekProps> = ({ title, tasks }) => {
  return (
    <Wrapper type={WRAPPER_TYPE.LANE} className={styles.week}>
      {title}
      {tasks.map(({ id, ...task }) => (
        <Task key={id} {...task} />
      ))}
    </Wrapper>
  );
};
