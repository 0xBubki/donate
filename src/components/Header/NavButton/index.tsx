import { Button, ButtonProps } from "@chakra-ui/react";
import { FC } from "react";

export const NavButton: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button
      backgroundColor="#FFD500"
      style={{
        borderRadius: 25,
        height: 58, 
        width: 136,
        ...props?.style
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
