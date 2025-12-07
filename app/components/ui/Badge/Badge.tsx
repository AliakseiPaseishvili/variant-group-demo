import React, { type FC, type PropsWithChildren } from "react";
import { BADGE_MAP } from "./constants";
import { BADGE_TYPE } from "./types";
import cn from "classnames";

type BadgeProps = {
  text: string;
  type?: BADGE_TYPE;
  className?: string;
};

export const Badge: FC<PropsWithChildren<BadgeProps>> = ({
  text,
  className,
  type = BADGE_TYPE.LABEL,
}) => <span className={cn(BADGE_MAP[type], className)}>{text}</span>;
