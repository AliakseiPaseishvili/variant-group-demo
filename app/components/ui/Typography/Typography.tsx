import React, {
  type ElementType,
  type FC,
  type PropsWithChildren,
} from "react";
import { TYPOGRAPHY_MAP, DEFAULT_COMPONENT } from "./constants";

type TypographyProps = {
  component?: ElementType;
};

export const Typography: FC<PropsWithChildren<TypographyProps>> = ({
  component = DEFAULT_COMPONENT,
  children,
}) => {
  const Component = component;

  return (
    <Component className={TYPOGRAPHY_MAP[component.toString()]}>{children}</Component>
  );
};
