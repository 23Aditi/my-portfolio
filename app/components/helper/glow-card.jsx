"use client";

import { useEffect } from "react";

const GlowCard = ({ children, identifier }) => {
  useEffect(() => {
    // Only run in the browser
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const CONTAINER = document.querySelector(`.glow-container-${identifier}`);
    const CARDS = document.querySelectorAll(`.glow-card-${identifier}`);

    if (!CONTAINER || CARDS.length === 0) return;

    const CONFIG = {
      proximity: 40,
      spread: 80,
      blur: 12,
      gap: 32,
      vertical: false,
      opacity: 0,
    };

    const UPDATE = (event) => {
      for (const CARD of CARDS) {
        const CARD_BOUNDS = CARD.getBoundingClientRect();

        const withinX =
          event?.x > CARD_BOUNDS.left - CONFIG.proximity &&
          event?.x < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity;
        const withinY =
          event?.y > CARD_BOUNDS.top - CONFIG.proximity &&
          event?.y < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity;

        CARD.style.setProperty("--active", withinX && withinY ? 1 : CONFIG.opacity);

        const CARD_CENTER = [
          CARD_BOUNDS.left + CARD_BOUNDS.width / 2,
          CARD_BOUNDS.top + CARD_BOUNDS.height / 2,
        ];

        let ANGLE =
          (Math.atan2(event?.y - CARD_CENTER[1], event?.x - CARD_CENTER[0]) * 180) /
          Math.PI;
        if (ANGLE < 0) ANGLE += 360;

        CARD.style.setProperty("--start", ANGLE + 90);
      }
    };

    const RESTYLE = () => {
      CONTAINER.style.setProperty("--gap", CONFIG.gap);
      CONTAINER.style.setProperty("--blur", CONFIG.blur);
      CONTAINER.style.setProperty("--spread", CONFIG.spread);
      CONTAINER.style.setProperty("--direction", CONFIG.vertical ? "column" : "row");
    };

    RESTYLE();

    // Add pointermove listener
    document.body.addEventListener("pointermove", UPDATE);

    // Run once initially
    UPDATE({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

    // Cleanup
    return () => document.body.removeEventListener("pointermove", UPDATE);
  }, [identifier]);

  return (
    <div className={`glow-container-${identifier} glow-container`}>
      <article
        className={`glow-card glow-card-${identifier} h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full`}
      >
        <div className="glows"></div>
        {children}
      </article>
    </div>
  );
};

export default GlowCard;
