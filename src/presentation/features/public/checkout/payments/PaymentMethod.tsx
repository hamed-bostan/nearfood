import Checkbox from "@mui/material/Checkbox";
import { Divider } from "@mui/material";
import { WalletOutlined, AddCardOutlined } from "@mui/icons-material";
import { useOrderContext } from "@/context/OrderContext";
import { gray, success } from "@/lib/theme/colors";

export default function PaymentMethod() {
  const { paymentMethod, setPaymentMethod } = useOrderContext();

  return (
    <div className="border border-gray-400 rounded-lg text-xs text-gray-700 p-4 md:text-sm md:flex justify-between mb-3 md:mb-5">
      <div className="flex items-center mb-2 gap-x-1 md:mb-0">
        <WalletOutlined sx={{ color: gray[800], fontSize: { xs: 18, md: 20 } }} />
        <span className="text-gray-800 text-sm md:text-base">روش پرداخت</span>
      </div>
      <Divider className="md:hidden" />

      <div className="flex items-center mt-2 mb-4 gap-x-1 lg:gap-x-2 md:my-0">
        <Checkbox
          id="term1"
          checked={paymentMethod === "online"}
          onChange={() => setPaymentMethod("online")}
          disableRipple
          size="small"
          sx={{
            "&.MuiCheckbox-root": { p: 0 },
            color: success[300],
            "&.Mui-checked": { color: success[300] },
          }}
        />
        <div className="flex flex-col gap-y-1">
          <label htmlFor="term1" className="text-nowrap">
            پرداخت اینترنتی
          </label>
          <span className="hidden text-xs lg:block text-nowrap">آنلاین پرداخت میکنم.</span>
        </div>
        <AddCardOutlined sx={{ color: gray[700], fontSize: { xs: 18, md: 20 } }} />
      </div>

      <div className="flex items-center gap-x-1 lg:gap-x-2">
        <Checkbox
          id="term2"
          checked={paymentMethod === "cash"}
          onChange={() => setPaymentMethod("cash")}
          disableRipple
          size="small"
          sx={{
            "&.MuiCheckbox-root": { p: 0 },
            color: success[300],
            "&.Mui-checked": { color: success[300] },
          }}
        />
        <div className="flex flex-col gap-y-1">
          <label htmlFor="term2" className="text-nowrap">
            پرداخت در محل
          </label>
          <span className="hidden text-xs lg:block text-nowrap">در محل پرداخت میکنم.</span>
        </div>
        <WalletOutlined sx={{ color: gray[700], fontSize: { xs: 18, md: 20 } }} />
      </div>
    </div>
  );
}
