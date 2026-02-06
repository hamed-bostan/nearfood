import CustomButton from "@/presentation/components/CustomButton";
import Input from "@/presentation/components/Input";
import { Divider } from "@mui/material";
import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";
import { gray } from "@/lib/theme/colors";

export default function DiscountCode() {
  return (
    <div className="p-4 border border-gray-400 rounded-lg mb-3 md:mb-5">
      <div className="mb-2 flex gap-x-1 items-center">
        <PercentOutlinedIcon sx={{ color: gray[800], fontSize: { xs: 18, md: 20 } }} />
        <span className="text-sm text-gray-800">ثبت کد تخفیف</span>
      </div>
      <Divider />
      <div className="flex gap-x-4 mt-4">
        <Input label="کد تخفیف" />
        <CustomButton size="small" sx={{ width: "100px", backgroundColor: gray[400] }}>
          ثبت کد
        </CustomButton>
      </div>
    </div>
  );
}
