import { ArrowBackOutlined } from "@mui/icons-material";
import Link from "next/link";
import CustomButton from "@/presentation/components/CustomButton";
import { BranchItemProps } from "@/types/landing.types";
import { gray, primary } from "@/lib/theme/colors";

export default function DisplayingDetails({ branch }: BranchItemProps) {
  return (
    <article className="col-span-1 row-span-2 p-2 text-center md:row-span-1 md:py-4">
      <h3 className="text-sm font-medium text-gray-800 row-span-1 mb-1 md:mb-3 md:text-lg md:font-semibold">
        {branch.title}
      </h3>
      <address className="not-italic text-xs text-gray-700 row-span-1 md:text-sm md:mb-4">{branch.address}</address>
      <div className="mx-auto transition-opacity duration-300 opacity-0 w-fit group-hover:opacity-100">
        <Link href="/branch" aria-label={`View ${branch.title} branch page`}>
          <CustomButton
            variant="outlined"
            endIcon={
              <ArrowBackOutlined
                sx={{
                  order: 2,
                  width: { xs: 16, md: 20 },
                  height: { xs: 16, md: 20 },
                }}
              />
            }
            sx={{
              backgroundColor: "transparent",
              color: primary[700],
              border: `1px solid ${primary[700]}`,
              display: { xs: "none", md: "flex" },
              transition: "opacity 0.3s ease-in-out",
              "&:hover": {
                color: gray[50], // White for better contrast on dark hover
                backgroundColor: primary[700],
              },
            }}
          >
            صفحه شعبه
          </CustomButton>
        </Link>
      </div>
    </article>
  );
}
