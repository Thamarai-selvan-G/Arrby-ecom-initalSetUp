import Accordion from "@/components/common/Accordion";
import React from "react";

export default function Faqs() {
  return (
    <section className="flat-spacing-5 pt_0">
      <div className="container">
        <div className="row">
          <div className="col-xl-4">
            <h4>Frequently asked questions</h4>
          </div>
          <div className="col-xl-8">
            <div className="flat-accordion style-default has-btns-arrow">
              <Accordion />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
