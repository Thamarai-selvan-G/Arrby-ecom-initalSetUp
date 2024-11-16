import Footer1 from '@/components/footers/Footer1'
import Header2 from '@/components/headers/Header2'
import CosmeticsList from '@/components/shop/CosmeticsProductList'
import React from 'react'

const CosmeticsPage = () => {
  return (
    <>
    <Header2 />
    <div className="tf-page-title">
      <div className="container-full">
        <div className="heading text-center">Cosmetics</div>
        <p className="text-center text-2 text_black-2 mt_5">
          Shop through our latest selection of Fashion
        </p>
      </div>
    </div>
    <CosmeticsList />
    <Footer1/>
  </>
  )
}

export default CosmeticsPage
