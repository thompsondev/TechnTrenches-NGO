import React from "react";

import { Button, Img, Line, List, Text } from "components";
import INPAYLandingPageCard from "components/INPAYLandingPageCard";
import INPAYLandingPageMobileappstore from "components/INPAYLandingPageMobileappstore";
import INPAYLandingPageMobileappstore1 from "components/INPAYLandingPageMobileappstore1";

const INPAYLandingPagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex font-clashdisplay h-[5887px] justify-end mx-auto relative w-full">
        <div className="h-[8220px] mt-auto mx-auto md:px-5 w-full">
          <div className="h-[8220px] m-auto w-full">
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[2%] w-[98%]">
              <div className="flex flex-col justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-10 gap-[205px] items-start justify-end md:ml-[0] ml-[163px] w-[84%] md:w-full">
                  <div className="flex flex-col items-center justify-start md:mt-0 mt-[392px] w-[44%] md:w-full">
                    <div className="md:h-[311px] h-[313px] sm:h-[532px] relative w-full">
                      <div className="md:h-[311px] h-[313px] sm:h-[532px] m-auto w-full">
                        <div className="absolute md:h-[301px] h-[302px] inset-y-[0] my-auto right-[0] w-3/5">
                          <div className="absolute bg-blue-A200 bottom-[1%] flex flex-row gap-1.5 items-center justify-center right-[0] rounded-lg w-[85%]">
                            <Img
                              className="h-[57px] mb-[11px] ml-3.5 w-14"
                              src="images/img_rectangle5.svg"
                              alt="rectangleFive"
                            />
                            <Img
                              className="h-[41px] mr-[134px] my-[13px] w-[41px]"
                              src="images/img_star7.svg"
                              alt="starSeven"
                            />
                          </div>
                          <div className="absolute bottom-[1%] flex flex-row gap-[73px] inset-x-[0] items-center justify-center mx-auto w-1/4">
                            <Line className="bg-black-900 h-[71px] w-px" />
                            <Line className="bg-black-900 h-[71px] w-px" />
                          </div>
                          <div
                            className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto p-[74px] md:px-10 sm:px-5 rounded-lg"
                            style={{
                              backgroundImage: "url('images/img_group4.svg')",
                            }}
                          >
                            <Text
                              className="capitalize mt-0.5 rotate-[46deg] text-[11.76px] text-black-900"
                              size="txtClashDisplaySemibold1176"
                            >
                              make the best financial decisions
                            </Text>
                          </div>
                        </div>
                        <div
                          className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto p-[26px] sm:px-5 rounded-br-lg rounded-tr-lg w-[99%]"
                          style={{
                            backgroundImage: "url('images/img_group35921.svg')",
                          }}
                        >
                          <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mb-0.5 mt-[15px] rotate-[28deg] w-[99%] md:w-full">
                            <div className="h-[113px] md:h-[222px] sm:h-[94px] sm:mt-0 mt-32 relative w-[46%] sm:w-full">
                              <Button
                                className="absolute bottom-[0] flex h-[42px] items-center justify-center left-[0] w-[42px]"
                                shape="circle"
                                color="blue_A200"
                                variant="outline"
                              >
                                <Img
                                  className="h-[21px]"
                                  src="images/img_trophy01.svg"
                                  alt="trophyOne"
                                />
                              </Button>
                              <div className="absolute flex flex-col justify-end pt-6 right-[0] top-[0]">
                                <Text
                                  className="capitalize mr-[86px] text-[11.76px] text-white-A700"
                                  size="txtClashDisplaySemibold1176WhiteA700"
                                >
                                  achievements
                                </Text>
                                <Text
                                  className="capitalize md:ml-[0] ml-[9px] text-[11.76px] text-white-A700"
                                  size="txtClashDisplayMedium1176"
                                >
                                  best finance app on playstore
                                </Text>
                              </div>
                            </div>
                            <Line className="bg-white-A700 h-10 sm:h-px mb-[106px] ml-3.5 sm:ml-[0] sm:mt-0 mt-[94px] rotate-[-120deg] sm:w-full w-px" />
                            <div className="h-[116px] md:h-[183px] mb-[125px] ml-3.5 sm:ml-[0] relative w-[48%] sm:w-full">
                              <Button
                                className="absolute bottom-[0] flex h-[42px] items-center justify-center left-[0] w-[42px]"
                                shape="circle"
                                color="blue_A200"
                                variant="outline"
                              >
                                <Img
                                  className="h-[21px]"
                                  src="images/img_banknote03.svg"
                                  alt="banknoteThree"
                                />
                              </Button>
                              <div className="absolute md:h-[58px] h-[99px] pt-10 right-[0] top-[0] w-[82%]">
                                <Text
                                  className="absolute bottom-[17%] capitalize left-[0] text-[11.76px] text-white-A700"
                                  size="txtClashDisplaySemibold1176WhiteA700"
                                >
                                  finance
                                </Text>
                                <Text
                                  className="absolute bottom-[0] capitalize right-[0] text-[11.76px] text-white-A700"
                                  size="txtClashDisplayMedium1176"
                                >
                                  most popular Mobile Money app
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-[8%] flex flex-col justify-start right-[0]">
                        <Text
                          className="capitalize text-[11.76px] text-black-900"
                          size="txtClashDisplaySemibold1176"
                        >
                          INTECH PAYMENTS
                        </Text>
                        <Text
                          className="capitalize ml-3.5 md:ml-[0] mt-1 text-[10.46px] text-black-900"
                          size="txtClashDisplayMedium1046"
                        >
                          Get Started
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="h-[717px]"
                    src="images/img_group35899.svg"
                    alt="group35899"
                  />
                </div>
                <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[111px] mt-[211px] w-[93%] md:w-full">
                  <Img
                    className="h-[285px] mb-4"
                    src="images/img_group35930.svg"
                    alt="group35930"
                  />
                  <Img
                    className="h-[237px] md:h-auto sm:mt-0 mt-16 object-cover"
                    src="images/img_group35897.png"
                    alt="group35897"
                  />
                </div>
                <Img
                  className="h-[237px] md:ml-[0] ml-[782px] mt-[545px]"
                  src="images/img_group35930.svg"
                  alt="group35931"
                />
                <div className="flex flex-col md:gap-10 gap-[478px] items-start justify-start ml-40 md:ml-[0] mt-[246px] w-[35%] md:w-full">
                  <Img
                    className="h-[470px]"
                    src="images/img_group35932.svg"
                    alt="group35932"
                  />
                  <Img
                    className="h-[237px] md:ml-[0] ml-[3px]"
                    src="images/img_group35930.svg"
                    alt="group1000002356"
                  />
                </div>
                <Img
                  className="h-[237px] mt-[1113px]"
                  src="images/img_group35930.svg"
                  alt="group1000002356_One"
                />
              </div>
            </div>
            <Img
              className="absolute h-[230px] left-[24%] top-[2%]"
              src="images/img_group35930.svg"
              alt="group35896"
            />
            <div className="absolute font-grifter h-[8220px] inset-[0] justify-center m-auto w-full">
              <div className="absolute h-[8220px] inset-[0] justify-center m-auto w-full">
                <Img
                  className="h-[8220px] m-auto object-cover w-full"
                  src="images/img_rectangle.png"
                  alt="rectangle"
                />
                <div className="absolute bg-blue-900 bottom-[36%] flex inset-x-[0] mx-auto md:pr-10 sm:pr-5 pr-[54px] rounded-[24px] w-[88%] md:w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[406px] items-start justify-end my-auto p-[54px] md:px-10 sm:px-5 w-[81%]"
                    style={{ backgroundImage: "url('images/img_group5.png')" }}
                  >
                    <div className="flex md:flex-col flex-row gap-[49px] items-start justify-start mt-[67px] w-[88%] md:w-full">
                      <div className="flex flex-col gap-6 items-start justify-start w-[566px] sm:w-full">
                        <Text
                          className="leading-[46.00px] max-w-[566px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                          size="txtGRIFTERBold40"
                        >
                          One Solution for All Your Cross-Border Payments
                        </Text>
                        <div className="flex flex-row gap-4 items-start justify-start w-auto">
                          <INPAYLandingPageMobileappstore className="bg-black-900 border border-gray-500 border-solid flex flex-col items-center justify-end p-[7px] rounded-[5px] w-1/2" />
                          <INPAYLandingPageMobileappstore1 className="bg-black-900_01 border border-gray-500 border-solid flex flex-col items-center justify-end p-[7px] rounded-[7px] w-[46%]" />
                        </div>
                      </div>
                      <Img
                        className="h-44 md:mt-0 mt-[54px]"
                        src="images/img_6.svg"
                        alt="Six"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-end ml-[-162px] mt-auto w-[29%] z-[1]">
                    <div className="h-[716px] relative w-full">
                      <Img
                        className="h-[716px] m-auto object-cover w-full"
                        src="images/img_blue.png"
                        alt="blue"
                      />
                      <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[89%]">
                        <Img
                          className="h-[683px] md:h-auto object-cover w-full"
                          src="images/img_maskgroup.png"
                          alt="maskgroup"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col font-clashdisplay md:gap-10 gap-[62px] justify-start left-[12%] top-[5%] w-[26%]">
                <div className="flex flex-row items-center justify-between w-full">
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[180px]"
                    rightIcon={
                      <div className="mt-[11px] mb-2.5 ml-[5px] bg-white-A700">
                        <Img src="images/img_vector_1.svg" alt="Vector 1" />
                      </div>
                    }
                    shape="round"
                    color="black_900"
                    size="md"
                  >
                    <div className="capitalize font-medium text-left text-lg">
                      Join Waitlist
                    </div>
                  </Button>
                  <div className="flex flex-row gap-3.5 items-center justify-start">
                    <Button
                      className="flex h-[29px] items-center justify-center rounded-[14px] w-[29px]"
                      color="black_900"
                      variant="outline"
                    >
                      <Img src="images/img_vector2.svg" alt="vectorTwo" />
                    </Button>
                    <Text
                      className="capitalize text-black-900 text-lg"
                      size="txtClashDisplayMedium18"
                    >
                      watch video
                    </Text>
                  </div>
                </div>
                <Img
                  className="h-[67px] md:ml-[0] ml-[106px] mr-[200px] rotate-[-45deg] w-[67px]"
                  src="images/img_star8.svg"
                  alt="starEight"
                />
              </div>
              <Img
                className="absolute h-[67px] left-[3%] rotate-[-45deg] top-[1%] w-[67px]"
                src="images/img_star3.svg"
                alt="starThree"
              />
              <div className="absolute font-clashdisplay md:h-[1132px] sm:h-[713px] h-[818px] left-[6%] top-[36%] w-[83%] md:w-full">
                <div className="absolute flex flex-col gap-1.5 items-center justify-start right-[27%] top-[0]">
                  <Text
                    className="text-black-900 text-center text-lg tracking-[2.88px] uppercase"
                    size="txtClashDisplayMedium18"
                  >
                    testimonial
                  </Text>
                  <Text
                    className="capitalize leading-[48.00px] text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center w-full"
                    size="txtClashDisplayBold48"
                  >
                    what our users say about us?
                  </Text>
                </div>
                <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[30px] inset-x-[0] items-start justify-between mx-auto w-full">
                  <Img
                    className="md:flex-1 h-[713px] sm:h-auto object-cover w-[713px] md:w-full"
                    src="images/img_group1000002332.png"
                    alt="group1000002332"
                  />
                  <div className="flex flex-col items-start justify-start md:mt-0 mt-[145px]">
                    <Text
                      className="capitalize leading-[28.00px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 w-full"
                      size="txtClashDisplaySemibold28"
                    >
                      the best financial accounting app ever!
                    </Text>
                    <Text
                      className="capitalize leading-[28.00px] mt-6 text-black-900_87 text-lg w-full"
                      size="txtClashDisplayMedium18Black90087"
                    >
                      “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                      ultricies. In ultrices malesuada elit mauris etiam odio.
                      Duis tristique lacus, et blandit viverra nisl velit. Sed
                      mattis rhoncus, diam suspendisse sit nunc, gravida eu.
                      Lectus eget eget ac dolor neque lorem sapien, suspendisse
                      aliquam.”
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-start mt-6 w-[44%] md:w-full">
                      <div className="h-10 relative w-10">
                        <Img
                          className="absolute h-10 inset-[0] justify-center m-auto rounded-[50%] w-10"
                          src="images/img_ellipse15.png"
                          alt="ellipseFifteen"
                        />
                        <Img
                          className="absolute h-[38px] inset-y-[0] left-[5%] my-auto object-cover w-4/5"
                          src="images/img_intersect.png"
                          alt="intersect"
                        />
                      </div>
                      <Img
                        className="h-[30px]"
                        src="images/img_group35916.svg"
                        alt="group35916"
                      />
                    </div>
                    <Text
                      className="capitalize mt-[26px] text-black-900 text-lg"
                      size="txtClashDisplaySemibold18"
                    >
                      nick jonas
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col font-clashdisplay inset-x-[0] items-start justify-start mx-auto top-[11%] w-[97%]">
                <div className="h-[1998px] md:h-[718px] relative w-full">
                  <div className="absolute h-[1982px] md:h-[718px] inset-[0] justify-center m-auto w-full">
                    <div className="h-[1982px] md:h-[718px] m-auto w-full">
                      <Img
                        className="absolute h-16 right-[0] top-[36%] w-16"
                        src="images/img_star5.svg"
                        alt="starFive"
                      />
                      <Img
                        className="absolute bottom-[0] h-16 right-[17%] w-16"
                        src="images/img_star7_64x64.svg"
                        alt="starSeven_One"
                      />
                      <div className="absolute md:h-[718px] h-[719px] left-[0] top-[0] w-[96%] md:w-full">
                        <Img
                          className="h-[67px] mt-[127px] rotate-[-45deg] w-[67px]"
                          src="images/img_star2.svg"
                          alt="starTwo"
                        />
                        <div className="absolute md:h-[718px] h-[719px] inset-[0] justify-center m-auto w-full">
                          <div className="absolute flex flex-col gap-[29px] h-max inset-y-[0] items-start justify-start my-auto right-[0] w-[49%]">
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="text-blue-A200 text-lg tracking-[2.88px] uppercase"
                                size="txtClashDisplayMedium18BlueA200"
                              >
                                features
                              </Text>
                              <Text
                                className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                                size="txtClashDisplayBold48"
                              >
                                iNPAY WALLET{" "}
                              </Text>
                            </div>
                            <List
                              className="flex flex-col gap-[34px] items-center w-full"
                              orientation="vertical"
                            >
                              <div className="flex flex-1 flex-col gap-[13px] items-start justify-start w-full">
                                <div className="flex flex-row gap-2 items-start justify-start w-[27%] md:w-full">
                                  <Img
                                    className="h-6 w-6"
                                    src="images/img_star.svg"
                                    alt="star"
                                  />
                                  <Text
                                    className="capitalize mt-0.5 text-black-900 text-lg"
                                    size="txtClashDisplaySemibold18"
                                  >
                                    Empowerment
                                  </Text>
                                </div>
                                <Text
                                  className="capitalize leading-[28.00px] text-black-900_87 text-lg w-full"
                                  size="txtClashDisplayMedium18Black90087"
                                >
                                  iNPAY puts you in charge, empowering you to
                                  shape your financial future.
                                </Text>
                              </div>
                              <div className="flex flex-1 flex-col gap-3.5 items-start justify-start w-full">
                                <div className="flex flex-row gap-2 items-center justify-start w-[16%] md:w-full">
                                  <Img
                                    className="h-6 w-6"
                                    src="images/img_bluetooth.svg"
                                    alt="bluetooth"
                                  />
                                  <Text
                                    className="capitalize text-black-900 text-lg"
                                    size="txtClashDisplaySemibold18"
                                  >
                                    Control
                                  </Text>
                                </div>
                                <Text
                                  className="capitalize leading-[28.00px] text-black-900_87 text-lg w-full"
                                  size="txtClashDisplayMedium18Black90087"
                                >
                                  iNPAY provides total control over your
                                  finances through easy-to-use In-Wallet
                                  Management tools, ensuring your money works
                                  for you.
                                </Text>
                              </div>
                              <div className="flex flex-1 flex-col gap-3.5 items-start justify-start w-full">
                                <div className="flex flex-row gap-2 items-center justify-start w-1/4 md:w-full">
                                  <Img
                                    className="h-6 w-6"
                                    src="images/img_volume_blue_a200.svg"
                                    alt="volume"
                                  />
                                  <Text
                                    className="capitalize text-black-900 text-lg"
                                    size="txtClashDisplaySemibold18"
                                  >
                                    Peace of Mind
                                  </Text>
                                </div>
                                <Text
                                  className="capitalize leading-[28.00px] text-black-900_87 text-lg w-full"
                                  size="txtClashDisplayMedium18Black90087"
                                >
                                  <>
                                    Enjoy peace of mind with iNPAY&#39;s
                                    intuitive In-Wallet Management, ensuring
                                    financial control and tranquility.
                                  </>
                                </Text>
                              </div>
                            </List>
                          </div>
                          <div
                            className="absolute bg-cover bg-no-repeat flex flex-col md:h-auto h-full inset-y-[0] items-center justify-end left-[0] my-auto p-[107px] md:px-10 sm:px-5 w-[719px]"
                            style={{
                              backgroundImage:
                                "url('images/img_group35933.svg')",
                            }}
                          >
                            <div className="h-[504px] relative shadow-bs w-1/2">
                              <Img
                                className="h-[504px] m-auto object-cover w-full"
                                src="images/img_silver.png"
                                alt="silver"
                              />
                              <Img
                                className="absolute h-[480px] inset-[0] justify-center m-auto object-cover w-[90%]"
                                src="images/img_mockup.png"
                                alt="mockup"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <Img
                        className="absolute bottom-[32%] h-[67px] left-[42%] rotate-[-45deg] w-[67px]"
                        src="images/img_star6.svg"
                        alt="starSix"
                      />
                    </div>
                    <div className="absolute md:h-[505px] h-[719px] inset-y-[0] my-auto right-[1%] w-[90%] md:w-full">
                      <div className="absolute flex flex-col gap-[23px] h-max inset-y-[0] items-start justify-start left-[0] my-auto w-[44%]">
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-blue-A200 text-lg tracking-[2.88px] uppercase"
                            size="txtClashDisplayMedium18BlueA200"
                          >
                            advatnages
                          </Text>
                          <Text
                            className="capitalize mt-[3px] text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                            size="txtClashDisplayBold48"
                          >
                            why choose iNPAY?
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[23px] items-start justify-start w-full">
                          <div className="flex flex-row gap-[15px] items-center justify-start w-[63%] md:w-full">
                            <Button
                              className="flex h-12 items-center justify-center rounded-[50%] w-12"
                              shape="circle"
                              color="blue_A200"
                            >
                              <Img
                                className="h-6"
                                src="images/img_bell02.svg"
                                alt="bellTwo"
                              />
                            </Button>
                            <Text
                              className="capitalize sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                              size="txtClashDisplaySemibold28"
                            >
                              clever notifications
                            </Text>
                          </div>
                          <Text
                            className="capitalize leading-[28.00px] text-black-900_87 text-lg"
                            size="txtClashDisplayMedium18Black90087"
                          >
                            <>
                              Empowerment: Take charge of your finances like
                              never before.
                              <br />
                              Simplicity: User-friendly tools for financial
                              success.
                              <br />
                              Control: Customize your financial strategy, your
                              way.
                              <br />
                              Peace of Mind: Say goodbye to financial worries.
                            </>
                          </Text>
                        </div>
                      </div>
                      <div
                        className="absolute bg-cover bg-no-repeat md:h-[505px] h-[719px] inset-y-[0] my-auto p-[107px] md:px-10 sm:px-5 right-[0] w-[719px] md:w-full"
                        style={{
                          backgroundImage: "url('images/img_group35933.svg')",
                        }}
                      >
                        <div className="absolute h-[505px] inset-[0] justify-center m-auto shadow-bs w-[35%]">
                          <Img
                            className="h-[505px] m-auto object-cover w-full"
                            src="images/img_silver_505x249.png"
                            alt="silver_One"
                          />
                          <Img
                            className="absolute h-[481px] inset-[0] justify-center m-auto object-cover w-[90%]"
                            src="images/img_mockup_481x222.png"
                            alt="mockup_One"
                          />
                        </div>
                        <div
                          className="absolute bg-cover bg-no-repeat flex flex-col h-[162px] items-end justify-start p-[7px] right-[24%] top-[33%] w-[31%]"
                          style={{
                            backgroundImage: "url('images/img_group6.svg')",
                          }}
                        >
                          <div className="flex flex-row items-start justify-end mb-[5px] mt-[103px] w-[93%] md:w-full">
                            <div className="bg-gray-100_01 flex flex-col h-10 items-center justify-start rounded-[50%] w-10">
                              <Img
                                className="h-10 md:h-auto rounded-[50%] w-10"
                                src="images/img_coolprofile.png"
                                alt="coolprofile"
                              />
                            </div>
                            <div className="flex flex-col gap-1 items-start justify-start mt-[3px] w-[117px]">
                              <Text
                                className="text-black-900 text-xs w-auto"
                                size="txtNeueHaasDisplayMediu12"
                              >
                                Thompson Ope
                              </Text>
                              <Text
                                className="text-[10px] text-gray-600 w-auto"
                                size="txtPlusJakartaSansRomanRegular10"
                              >
                                iNPAY ID | @topeyemi
                              </Text>
                            </div>
                            <Button
                              className="border border-indigo-50 border-solid flex h-[30px] items-center justify-center my-[5px] rounded-[50%] w-[30px]"
                              shape="circle"
                              color="gray_50"
                              size="xs"
                            >
                              <Img
                                className="h-6"
                                src="images/img_settings.svg"
                                alt="settings"
                              />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-[90%]">
                    <div className="md:h-[504px] h-[719px] relative w-full">
                      <div className="absolute bottom-[28%] flex flex-col items-center justify-start right-[0] w-[46%]">
                        <div className="flex flex-col gap-[23px] items-start justify-start w-full">
                          <div className="flex flex-row gap-[15px] items-end justify-start w-[58%] md:w-full">
                            <Button
                              className="flex h-12 items-center justify-center rounded-[50%] w-12"
                              shape="circle"
                              color="blue_A200"
                            >
                              <Img
                                className="h-6"
                                src="images/img_airplane.svg"
                                alt="airplane"
                              />
                            </Button>
                            <Text
                              className="capitalize mb-1 mt-2 sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                              size="txtClashDisplaySemibold28"
                            >
                              fully customizable
                            </Text>
                          </div>
                          <Text
                            className="capitalize leading-[28.00px] text-black-900_87 text-lg w-full"
                            size="txtClashDisplayMedium18Black90087"
                          >
                            <>
                              Explore a safer, smarter way to shop online with
                              iNPAY&#39;s Virtual Cards. These innovative
                              digital companions shield your financial details
                              from prying eyes, providing an extra layer of
                              security. No more worries about your main
                              financial accounts getting compromised during
                              online transactions. Shop with confidence and
                              peace of mind, knowing that your sensitive
                              information remains protected.
                            </>
                          </Text>
                        </div>
                      </div>
                      <div
                        className="absolute bg-cover bg-no-repeat font-neuehaasgroteskdisplaypro md:h-[504px] h-[719px] inset-y-[0] left-[0] my-auto p-[107px] md:px-10 sm:px-5 w-[719px] md:w-full"
                        style={{
                          backgroundImage: "url('images/img_group35933.svg')",
                        }}
                      >
                        <div className="absolute h-[504px] inset-[0] justify-center m-auto shadow-bs w-[35%]">
                          <Img
                            className="h-[504px] m-auto object-cover w-full"
                            src="images/img_silver.png"
                            alt="silver_Two"
                          />
                          <Img
                            className="absolute h-[480px] inset-[0] justify-center m-auto object-cover w-[90%]"
                            src="images/img_mockup_480x222.png"
                            alt="mockup_Two"
                          />
                        </div>
                        <div className="absolute flex flex-col items-center justify-start right-[17%] top-[29%] w-[48%]">
                          <div className="flex flex-col items-center justify-start w-full">
                            <INPAYLandingPageCard className="bg-blue-A200 flex flex-col items-center justify-start rounded-[20px] w-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  className="h-[67px] ml-0.5 md:ml-[0] mt-[761px] rotate-[-45deg] w-[67px]"
                  src="images/img_star9.svg"
                  alt="starNine"
                />
                <div className="md:h-[1441px] h-[747px] sm:h-[844px] md:ml-[0] ml-[129px] mt-[103px] relative w-[79%] md:w-full">
                  <Img
                    className="h-16 ml-auto mr-[422px] mt-[67px] w-16"
                    src="images/img_star11.svg"
                    alt="starEleven"
                  />
                  <div className="absolute flex flex-col gap-10 h-full inset-[0] items-start justify-center m-auto w-full">
                    <div className="flex flex-col gap-[5px] items-start justify-start">
                      <Text
                        className="text-blue-A200 text-lg tracking-[2.88px] uppercase"
                        size="txtClashDisplayMedium18BlueA200"
                      >
                        faq
                      </Text>
                      <Text
                        className="capitalize leading-[48.00px] text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
                        size="txtClashDisplayBold48"
                      >
                        Frequently asked questions
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                          <div className="bg-blue-A200 flex flex-1 flex-col items-center justify-start p-[27px] sm:px-5 rounded-lg w-full">
                            <div className="flex flex-col gap-8 items-start justify-start mb-0.5">
                              <Text
                                className="capitalize sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                                size="txtClashDisplaySemibold28WhiteA700"
                              >
                                What is iNPAY wallet?
                              </Text>
                              <Text
                                className="capitalize leading-[28.00px] text-justify text-lg text-white-A700 w-full"
                                size="txtClashDisplayMedium18WhiteA700"
                              >
                                inpay wallet let you manage funds with other
                                members such as friends and family or colleagues
                              </Text>
                            </div>
                          </div>
                          <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[29px] sm:px-5 rounded-lg w-full">
                            <div className="flex flex-col gap-[30px] items-start justify-start">
                              <Text
                                className="capitalize sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                                size="txtClashDisplaySemibold28"
                              >
                                How do i send money?
                              </Text>
                              <Text
                                className="capitalize leading-[28.00px] text-black-900_87 text-justify text-lg w-full"
                                size="txtClashDisplayMedium18Black90087"
                              >
                                you can send money to any local bank in nigeria
                                or to another iNPAY user or wallet using the pay
                                ID
                              </Text>
                            </div>
                          </div>
                          <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[29px] sm:px-5 rounded-lg w-full">
                            <div className="flex flex-col gap-[30px] items-start justify-start">
                              <Text
                                className="capitalize sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                                size="txtClashDisplaySemibold28"
                              >
                                Can i change my pAY ID?
                              </Text>
                              <Text
                                className="capitalize leading-[28.00px] text-black-900_87 text-justify text-lg w-full"
                                size="txtClashDisplayMedium18Black90087"
                              >
                                unfortunately, No. for security reasons, iNPAY
                                ID cannot be changed
                              </Text>
                            </div>
                          </div>
                          <div className="bg-blue-A200 flex flex-1 flex-col items-center justify-end p-[21px] sm:px-5 rounded-lg w-full">
                            <div className="flex flex-col gap-[13px] items-start justify-start mt-[5px]">
                              <Text
                                className="capitalize sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                                size="txtClashDisplaySemibold28WhiteA700"
                              >
                                What is personal balance
                              </Text>
                              <Text
                                className="capitalize leading-[28.00px] text-justify text-lg text-white-A700 w-full"
                                size="txtClashDisplayMedium18WhiteA700"
                              >
                                your personal balance is your main account
                                balance. you can transfer, add money to wallet
                                or pay bill payments directly from your personal
                                balance.
                              </Text>
                            </div>
                          </div>
                          <div className="bg-blue-A200 flex flex-1 flex-col items-center justify-end p-3.5 rounded-lg w-full">
                            <div className="flex flex-col gap-2 items-center justify-start mt-[3px]">
                              <Text
                                className="capitalize leading-[28.00px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-full"
                                size="txtClashDisplaySemibold28WhiteA700"
                              >
                                why do i need pin to initiate transaction?
                              </Text>
                              <Text
                                className="capitalize leading-[28.00px] text-justify text-lg text-white-A700 w-[98%] sm:w-full"
                                size="txtClashDisplayMedium18WhiteA700"
                              >
                                For security and safety, your PIN is required
                                for all transfers. Ensure this is a unique pin
                                to just you and do not share this with anyone.
                              </Text>
                            </div>
                          </div>
                          <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end p-[30px] sm:px-5 rounded-lg w-full">
                            <div className="flex flex-col gap-2 items-center justify-start">
                              <Text
                                className="capitalize leading-[28.00px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 w-full"
                                size="txtClashDisplaySemibold28"
                              >
                                What kind of bill payment can i pay on iNPAY?
                              </Text>
                              <Text
                                className="capitalize leading-[28.00px] text-black-900_87 text-justify text-lg w-[99%] sm:w-full"
                                size="txtClashDisplayMedium18Black90087"
                              >
                                You can pay for Airtime, Internet Data
                                subscriptions, electrical bills and DStv/GOtv
                                subscriptions.
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  className="h-16 md:ml-[0] ml-[1277px] mt-[68px] w-16"
                  src="images/img_star8_64x64.svg"
                  alt="starEight_One"
                />
                <Img
                  className="h-[67px] ml-0.5 md:ml-[0] mt-[147px] rotate-[-45deg] w-[67px]"
                  src="images/img_star10.svg"
                  alt="starTen"
                />
              </div>
              <div className="absolute bottom-[29%] flex flex-col font-clashdisplay inset-x-[0] items-center justify-start mx-auto w-[76%]">
                <div className="flex flex-col md:gap-10 gap-[94px] items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <div className="flex md:flex-1 flex-col gap-4 items-start justify-start w-[16%] md:w-full">
                      <Img
                        className="h-[34px] md:h-auto ml-0.5 md:ml-[0] object-cover w-[79%]"
                        src="images/img_inpaylogo11.png"
                        alt="inpaylogoEleven"
                      />
                      <div className="flex flex-row gap-2 items-start justify-start w-[94%] md:w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_frame.svg"
                          alt="frame"
                        />
                        <Text
                          className="capitalize mt-0.5 text-base text-black-900"
                          size="txtClashDisplayMedium16"
                        >
                          HELP@INPAY.NG
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_frame_blue_a200.svg"
                          alt="frame_One"
                        />
                        <Text
                          className="capitalize text-base text-black-900"
                          size="txtClashDisplayMedium16"
                        >
                          +1 234 456 678 89
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-5 items-start justify-start">
                      <Text
                        className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                        size="txtClashDisplayMedium32"
                      >
                        links
                      </Text>
                      <Text
                        className="capitalize md:ml-[0] ml-[3px] text-base text-black-900"
                        size="txtClashDisplayMedium16"
                      >
                        home
                      </Text>
                      <Text
                        className="capitalize md:ml-[0] ml-[3px] text-base text-black-900"
                        size="txtClashDisplayMedium16"
                      >
                        about us
                      </Text>
                      <a
                        href="javascript:"
                        className="capitalize md:ml-[0] ml-[3px] text-base text-black-900"
                      >
                        <Text size="txtClashDisplayMedium16">Contact US</Text>
                      </a>
                      <Text
                        className="capitalize md:ml-[0] ml-[3px] text-base text-black-900"
                        size="txtClashDisplayMedium16"
                      >
                        blog
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start md:mt-0 mt-0.5">
                      <Text
                        className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                        size="txtClashDisplayMedium32"
                      >
                        legal
                      </Text>
                      <Text
                        className="capitalize mt-[17px] text-base text-black-900"
                        size="txtClashDisplayMedium16"
                      >
                        terms of use
                      </Text>
                      <a
                        href="javascript:"
                        className="capitalize mt-[23px] text-base text-black-900"
                      >
                        <Text size="txtClashDisplayMedium16">
                          privacy policy
                        </Text>
                      </a>
                      <Text
                        className="capitalize mt-[21px] text-base text-black-900"
                        size="txtClashDisplayMedium16"
                      >
                        cookie policy
                      </Text>
                    </div>
                    <div className="flex flex-col gap-5 items-start justify-start">
                      <Text
                        className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                        size="txtClashDisplayMedium32"
                      >
                        product
                      </Text>
                      <Text
                        className="capitalize text-base text-black-900"
                        size="txtClashDisplayMedium16"
                      >
                        personal
                      </Text>
                      <Text
                        className="capitalize text-base text-black-900"
                        size="txtClashDisplayMedium16"
                      >
                        business
                      </Text>
                      <Text
                        className="capitalize text-base text-black-900"
                        size="txtClashDisplayMedium16"
                      >
                        iNPAY Checkout
                      </Text>
                    </div>
                    <div className="flex md:flex-1 flex-col items-start justify-start w-[32%] md:w-full">
                      <Text
                        className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                        size="txtClashDisplayMedium32"
                      >
                        Newsletter
                      </Text>
                      <Text
                        className="capitalize mt-[21px] text-base text-black-900"
                        size="txtClashDisplayMedium16"
                      >
                        Stay up to date
                      </Text>
                      <div className="bg-white-A700 flex flex-row items-center justify-between mt-[18px] p-2.5 rounded shadow-bs1 w-full">
                        <Text
                          className="ml-[13px] text-base text-blue_gray-400"
                          size="txtClashDisplayMedium16Bluegray400"
                        >
                          Your email{" "}
                        </Text>
                        <Button
                          className="capitalize cursor-pointer font-medium min-w-[160px] text-base text-center"
                          shape="round"
                          color="black_900"
                          size="md"
                        >
                          Subscribe
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="bg-transparent capitalize cursor-pointer font-medium min-w-[1090px] md:min-w-full text-base text-center"
                    shape="square"
                    size="lg"
                    variant="outline"
                    color="gray_900_00_gray_900_00"
                  >
                    Copyright 2023 INPAY.NG all rights reserved
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute md:h-[723px] h-[755px] right-[0] top-[1%] w-[46%] md:w-full">
              <div className="absolute md:h-[723px] h-[739px] inset-[0] justify-center m-auto w-full">
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-start justify-center m-auto p-[49px] md:px-10 sm:px-5 w-full"
                  style={{ backgroundImage: "url('images/img_group7.png')" }}
                >
                  <div className="flex flex-row items-start justify-between md:ml-[0] ml-[54px] mt-[506px] w-[43%] md:w-full">
                    <Img
                      className="h-[65px] mt-[54px] rotate-[-150deg] w-[65px]"
                      src="images/img_star2_65x65.svg"
                      alt="starTwo_One"
                    />
                    <Img
                      className="h-[67px] mb-[51px] rotate-[-45deg] w-[67px]"
                      src="images/img_star6_67x67.svg"
                      alt="starSix_One"
                    />
                  </div>
                </div>
                <div className="absolute bottom-[0] h-[551px] right-[8%] rotate-[15deg] shadow-bs w-[57%] sm:w-full">
                  <Img
                    className="h-[551px] m-auto object-cover w-full"
                    src="images/img_silver_551x371.png"
                    alt="silver_Three"
                  />
                  <Img
                    className="absolute h-[522px] inset-[0] justify-center m-auto object-cover w-[92%]"
                    src="images/img_mockup_522x339.png"
                    alt="mockup_Three"
                  />
                </div>
              </div>
              <Img
                className="absolute h-16 right-[8%] top-[0] w-16"
                src="images/img_star1.svg"
                alt="starOne"
              />
              <div className="absolute bottom-[9%] h-[552px] left-[17%] rotate-[15deg] shadow-bs w-[57%] sm:w-full">
                <Img
                  className="h-[552px] m-auto object-cover w-full"
                  src="images/img_silver_551x371.png"
                  alt="silver_Four"
                />
                <Img
                  className="absolute h-[522px] inset-[0] justify-center m-auto object-cover w-[92%]"
                  src="images/img_mockup_1.png"
                  alt="mockup_Four"
                />
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col gap-6 items-center justify-start left-[12%] top-[3%]">
            <Text
              className="capitalize leading-[64.00px] md:text-5xl text-[64px] text-black-900 w-[97%] sm:w-full"
              size="txtClashDisplayBold64"
            >
              make the best financial decisions
            </Text>
            <Text
              className="capitalize leading-[28.00px] text-black-900_87 text-lg w-full"
              size="txtClashDisplayMedium18Black90087"
            >
              With iNPAY Wallet Management, your personalized financial control
              center. Experience a smarter way to manage your money,
              effortlessly.
            </Text>
          </div>
        </div>
        <div className="absolute flex flex-col gap-4 inset-x-[0] justify-start max-w-[1094px] mx-auto md:px-5 top-[1%] w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 items-end justify-between w-[46%] md:w-full">
                <Img
                  className="h-[34px] md:h-auto object-cover"
                  src="images/img_inpaylogo11.png"
                  alt="inpaylogoEleven_One"
                />
                <div className="flex flex-row gap-6 items-center justify-center sm:mt-0 mt-[7px] w-auto">
                  <Text
                    className="capitalize text-blue-A200 text-xl w-auto"
                    size="txtClashDisplayBold20"
                  >
                    home
                  </Text>
                  <Text
                    className="capitalize text-black-900 text-xl w-auto"
                    size="txtClashDisplayMedium20"
                  >
                    about us
                  </Text>
                  <Text
                    className="capitalize text-black-900 text-xl w-auto"
                    size="txtClashDisplayMedium20"
                  >
                    features
                  </Text>
                </div>
              </div>
              <div className="bg-black-900 flex md:flex-1 flex-col items-end justify-end p-[18px] rounded w-[17%] md:w-full">
                <div className="flex flex-col items-center justify-start mr-2.5">
                  <Text
                    className="capitalize text-lg text-white-A700"
                    size="txtClashDisplayMedium18WhiteA700"
                  >
                    Join Waitlist
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[551px] md:ml-[0] ml-[600px] relative rotate-[15deg] shadow-bs w-[34%] sm:w-full">
            <Img
              className="h-[551px] m-auto object-cover w-full"
              src="images/img_silver_551x371.png"
              alt="silver_Five"
            />
            <Img
              className="absolute h-[522px] inset-[0] justify-center m-auto object-cover w-[92%]"
              src="images/img_mockup_2.png"
              alt="mockup_Five"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default INPAYLandingPagePage;
