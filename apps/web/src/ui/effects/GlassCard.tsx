import { Card } from 'antd';
import type { CardProps } from 'antd';

export interface GlassCardProps extends CardProps {
  liftOnHover?: boolean;
}

export function GlassCard({
  className,
  liftOnHover = true,
  ...props
}: GlassCardProps) {
  const classes = [
    'sabai-glass-card',
    'sabai-glass-card-enter',
    liftOnHover ? 'sabai-glass-card-hoverable' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <Card className={classes} variant="borderless" {...props} />;
}
