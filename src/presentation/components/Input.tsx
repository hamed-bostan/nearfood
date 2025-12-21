import { gray } from "@/lib/theme/colors";
import { TextField, TextFieldProps } from "@mui/material";
import { forwardRef } from "react";

type InputProps = TextFieldProps & {
  label: string;
  labelColor?: string;
  textColor?: string;
  borderColor?: string;
};

const Input = forwardRef(function Input(
  {
    label,
    labelColor = gray[700],
    textColor = gray[800],
    borderColor = gray[400],
    sx = {},
    ...props
  }: InputProps,
  ref
) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      label={label}
      size="small"
      sx={{
        "& .MuiInputLabel-root": {
          color: labelColor, // Dynamic Label color
          fontSize: { xs: "12px", lg: "14px" }, // Label font size changes at lg
        },
        "& .MuiInputLabel-root.Mui-focused": { color: labelColor }, // Label color when focused
        "& .MuiOutlinedInput-root": {
          "& fieldset": { borderColor }, // Default border color
          "&:hover fieldset": { borderColor }, // Hover effect
          "&.Mui-focused fieldset": { borderColor }, // Focus effect
        },
        "& .MuiInputBase-input": {
          color: textColor, // Dynamic Input text color
          fontSize: { xs: "12px", lg: "14px" }, // Input text font size changes at lg
        },
        ...sx, // Allow custom styles to override default styles
      }}
      inputRef={ref}
      {...props}
    />
  );
});

export default Input;
