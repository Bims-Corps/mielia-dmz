import clsx from 'clsx';
import { type ButtonHTMLAttributes, type FC } from 'react'
import { 
  buttonColorMap, 
  buttonSizeMap, 
  buttonStyle, 
  type ButtonColorType, 
  type ButtonSizeType, 
  type ButtonVariantType 
} from './index';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColorType;
  variant?: ButtonVariantType;
  size?: ButtonSizeType;
}

export const Button: FC<ButtonProps> = (props) => {
  const { 
    children, 
    className, 
    type="button", 
    color="primary",
    size="base",
    variant="filled", 
    ...otherProps 
  } = props;

  const variantStyle = buttonColorMap[color][variant];
  const sizeStyle = buttonSizeMap[size];

  return (
    <>
      <button
        type={type} 
        className={clsx(
          buttonStyle,
          variantStyle,
          sizeStyle,
          className
        )}
        children={children}  
        {...otherProps}
      />
    </>
  )
}
