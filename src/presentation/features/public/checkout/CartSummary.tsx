"use client";

import { useSelector, useDispatch } from "react-redux";
import formatToPersianStyle from "@/lib/utils/formatToPersianStyle";
import ItemsOverviewMobile from "./shared/cartItemsMobileView";
import { Divider, IconButton } from "@mui/material";
import { ReportGmailerrorredOutlined, DeleteOutlined } from "@mui/icons-material";
import { RootState } from "@/store";
import { clear } from "@/store/cart.slice";
import CustomButton from "@/presentation/components/CustomButton";
import { useCheckoutTab } from "@/context/checkout-tab.context";
import { useOrderContext } from "@/context/OrderContext";
import { useUserAddresses } from "@/hooks/useUserAddresses";
import { useOrderSubmit } from "@/hooks/useOrderSubmit";
import { useAddressLogic } from "@/hooks/useAddressLogic";
import { calculateOrderTotal, calculateTotalDiscount } from "@/domain/order/order.rules";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { notifyOrderWorkflow } from "@/infrastructure/apis/notifyOrderWorkflow.api";
import { gray, warning } from "@/lib/theme/colors";

export default function CartSummary({ phoneNumber }: { phoneNumber: string }) {
  const dispatch = useDispatch();
  const { activeTab } = useCheckoutTab();
  const selectedItems = useSelector((state: RootState) => state.cart.selectedItems);
  const itemsCounter = useSelector((state: RootState) => state.cart.itemsCounter);
  const { deliveryMethod, branch, paymentMethod, selectedAddress, notes } = useOrderContext();
  const { addresses, isLoading } = useUserAddresses();
  const { submitOrder } = useOrderSubmit();
  const { data: session } = useSession();
  // Automatically handle address selection and validation
  useAddressLogic(addresses, isLoading);
  const hasBorder = activeTab === 1 || activeTab === 2;
  const hasQuantitySelector = activeTab === 1 || activeTab === 2;
  const totalDiscount = calculateTotalDiscount(selectedItems);
  const totalPayable = calculateOrderTotal(selectedItems);

  const handleSubmitOrder = async () => {
    const order = await submitOrder({
      deliveryMethod,
      paymentMethod,
      selectedAddress,
      branch,
      notes,
      selectedItems,
    });

    if (!order) return;

    try {
      await notifyOrderWorkflow({
        customerPhone: phoneNumber,
        totalPrice: calculateOrderTotal(selectedItems),
        orderSummary: selectedItems.map((i) => `${i.quantity}x ${i.title}`).join(", "),
      });
    } catch (error) {
      console.error("❌ Error notifying workflow:", error);
    }

    dispatch(clear());
  };

  const handleClearCart = () => {
    dispatch(clear());
  };

  const buttonText = session ? "ثبت سفارش" : "ثبت نام";

  return (
    <div
      className={`text-sm text-gray-800 md:border md:border-gray-400 md:p-4 lg:p-5 md:rounded-lg md:h-fit ${
        hasBorder && "border border-gray-400 rounded-lg p-4"
      }`}
    >
      <div className="justify-between hidden mb-3 md:flex">
        <span className="text-base">سبد خرید ({itemsCounter})</span>
        <IconButton onClick={handleClearCart} aria-label="حذف سبد خرید" size="small">
          <DeleteOutlined
            sx={{
              color: gray[800],
            }}
          />
        </IconButton>
      </div>
      <Divider className="hidden md:block md:mb-3" />
      {hasQuantitySelector && (
        <div className="hidden md:block">
          <ItemsOverviewMobile selectedItems={selectedItems} />
        </div>
      )}
      <div className="flex justify-between py-3">
        <span>تخفیف محصولات</span>
        <span className="text-gray-700">{formatToPersianStyle(totalDiscount)} تومان</span>
      </div>
      <Divider />
      <div className="flex justify-between mt-3 mb-2">
        <span>هزینه ارسال</span>
        <span className="text-gray-700">0 تومان</span>
      </div>
      <div className="flex mb-3 gap-x-2">
        <div>
          <ReportGmailerrorredOutlined fontSize="small" sx={{ color: warning[500] }} />
        </div>
        <p className="text-xs text-warning-500">
          هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی شما محاسبه و به این مبلغ اضافه خواهد شد.
        </p>
      </div>
      <Divider />
      <div className="flex justify-between py-3">
        <span>مبلغ قابل پرداخت</span>
        <span className="text-primary-500">{formatToPersianStyle(totalPayable)} تومان</span>
      </div>
      <CustomButton
        component={session ? "button" : Link}
        href={session ? undefined : "/auth"}
        type={session ? "submit" : undefined}
        onClick={session ? handleSubmitOrder : undefined}
        size="medium"
        sx={{ width: "100%" }}
      >
        {buttonText}
      </CustomButton>
    </div>
  );
}
