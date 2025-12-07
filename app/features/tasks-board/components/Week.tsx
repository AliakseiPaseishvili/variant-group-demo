import React, { type FC } from "react";
import { Wrapper, WRAPPER_TYPE } from "~/components/ui/Wrapper";
import styles from "./TasksBoard.module.scss";
import type { TaskWithId } from "~/types/backend";
import { Task } from "./Task";
import { Badge } from "~/components/ui/Badge";

type WeekProps = { title: string; tasks: TaskWithId[] };

export const Week: FC<WeekProps> = ({ title, tasks }) => {
  return (
    <Wrapper type={WRAPPER_TYPE.LANE}>
      <Badge text={title} />
      <div className={styles.week}>
        {tasks.map(({ id, ...task }) => (
          <Task key={id} {...task} />
        ))}
      </div>
    </Wrapper>
  );
};
