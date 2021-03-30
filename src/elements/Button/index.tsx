import classNames from 'classnames';
import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { Size, Variant } from '../../common';
// import { Container } from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outlined?: boolean;
  size?: Size;
  variant?: Variant;
  icon?: React.ComponentType<IconBaseProps> | null;
  ref?: React.RefObject<HTMLButtonElement> | null | undefined;
}

const Button: React.FC<ButtonProps> = ({
  icon: Icon,
  children,
  outlined,
  ref,
  size = 'medium',
  variant = 'blue',
  className,
  ...props
}) => {
  const classes = classNames(
    'button',
    {
      [`is-${size}`]: true,
      [`is-${variant}`]: true,
      'is-outlined': outlined,
      'is-icon': Icon,
    },
    className
  );

  return (
    <button
      className={classes}
      // icon={Icon}
      ref={ref}
      {...props}
    >
      {children}
      {Icon ? <Icon size={20} className="max-w-max" /> : null}
    </button>
  );
};

export { Button };
