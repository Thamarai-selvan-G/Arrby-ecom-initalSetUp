import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import FragranceList from "@/components/shop/FragranceProductList";
import React from "react";

const FragrancePage = () => {
  return (
    <>
      <Header2 />
      <div className="tf-page-title">
        <div className="container-full">
          <div className="heading text-center">Fragrance</div>
          <p className="text-center text-2 text_black-2 mt_5">
            Shop through our latest selection of Fashion
          </p>
        </div>
      </div>
      <FragranceList />
      <Footer1 />
    </>
  );
};

export default FragrancePage;
