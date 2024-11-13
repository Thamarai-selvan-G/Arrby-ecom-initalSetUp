"use client";

import { useEffect, useState } from "react";
import Countdown from "react-countdown";
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition

const renderer2 = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div aria-hidden="true" className="countdown__timer">
        <span className="countdown__item">
          <span className="countdown__value countdown__value--0 js-countdown__value--0">
            {days}
          </span>
          <span className="countdown__label">Days</span>
        </span>
        <span className="countdown__item">
          <span className="countdown__value countdown__value--1 js-countdown__value--1">
            {hours}
          </span>
          <span className="countdown__label">Hours</span>
        </span>
        <span className="countdown__item">
          <span className="countdown__value countdown__value--2 js-countdown__value--2">
            {minutes}
          </span>
          <span className="countdown__label">Mins</span>
        </span>
        <span className="countdown__item">
          <span className="countdown__value countdown__value--3 js-countdown__value--3">
            {seconds}
          </span>
          <span className="countdown__label">Secs</span>
        </span>
      </div>
    );
  }
};
export default function CountdownComponent({
  fullLabel = false,
  labels,
  targetDate = '2025-6-07',
}) {
  const [showCountdown, setShowCountdown] = useState(false);
  useEffect(() => {
    setShowCountdown(true);
  }, []);

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div aria-hidden="true" className="countdown__timer">
          <span className="countdown__item">
            <span className="countdown__value countdown__value--0 js-countdown__value--0">
              {days}{" "}
            </span>
            <span className="countdown__label">
              {labels?.split(",")[0] || "d :"}
            </span>
          </span>
          <span className="countdown__item">
            <span className="countdown__value countdown__value--1 js-countdown__value--1">
              {hours}{" "}
            </span>
            <span className="countdown__label">
              {labels?.split(",")[1] || "h :"}
            </span>
          </span>
          <span className="countdown__item">
            <span className="countdown__value countdown__value--2 js-countdown__value--2">
              {minutes}{" "}
            </span>
            <span className="countdown__label">
              {labels?.split(",")[2] || "m :"}
            </span>
          </span>
          <span className="countdown__item">
            <span className="countdown__value countdown__value--3 js-countdown__value--3">
              {seconds}{" "}
            </span>
            <span className="countdown__label">
              {labels?.split(",")[3] || "s"}
            </span>
          </span>
        </div>
      );
    }
  };

  return (
    <>
      {showCountdown && (
        <Countdown
          date={
            new Date(
              targetDate
                ? targetDate
                : new Date().setDate(
                    new Date().getDate() + Math.floor(Math.random() * 100)
                  )
            )
          }
          renderer={fullLabel ? renderer2 : renderer}
        />
      )}
    </>
  );
}
