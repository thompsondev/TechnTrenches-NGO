import React from "react";

import { Img } from "components";

const INPAYLandingPageMobileappstore1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-2 items-start justify-between mt-0.5 w-[92%] md:w-full">
          <Img className="h-[26px]" src="images/img_volume.svg" alt="volume" />
          <div className="flex flex-col items-start justify-start">
            <Img
              className="h-[7px]"
              src="images/img_downloadonthe.svg"
              alt="downloadonthe"
            />
            <Img
              className="h-[19px] mt-[3px]"
              src="images/img_signal.svg"
              alt="signal"
            />
          </div>
        </div>
      </div>
    </>
  );
};

INPAYLandingPageMobileappstore1.defaultProps = {};

export default INPAYLandingPageMobileappstore1;
