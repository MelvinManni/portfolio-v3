import React from "react";
import DefaultButton from "./DefaultButton";
import IconButton from "./IconOnly";

export default function Button({ iconOnly, children, ...rest }) {
  return iconOnly ? <IconButton {...rest}>{children}</IconButton> : <DefaultButton {...rest}>{children}</DefaultButton>;
}
