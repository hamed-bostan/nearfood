import { useFormContext, Controller } from "react-hook-form";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel } from "@mui/material";
import { gray, success } from "@/lib/theme/colors";

export default function ApplicantFeatures() {
  const { control } = useFormContext();

  return (
    <div>
      <p className="text-gray-700 block mb-4">ملک متقاضی:</p>
      <div className="grid grid-cols-2 gap-y-2">
        <Controller
          name="hasBusinessLicense"
          control={control}
          render={({ field }) => (
            <FormControlLabel
              control={
                <Checkbox
                  {...field}
                  checked={!!field.value}
                  size="small"
                  sx={{
                    color: success[300],
                    "&.Mui-checked": {
                      color: success[300],
                    },
                  }}
                />
              }
              label="پروانه کسب دارد."
              sx={{ color: gray[700], width: "fit-content" }}
            />
          )}
        />
        <Controller
          name="hasParking"
          control={control}
          render={({ field }) => (
            <FormControlLabel
              control={
                <Checkbox
                  {...field}
                  checked={!!field.value}
                  size="small"
                  sx={{
                    color: success[300],
                    "&.Mui-checked": {
                      color: success[300],
                    },
                  }}
                />
              }
              label="پارکینگ دارد."
              sx={{ color: gray[700], width: "fit-content" }}
            />
          )}
        />
        <Controller
          name="hasKitchen"
          control={control}
          render={({ field }) => (
            <FormControlLabel
              control={
                <Checkbox
                  {...field}
                  checked={!!field.value}
                  size="small"
                  sx={{
                    color: success[300],
                    "&.Mui-checked": {
                      color: success[300],
                    },
                  }}
                />
              }
              label="آشپزخانه دارد."
              sx={{ color: gray[700], width: "fit-content" }}
            />
          )}
        />
        <Controller
          name="hasStorage"
          control={control}
          render={({ field }) => (
            <FormControlLabel
              control={
                <Checkbox
                  {...field}
                  checked={!!field.value}
                  size="small"
                  sx={{
                    color: success[300],
                    "&.Mui-checked": {
                      color: success[300],
                    },
                  }}
                />
              }
              label="انبار دارد."
              sx={{ color: gray[700], width: "fit-content" }}
            />
          )}
        />
      </div>
    </div>
  );
}
