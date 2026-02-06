import { gray } from "@/lib/theme/colors";
import Input from "@/presentation/components/Input";

export default function AdditionalOrderInfo() {
  return (
    <Input
      label="پیام شما"
      labelColor={gray[700]}
      textColor={gray[800]}
      borderColor={gray[400]}
      multiline
      rows={2}
      sx={{ my: { xs: "12px" }, mt: { md: "20px" } }}
    />
  );
}
