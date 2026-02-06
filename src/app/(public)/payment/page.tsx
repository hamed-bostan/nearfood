import successfulPaymentImage from "@/assets/images/icons/successful-payment.png";
import unsuccessfulPaymentImage from "@/assets/images/icons/unsuccessful-payment.png";
import { verifyPaymentUseCase } from "@/domain/use-cases/payment/verifyPayment.usecase";
import PaymentMessage from "@/presentation/features/paymentGateway/PaymentMessage";

type PaymentPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function PaymentPage({ searchParams }: PaymentPageProps) {
  const resolvedSearchParams = await searchParams;
  const trackId = resolvedSearchParams.trackId as string | undefined;

  if (!trackId) {
    return <p>Invalid payment session</p>;
  }

  const status = await verifyPaymentUseCase(trackId);

  return (
    <>
      {status.success ? (
        <PaymentMessage
          image={successfulPaymentImage}
          mainText="پرداخت شما با موفقیت انجام شد!"
          secondaryText={`کد رهگیری سفارش شما: ${status.refNumber}`}
          secondButtonText="پیگیری سفارش"
          mainTextColor="text-primary-500"
          secondaryTextColor="text-primary-500"
        />
      ) : (
        <PaymentMessage
          image={unsuccessfulPaymentImage}
          mainText="پرداخت شما ناموفق بود!"
          secondaryText={`کد رهگیری تراکنش شما: ${trackId}`}
          secondButtonText="پرداخت مجدد"
          mainTextColor="text-error-500"
          secondaryTextColor="text-gray-800"
        />
      )}
    </>
  );
}
