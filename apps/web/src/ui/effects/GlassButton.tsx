import { Button } from "antd";
import type { ButtonProps } from "antd";

export type GlassButtonProps = ButtonProps;

export function GlassButton({
  className,
  size = "large",
  type = "text",
  ...props
}: GlassButtonProps) {
  const classes = ["sabai-glass-button", className].filter(Boolean).join(" ");

  return <Button className={classes} size={size} type={type} {...props} />;
}
