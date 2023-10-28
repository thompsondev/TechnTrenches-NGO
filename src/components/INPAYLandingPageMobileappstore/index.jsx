import React from "react";

import { Img } from "components";

const INPAYLandingPageMobileappstore = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[9px] items-center justify-between w-[94%] md:w-full">
          <Img
            className="h-[30px]"
            src="images/img_googleplaylogo.svg"
            alt="googleplaylogo"
          />
          <div className="flex flex-col gap-[5px] items-start justify-start">
            <Img className="h-[7px]" src="images/img_search.svg" alt="search" />
            <Img
              className="h-5"
              src="images/img_googleplay.svg"
              alt="googleplay"
            />
          </div>
        </div>
      </div>
    </>
  );
};

INPAYLandingPageMobileappstore.defaultProps = {};

export default INPAYLandingPageMobileappstore;
