"use client";
import { BackgroundGradient } from "./background-gradient";

export function BackgroundGradientDemo({ img }) {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] bg-transparent flex justify-center ">
        <img
          src={img}
          alt="jordans"
          className="rounded-[22px] h-full w-full "
        />
      </BackgroundGradient>
    </div>
  );
}
