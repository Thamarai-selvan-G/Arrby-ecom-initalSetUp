import Footer1 from '@/components/footers/Footer1'
import Header2 from '@/components/headers/Header2'
import FashionList from '@/components/shop/FashionProductsList'
import React from 'react'

const FashionPage = () => {
  return (
  <>
    <Header2/>
    <div className="tf-page-title">
        <div className="container-full">
          <div className="heading text-center">Fashion</div>
          <p className="text-center text-2 text_black-2 mt_5">
            Shop through our latest selection of Fashion
          </p>
        </div>
      </div>
      <FashionList/>
      <Footer1 />
  </>
  )
}

export default FashionPage
