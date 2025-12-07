import React, {
  type ElementType,
  type FC,
  type PropsWithChildren,
} from "react";
import { TYPOGRAPHY_MAP, DEFAULT_COMPONENT } from "./constants";
import cn from 'classnames';

type TypographyProps = {
  component?: ElementType;
  className?: string;
};

export const Typography: FC<PropsWithChildren<TypographyProps>> = ({
  component = DEFAULT_COMPONENT,
  children,
  className
}) => {
  const Component = component;

  return (
    <Component className={cn(TYPOGRAPHY_MAP[component.toString()], className)}>{children}</Component>
  );
};
