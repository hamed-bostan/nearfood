import { gray } from "@/lib/theme/colors";
import CustomButton from "@/presentation/components/CustomButton";
import Input from "@/presentation/components/Input";

export default function ContactForm() {
  return (
    <div className="hidden md:block">
      <h2 className="text-base mb-3 font-medium text-gray-50">پیام به ترخینه</h2>
      <form>
        <div className="grid grid-cols-2 grid-rows-3 mb-5 gap-x-5 gap-y-2">
          <Input label="نام و نام خانوادگی" labelColor={gray[200]} textColor={gray[200]} borderColor={gray[700]} />
          <Input label="شماره تماس" labelColor={gray[200]} textColor={gray[200]} borderColor={gray[700]} />
          <Input label="آدرس ایمیل (اختیاری)" labelColor={gray[200]} textColor={gray[200]} borderColor={gray[700]} />
          <Input
            label="پیام شما"
            labelColor={gray[200]}
            textColor={gray[200]}
            borderColor={gray[700]}
            multiline
            rows={5}
            className="col-start-2 row-start-1 row-span-full"
          />
        </div>
        <CustomButton
          type="submit"
          variant="outlined"
          sx={{
            display: "flex",
            marginLeft: "auto",
            width: { xs: "33%", lg: "25%" },
            backgroundColor: "transparent",
            "&:hover": { backgroundColor: gray[700] },
            borderColor: gray[700],
            color: gray[200],
          }}
        >
          ارسال پیام
        </CustomButton>
      </form>
    </div>
  );
}
