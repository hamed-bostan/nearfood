import { Divider } from "@mui/material";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";

export default function CashPayment() {
  return (
    <div className="p-4 border border-gray-400 rounded-lg md:grid md:grid-cols-[30fr_70fr] bg-gray-100 mb-3 md:mb-5">
      <div className="text-gray-800 mb-2 flex items-center gap-x-1 md:mb-0 md:self-start">
        <ReportGmailerrorredOutlinedIcon sx={{ fontSize: { xs: 18, md: 20 } }} />
        <span className="text-sm">قابل توجه</span>
      </div>
      <Divider className="md:hidden" />
      <p className="text-xs text-gray-700 pt-4 md:pt-0">
        هزینه سفارش شما در حین تحویل کالا دریافت خواهد شد. لطفا قبل از تحویل کالا کارت بانکی یا پول نقد همراه خود داشته
        باشید و از درخواست برای پرداخت در زمان بعدی یا نسیه خودداری فرمایید. با تشکر از همراهی شما.
      </p>
    </div>
  );
}
