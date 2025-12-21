import Link from "next/link";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import CustomButton from "@/presentation/components/CustomButton";
import { gray, primary } from "@/lib/theme/colors";

export default function ActionButton() {
  return (
    <div className="mx-auto mb-6 text-center w-fit">
      <Link href="/menu">
        <CustomButton
          variant="outlined"
          startIcon={<EventNoteOutlinedIcon sx={{ width: { xs: 16, md: 20 }, height: { xs: 16, md: 20 } }} />}
          sx={{
            color: primary[500],
            borderColor: primary[500],
            px: { xs: "0.5rem", md: "0.75rem" },
            height: { xs: "2rem", md: "2.25rem" },
            backgroundColor: "transparent",
            "&:hover": {
              color: gray[50],
              backgroundColor: primary[500],
            },
          }}
        >
          مشاهده منوی کامل
        </CustomButton>
      </Link>
    </div>
  );
}
