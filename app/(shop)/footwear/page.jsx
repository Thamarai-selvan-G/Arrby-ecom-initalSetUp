import Footer1 from '@/components/footers/Footer1'
import Header2 from '@/components/headers/Header2'
import FootwearList from '@/components/shop/FootwearProductList'
import React from 'react'

const FootwearPage = () => {
  return (
    <>
      <Header2 />
      <div className="tf-page-title">
        <div className="container-full">
          <div className="heading text-center">Foot Wears</div>
          <p className="text-center text-2 text_black-2 mt_5">
            Shop through our latest selection of Fashion
          </p>
        </div>
      </div>
      <FootwearList />
      <Footer1 />
    </>
  )
}

export default FootwearPage
