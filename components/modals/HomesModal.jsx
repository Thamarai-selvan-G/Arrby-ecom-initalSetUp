"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { allHomepages } from "@/data/menu";
import { usePathname } from "next/navigation";
export default function HomesModal() {
  const pathname = usePathname();
  return (
    <div className="modal fade modalDemo" id="modalDemo">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="header">
            <h5 className="demo-title">Ultimate Nextjs Theme</h5>
            <span
              className="icon-close icon-close-popup"
              data-bs-dismiss="modal"
            />
          </div>
          <div className="mega-menu">
            <div className="row-demo">
              {allHomepages.map((item, index) => (
                <div key={index} className="demo-item">
                  <Link href={item.href}>
                    <div className="demo-image position-relative">
                      <Image
                        className="lazyload"
                        data-src={item.imgSrc}
                        alt={item.alt}
                        src={item.imgSrc}
                        width={300}
                        height={329}
                      />
                      {item.labels && (
                        <div className={`demo-label`}>
                          {item.labels.map((label, labelIndex) => (
                            <span
                              key={labelIndex}
                              className={`demo-${label.toLowerCase()}`}
                            >
                              {label}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <span
                      className={`demo-name  ${
                        pathname == item.href ? "activeMenu" : ""
                      }`}
                    >
                      {item.name}
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
