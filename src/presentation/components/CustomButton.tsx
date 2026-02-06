import { primary } from "@/lib/theme/colors";
import { Button, ButtonProps } from "@mui/material";
import { ReactNode } from "react";

type CustomButtonProps = ButtonProps & {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "contained" | "outlined" | "text";
  onClick?: () => void;
  sx?: object;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
};

export default function CustomButton({
  children,
  variant = "contained",
  type = "button",
  onClick,
  sx = {},
  startIcon = null,
  endIcon = null,
  ...props
}: CustomButtonProps) {
  return (
    <Button
      type={type}
      variant={variant}
      onClick={onClick}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={{
        backgroundColor: primary[500],
        "&:hover": {
          backgroundColor: primary[700],
        },
        ...sx, // Allow custom styles to override default styles
      }}
      {...props} // Pass all other props to the button (e.g., 'disabled', 'size', etc.)
    >
      {children}
    </Button>
  );
}
