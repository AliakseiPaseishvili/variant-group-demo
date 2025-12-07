import React, { type FC, type PropsWithChildren } from "react";
import { WRAPPER_TYPE } from "./types";
import { WRAPPER_MAP } from "./constants";
import cn from "classnames";

type WrapperProps = {
 type?: WRAPPER_TYPE;
 className?: string;
};

export const Wrapper: FC<PropsWithChildren<WrapperProps>> = ({ children, className, type = WRAPPER_TYPE.BASE }) => (
  <div className={cn(WRAPPER_MAP[type], className)}>{children}</div>
);
