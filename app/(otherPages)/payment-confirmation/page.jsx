import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import PaymentConfirmation from "@/components/othersPages/PaymentConfirmation";
import React from "react";

export const metadata = {
  title: "Payment Confirmation || Ecomus - Ultimate Nextjs Ecommerce Template",
  description: "Ecomus - Ultimate Nextjs Ecommerce Template",
};
export default function page() {
  return (
    <>
      <Header2 />
      <div className="tf-page-title">
        <div className="container-full">
          <div className="heading text-center">Payment confirmation</div>
        </div>
      </div>

      <PaymentConfirmation />
      <Footer1 />
    </>
  );
}
