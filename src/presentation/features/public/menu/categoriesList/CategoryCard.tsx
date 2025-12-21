import { gray, primary } from "@/lib/theme/colors";
import { CategoryCardProps } from "@/types/menu.types";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

export default function CategoryCard({ item, setSelectedCategory, isSelected }: CategoryCardProps) {
  return (
    <button
      onClick={() => setSelectedCategory(item)}
      className="flex items-center gap-x-1 bg-[#EDEDED] rounded-md px-2 h-6 md:rounded-xl md:h-8"
    >
      <p className={`text-xs md:text-sm ${isSelected ? "text-primary-500" : "text-gray-800"}`}>{item}</p>
      <ArrowBackOutlinedIcon
        sx={{
          color: isSelected ? primary[500] : gray[800],
          fontSize: { xs: 15, md: 17 },
        }}
      />
    </button>
  );
}
