import { gray, primary } from "@/lib/theme/colors";
import CustomButton from "@/presentation/components/CustomButton";
import { descriptionContent } from "@/presentation/constants/landing";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function DescriptionDetails() {
  const { title, paragraph, buttonLabel } = descriptionContent;

  return (
    <section className="text-gray-50 mb-6 md:mb-0">
      <h2 className="block mb-2 md:text-lg md:mb-4">{title}</h2>
      <p className="mb-3 text-xs text-justify md:text-sm md:mb-4">{paragraph}</p>
      <CustomButton
        endIcon={<ArrowBackIosIcon />}
        variant="outlined"
        sx={{
          display: "flex",
          borderColor: gray[50],
          width: { sx: "9.5rem", md: "11.5rem" },
          backgroundColor: "transparent",
          marginLeft: "auto",
          "&:hover": { backgroundColor: primary[700] },
          color: gray[50],
        }}
      >
        {buttonLabel}
      </CustomButton>
    </section>
  );
}
