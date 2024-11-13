"use client";
import { faqs1 } from "@/data/faqs";
import React, { useEffect, useRef, useState } from "react";

export default function Accordion({ faqs = faqs1 }) {
  const parentRefs = useRef([]);
  const questionRefs = useRef([]);
  const answerRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    questionRefs.current.forEach((el) => {
      el.classList.remove("active");
    });
    parentRefs.current.forEach((el) => {
      el.classList.remove("active");
    });
    answerRefs.current.forEach((el) => {
      el.style.height = "0px";
      el.style.overflow = "hidden";
      el.style.transition = "all 0.4s ease-in-out";
      el.style.paddingTop = "0px";
      el.style.paddingBottom = "0px";
    });
    if (currentIndex !== -1) {
      questionRefs.current[currentIndex].classList.add("active");
      parentRefs.current[currentIndex].classList.add("active");
      const element = answerRefs.current[currentIndex];
      element.style.height = element.scrollHeight + "px";
      element.style.overflow = "hidden";
      element.style.transition = "all 0.4s ease-in-out";
      element.style.paddingTop = "22px";
      element.style.paddingBottom = "22px";
    }
  }, [currentIndex]);
  return (
    <>
      {faqs.map((toggle, index) => (
        <div
          key={index}
          ref={(el) => (parentRefs.current[index] = el)}
          className={`flat-toggle ${currentIndex == index ? "active" : ""}`}
        >
          <div
            className={`toggle-title ${currentIndex == index ? "active" : ""}`}
            ref={(el) => (questionRefs.current[index] = el)}
            onClick={() => {
              setCurrentIndex((pre) => (pre == index ? -1 : index));
            }}
          >
            {toggle.title}
          </div>
          <div
            className="toggle-content"
            style={{ display: "block" }}
            ref={(el) => (answerRefs.current[index] = el)}
          >
            <p>{toggle.content}</p>
          </div>
        </div>
      ))}
    </>
  );
}
