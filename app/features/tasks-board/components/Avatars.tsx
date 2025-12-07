import React, { type FC } from "react";
import { Avatar } from "~/components/Avatar";
import type { ProfilePic } from "~/types/backend";
import styles from './TasksBoard.module.scss';
import cn  from 'classnames';

type AvatarsProps = {
  userImages: ProfilePic[];
};

export const Avatars: FC<AvatarsProps> = ({ userImages }) => {
  return (
    <div className={cn(styles.stack, styles.avatars)}>
      {userImages.map(({ id, url }) => (
        <Avatar key={id} src={url} />
      ))}
    </div>
  );
};
