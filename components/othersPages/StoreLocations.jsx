"use client";
import React, { useState } from "react";

export default function StoreLocations() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <section className="flat-spacing-16">
      <div className="container">
        <div className="row widget-tabs">
          <div className="col-xl-4 col-md-5 col-12">
            <div className="tf-store-list d-flex gap-10 flex-column widget-menu-tab">
              <div
                className={`tf-store-item item-title ${
                  activeTab == 1 ? "active" : ""
                }  default`}
                onClick={() => setActiveTab(1)}
              >
                <h6 className="tf-store-title">
                  <div className="icon">
                    <i className="icon-place" />
                  </div>
                  Ecomus Paris
                </h6>
                <div className="tf-store-info">
                  <span>Address</span>
                  <p>93 Rue du Chevalier de la Barre, 961821 Paris, France</p>
                </div>
                <div className="tf-store-info">
                  <span>Phone</span>
                  <p>(+33) 936 -1234</p>
                </div>
                <div className="tf-store-info">
                  <span>Email</span>
                  <p>Ecomus.paris@example.com</p>
                </div>
              </div>
              <div
                className={`tf-store-item item-title ${
                  activeTab == 2 ? "active" : ""
                }  default`}
                onClick={() => setActiveTab(2)}
              >
                <h6 className="tf-store-title">
                  <div className="icon">
                    <i className="icon-place" />
                  </div>
                  Ecomus London
                </h6>
                <div className="tf-store-info">
                  <span>Address</span>
                  <p>Cromwell Rd, South Kensington, London SW1 6BD, UK</p>
                </div>
                <div className="tf-store-info">
                  <span>Phone</span>
                  <p>(+44) 20 4942 6789</p>
                </div>
                <div className="tf-store-info">
                  <span>Email</span>
                  <p>Ecomus.london@example.com</p>
                </div>
              </div>
              <div
                className={`tf-store-item item-title ${
                  activeTab == 3 ? "active" : ""
                }  default`}
                onClick={() => setActiveTab(3)}
              >
                <h6 className="tf-store-title">
                  <div className="icon">
                    <i className="icon-place" />
                  </div>
                  Ecomus Marid
                </h6>
                <div className="tf-store-info">
                  <span>Address</span>
                  <p>C. de Ferraz, 1, 150596 Madrid, Spain</p>
                </div>
                <div className="tf-store-info">
                  <span>Phone</span>
                  <p>(+48) 321-2468</p>
                </div>
                <div className="tf-store-info">
                  <span>Email</span>
                  <p>Ecomus.marid@example.com</p>
                </div>
              </div>
              <div
                className={`tf-store-item item-title ${
                  activeTab == 4 ? "active" : ""
                }  default`}
                onClick={() => setActiveTab(4)}
              >
                <h6 className="tf-store-title">
                  <div className="icon">
                    <i className="icon-place" />
                  </div>
                  Ecomus Tokyo
                </h6>
                <div className="tf-store-info">
                  <span>Address</span>
                  <p>152-0035 Tokyo, Meguro City, Jiyugaoka, Japan</p>
                </div>
                <div className="tf-store-info">
                  <span>Phone</span>
                  <p>(623) 934-2400</p>
                </div>
                <div className="tf-store-info">
                  <span>Email</span>
                  <p>Ecomus.tokyo@example.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-md-7 col-12">
            <div className="widget-content-tab">
              <div
                className={`widget-content-inner ${
                  activeTab == 1 ? "active" : ""
                }  p-0`}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d158969.55657176184!2d-0.176367!3d51.496715!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760542e6182f3f%3A0x7bb7e385c39764c4!2zQuG6o28gdMOgbmcgTOG7i2NoIHPhu60gVOG7sSBuaGnDqm4gTHXDom4gxJDDtG4!5e0!3m2!1svi!2sus!4v1719308620173!5m2!1svi!2sus"
                  width="100%"
                  height={978}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div
                className={`widget-content-inner ${
                  activeTab == 2 ? "active" : ""
                }  p-0`}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d158969.55657176184!2d-0.176367!3d51.496715!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760542e6182f3f%3A0x7bb7e385c39764c4!2zQuG6o28gdMOgbmcgTOG7i2NoIHPhu60gVOG7sSBuaGnDqm4gTHXDom4gxJDDtG4!5e0!3m2!1svi!2sus!4v1719308885091!5m2!1svi!2sus"
                  width="100%"
                  height={978}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div
                className={`widget-content-inner ${
                  activeTab == 3 ? "active" : ""
                }  p-0`}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d194388.1638384037!2d-3.717769!3d40.424022!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42286e8bea1259%3A0x1d6ad9c64a7706ab!2sTemple%20of%20Debod!5e0!3m2!1svi!2sus!4v1719308938883!5m2!1svi!2sus"
                  width="100%"
                  height={978}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div
                className={`widget-content-inner ${
                  activeTab == 4 ? "active" : ""
                }  p-0`}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d51856.75050320975!2d139.768121!3d35.675847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2zVMO0a3nDtCwgTmjhuq10IELhuqNu!5e0!3m2!1svi!2sus!4v1719308962873!5m2!1svi!2sus"
                  width="100%"
                  height={978}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
