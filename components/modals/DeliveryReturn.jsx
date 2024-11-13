import React from "react";

export default function DeliveryReturn() {
  return (
    <div
      className="modal modalCentered fade modalDemo tf-product-modal modal-part-content"
      id="delivery_return"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="header">
            <div className="demo-title">Shipping &amp; Delivery</div>
            <span
              className="icon-close icon-close-popup"
              data-bs-dismiss="modal"
            />
          </div>
          <div className="overflow-y-auto">
            <div className="tf-product-popup-delivery">
              <div className="title">Delivery</div>
              <p className="text-paragraph">
                All orders shipped with UPS Express.
              </p>
              <p className="text-paragraph">
                Always free shipping for orders over US $250.
              </p>
              <p className="text-paragraph">
                All orders are shipped with a UPS tracking number.
              </p>
            </div>
            <div className="tf-product-popup-delivery">
              <div className="title">Returns</div>
              <p className="text-paragraph">
                Items returned within 14 days of their original shipment date in
                same as new condition will be eligible for a full refund or
                store credit.
              </p>
              <p className="text-paragraph">
                Refunds will be charged back to the original form of payment
                used for purchase.
              </p>
              <p className="text-paragraph">
                Customer is responsible for shipping charges when making returns
                and shipping/handling fees of original purchase is
                non-refundable.
              </p>
              <p className="text-paragraph">
                All sale items are final purchases.
              </p>
            </div>
            <div className="tf-product-popup-delivery">
              <div className="title">Help</div>
              <p className="text-paragraph">
                Give us a shout if you have any other questions and/or concerns.
              </p>
              <p className="text-paragraph">
                Email:{" "}
                <a
                  href="mailto:contact@domain.com"
                  aria-describedby="a11y-external-message"
                >
                  <span className="__cf_email__">contact@domain.com</span>
                </a>
              </p>
              <p className="text-paragraph mb-0">Phone: +1 (23) 456 789</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
