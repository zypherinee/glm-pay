import React from "react";
import { Img } from "./..";

export default function HomeAppbadges({ ...props }) {
  return (
    <div {...props} className={`${props.className} flex items-center w-[49%] md:w-full gap-3 py-[23px] sm:py-5`}>
      <div className="flex h-[40px] w-[38%] items-center justify-evenly gap-2 rounded-[5px] bg-black-900 bg-[url(/public/images/img_bg.svg)] bg-cover bg-no-repeat pb-[5px] pt-1.5 md:h-auto">
        <Img src="images/img_google_play_logo.png" alt="google play" className="h-[25px] self-start object-cover" />
        <Img src="images/img_settings.svg" alt="settings icon" className="h-[27px] w-[63%]" />
      </div>
      <Img src="images/img_store_badge.svg" alt="store badge" className="h-[40px] w-[38%]" />
    </div>
  );
}
