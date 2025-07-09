export type ButtonColorType =
    "primary" |
    "secondary";

export type ButtonVariantType =
    "filled" |
    "outline" |
    "ghost";

export type ButtonSizeType = 
    "base" |
    "sm" |
    "lg";

export const buttonStyle = "transition-all duration-300 cursor-pointer";

export const buttonColorMap = {
    primary: {
        filled: "bg-secondary-500 text-primary-500 hover:bg-secondary-100",
        outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
        ghost: "text-blue-600 hover:bg-blue-50",
    },
    secondary: {
        filled: "bg-gray-600 text-white hover:bg-gray-700",
        outline: "border border-gray-600 text-gray-600 hover:bg-gray-50",
        ghost: "text-secondary-500 hover:bg-gray-50 hover:text-primary-500",
  },
}

export const buttonSizeMap = {
  sm: "px-3 py-1 text-sm rounded-sm",
  base: "px-5 py-2 text-base rounded-md",
  lg: "px-7 py-3 text-base rounded-2xl",
};
