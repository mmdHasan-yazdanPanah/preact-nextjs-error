import { ElementType, forwardRef, ForwardedRef } from 'react';
import { PolymorphicComponentProps, PolymorphicRef } from '../types/global';

type BaseProps = {
  loading?: boolean;
  progress?: number;
  disabled?: boolean;
  progress_color?: string;
};

//  BaseButton ***********************************
const BaseButtonInner = <TAs extends ElementType = 'button'>(
  {
    className,
    children,
    disabled,
    loading,
    progress = 0,
    progress_color,
    as,
    ...props
  }: PolymorphicComponentProps<TAs, BaseProps>,
  ref?: ForwardedRef<PolymorphicRef<TAs>>
) => {
  const isDisabled = disabled || loading;

  const Component = as || 'button';

  return (
    <Component ref={ref} {...props} className={className}>
      {children}
      {progress > 0 && (
        <div className={progress_color}>
          <div style={{ transform: `scaleX(${progress}` }} />
        </div>
      )}
    </Component>
  );
};
export const BaseButton = forwardRef(BaseButtonInner);

//  PrimaryButton ***********************************
const PrimaryButtonInner = <TAs extends ElementType = 'button'>(
  { className, ...props }: PolymorphicComponentProps<TAs, BaseProps>,
  ref?: PolymorphicRef<TAs>
) => {
  return (
    <BaseButton
      ref={ref}
      progress_color='text-primary'
      {...props}
      className={className}
    />
  );
};
export const PrimaryButton = forwardRef(PrimaryButtonInner);
