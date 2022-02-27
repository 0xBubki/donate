import { Button, ButtonProps } from "@chakra-ui/react";
import { FC } from "react";

export const NavButton: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button
      className="nav-button"
      backgroundColor="#FFD500"
      style={{
        borderRadius: 25,
        ...props?.style
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
