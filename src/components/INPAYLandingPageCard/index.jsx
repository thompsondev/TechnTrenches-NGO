import React from "react";

import { Img, Text } from "components";

const INPAYLandingPageCard = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[200px] relative rounded-[20px] w-full">
          <Img
            className="h-[200px] m-auto object-cover rounded-[20px] w-full"
            src="images/img_noise.png"
            alt="noise"
          />
          <div className="absolute md:h-[193px] h-[200px] inset-[0] justify-center m-auto pb-[7px] pl-[7px] rounded-[20px] w-full">
            <div className="absolute md:h-[155px] h-[184px] right-[0] top-[0] w-[93%]">
              <div className="absolute bottom-[0] md:h-[155px] h-[164px] left-[0] w-[93%]">
                <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-row items-center justify-between w-[294px]">
                      <Img
                        className="h-10"
                        src="images/img_layerx00201.svg"
                        alt="layerx00201"
                      />
                      <Text
                        className="text-center text-gray-100_a5 text-sm tracking-[0.14px] w-auto"
                        size="txtNeueHaasDisplayRoman14"
                      >
                        {props?.status}
                      </Text>
                    </div>
                    <Text
                      className="mt-[25px] text-base text-center text-gray-100_a5"
                      size="txtNeueHaasDisplayRoman16"
                    >
                      {props?.price}
                    </Text>
                    <Text
                      className="ml-2.5 md:ml-[0] mt-2.5 text-base text-center text-gray-100_a5"
                      size="txtNeueHaasDisplayRoman16"
                    >
                      {props?.language}
                    </Text>
                    <div className="flex flex-row gap-[7px] items-start justify-start mt-6 w-auto">
                      <Text
                        className="text-center text-gray-100_7a text-xs tracking-[0.12px] w-auto"
                        size="txtNeueHaasDisplayRoman12"
                      >
                        {props?.expdatelabel}
                      </Text>
                      <Text
                        className="text-center text-gray-100_7a text-xs tracking-[0.12px] w-auto"
                        size="txtNeueHaasDisplayRoman12"
                      >
                        {props?.expdate}
                      </Text>
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute bottom-[0] h-[46px] right-[0]"
                  src="images/img_logo.svg"
                  alt="logo"
                />
              </div>
              <Img
                className="absolute h-[150px] right-[0] top-[0]"
                src="images/img_vector459.svg"
                alt="vector459"
              />
            </div>
            <Img
              className="absolute h-[143px] right-[0] top-[0]"
              src="images/img_vector460.svg"
              alt="vector460"
            />
            <Img
              className="absolute h-[193px] inset-y-[0] my-auto right-[0]"
              src="images/img_vector461.svg"
              alt="vector461"
            />
          </div>
        </div>
      </div>
    </>
  );
};

INPAYLandingPageCard.defaultProps = {
  status: "Inactive",
  price: "XXXXXXXXX",
  language: "****  xxxx",
  expdatelabel: "Exp date",
  expdate: "xx/xx",
};

export default INPAYLandingPageCard;
