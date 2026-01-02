import { Divider } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { usePathname } from "next/navigation";
import CustomButton from "@/presentation/components/CustomButton";
import { primary } from "@/lib/theme/colors";

type HeaderDesktopProps = {
  label: string;
  style?: string;
  button?: boolean;
  handleClick?: () => void;
};

export default function HeaderDesktop({ label, style, button, handleClick }: HeaderDesktopProps) {
  const pathname = usePathname();

  return (
    <div className={`${pathname === "/userpanel" && "hidden"} md:block ${style}`}>
      <div className="flex items-center justify-between mb-2">
        <p className="block text-gray-800">{label}</p>
        {button && (
          <CustomButton
            variant="outlined"
            onClick={handleClick}
            startIcon={<AddCircleOutlineOutlinedIcon sx={{ width: "18px", height: "18px" }} />}
            sx={{
              display: {
                xs: pathname === "/checkout" ? "flex" : "none",
                md: "flex",
              },
              backgroundColor: "transparent",
              color: primary[500],
              fontSize: "0.75rem",
              border: "none",
              "&:hover": {
                backgroundColor: "transparent",
                color: primary[700],
              },
            }}
          >
            افزودن آدرس جدید
          </CustomButton>
        )}
      </div>
      <Divider />
    </div>
  );
}
