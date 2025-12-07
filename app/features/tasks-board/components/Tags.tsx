import React, { type FC } from "react";
import { Badge, BADGE_TYPE } from "~/components/Badge";
import type { Label } from "~/types/backend";
import styles from "./TasksBoard.module.scss";

type TagsProps = {
  tags: Label[];
};

export const Tags: FC<TagsProps> = ({ tags }) => {
  return (
    <div className={styles.tags}>
      {tags.map(({ id, title }) => (
        <Badge key={id} text={title} type={BADGE_TYPE.TAG} />
      ))}
    </div>
  );
};
