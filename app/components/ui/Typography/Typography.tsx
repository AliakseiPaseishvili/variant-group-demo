import React, {
  type ElementType,
  type FC,
  type PropsWithChildren,
} from "react";

type TypographyProps = {
  component: ElementType;
};

export const Typography: FC<PropsWithChildren<TypographyProps>> = ({
  component,
  children,
}) => {
  const Component = component;

  return <Component>{children}</Component>;
};
