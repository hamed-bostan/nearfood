import { FoodType } from "@/types/food-types";

export default function FoodTypesItem({ type }: FoodType) {
  return (
    <p
      className={`border-b transition-all ${
        type === "غذای اصلی"
          ? "font-medium text-primary-500 border-primary-500 md:font-bold"
          : "border-transparent text-sm text-gray-700 md:text-base"
      }`}
    >
      {type}
    </p>
  );
}
