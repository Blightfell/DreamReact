import React, { useState, useRef, useEffect } from "react";
import texture from "../../../assets/images/textures/Texture.png";
import titleDecor from "../../../assets/images/buttons/titledecor.png";
import magicCircle from "../../../assets/images/textboxes/magiccircle.png";
import connectDream from "../../../assets/images/buttons/connectwallet.png";
import commonStatic from "../../../assets/images/tiers/static/Lair Common_static.png";
import uncommonStatic from "../../../assets/images/tiers/static/Lair Uncommon_static.png";
import rareStatic from "../../../assets/images/tiers/static/Lair Rare_static.png";
import epicStatic from "../../../assets/images/tiers/static/Lair Epic_static.png";
import legendaryStatic from "../../../assets/images/tiers/static/Lair Legendary_static.png";
import onericStatic from "../../../assets/images/tiers/static/Lair Oneiric_static.png";
import mintInfoBg from "../../../assets/images/bg/gachabox.png";
import withBG from "../../../assets/videos/WithBG.mp4";
import video001 from "../../../assets/videos/001.mp4";
import Uncommon600 from "../../../assets/images/rewards/Dreamslips/Uncommon/Uncommon - 600.png";
import Uncommon1800 from "../../../assets/images/rewards/Dreamslips/Uncommon/Uncommon - 1800.png";
import Uncommon3600 from "../../../assets/images/rewards/Dreamslips/Uncommon/Uncommon - 3600.png";
import Uncommon6000 from "../../../assets/images/rewards/Dreamslips/Uncommon/Uncommon - 6000.png";
import Rare7500 from "../../../assets/images/rewards/Dreamslips/Rare/Rare - 7500.png";
import Rare10000 from "../../../assets/images/rewards/Dreamslips/Rare/Rare - 10000.png";
import Rare12500 from "../../../assets/images/rewards/Dreamslips/Rare/Rare - 12500.png";
import Rare15000 from "../../../assets/images/rewards/Dreamslips/Rare/Rare - 15000.png";
import Epic30000 from "../../../assets/images/rewards/Dreamslips/Epic/Epic - 30000.png";
import Epic40000 from "../../../assets/images/rewards/Dreamslips/Epic/Epic - 40000.png";
import Epic50000 from "../../../assets/images/rewards/Dreamslips/Epic/Epic - 50000.png";
import Epic60000 from "../../../assets/images/rewards/Dreamslips/Epic/Epic - 60000.png";
import Legendary75000 from "../../../assets/images/rewards/Dreamslips/Legendary/Legendary - 75000.png";
import Legendary90000 from "../../../assets/images/rewards/Dreamslips/Legendary/Legendary - 90000.png";
import Legendary105000 from "../../../assets/images/rewards/Dreamslips/Legendary/Legendary - 105000.png";
import Legendary120000 from "../../../assets/images/rewards/Dreamslips/Legendary/Legendary - 120000.png";
import Oneiric180000 from "../../../assets/images/rewards/Dreamslips/Oneiric/Oneiric - 180000.png";
import Oneiric280000 from "../../../assets/images/rewards/Dreamslips/Oneiric/Oneiric - 280000.png";
import Oneiric380000 from "../../../assets/images/rewards/Dreamslips/Oneiric/Oneiric - 380000.png";
import Oneiric480000 from "../../../assets/images/rewards/Dreamslips/Oneiric/Oneiric - 480000.png";
import pack from "../../../assets/images/bg/pack.png";

const GachaMint = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const [leftRewardVisible, setLeftRewardVisible] = useState(false);
  const [rightRewardVisible, setRightRewardVisible] = useState(false);
  const [rewardTier, setRewardTier] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSignMessage = () => {
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    setShowConfirmation(false);
    setShowVideo(true);
  };

  useEffect(() => {
    if (showVideo) {
      setRewardTier(getRandomReward());

      video1Ref.current.play();

      video1Ref.current.onended = () => {
        video1Ref.current.style.display = "none";
        video2Ref.current.style.display = "flex";

        const videos = video2Ref.current.querySelectorAll("video");
        const [leftVideo, rightVideo] = videos;

        // Add timeupdate listener for left video
        leftVideo.ontimeupdate = () => {
          if (leftVideo.currentTime >= leftVideo.duration * 0.17) {
            leftVideo.pause();
            setLeftRewardVisible(true);

            // Start right video
            rightVideo.ontimeupdate = () => {
              if (rightVideo.currentTime >= rightVideo.duration * 0.17) {
                rightVideo.pause();
                setRightRewardVisible(true);
                setShowVideo(false);
                setIsAuthenticated(true);
              }
            };
            rightVideo.play();
          }
        };

        leftVideo.play();
      };
    }
  }, [showVideo]);

  const textGradientStyle = {
    background:
      "linear-gradient(180deg, #fcdfc5 0%, #a88d6b 50%, #fcdfc5 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.9))",
  };

  const getRandomReward = () => {
    const tiers = ["Uncommon", "Rare", "Epic", "Legendary", "Oneiric"];
    const staticImages = {
      Uncommon: uncommonStatic,
      Rare: rareStatic,
      Epic: epicStatic,
      Legendary: legendaryStatic,
      Oneiric: onericStatic,
    };

    const rewardImages = {
      Uncommon: {
        600: Uncommon600,
        1800: Uncommon1800,
        3600: Uncommon3600,
        6000: Uncommon6000,
      },
      Rare: {
        7500: Rare7500,
        10000: Rare10000,
        12500: Rare12500,
        15000: Rare15000,
      },
      Epic: {
        30000: Epic30000,
        40000: Epic40000,
        50000: Epic50000,
        60000: Epic60000,
      },
      Legendary: {
        75000: Legendary75000,
        90000: Legendary90000,
        105000: Legendary105000,
        120000: Legendary120000,
      },
      Oneiric: {
        180000: Oneiric180000,
        280000: Oneiric280000,
        380000: Oneiric380000,
        480000: Oneiric480000,
      },
    };

    const amounts = {
      Uncommon: ["600", "1800", "3600", "6000"],
      Rare: ["7500", "10000", "12500", "15000"],
      Epic: ["30000", "40000", "50000", "60000"],
      Legendary: ["75000", "90000", "105000", "120000"],
      Oneiric: ["180000", "280000", "380000", "480000"],
    };

    const tier = tiers[Math.floor(Math.random() * tiers.length)];
    const amount =
      amounts[tier][Math.floor(Math.random() * amounts[tier].length)];

    return {
      tier,
      amount,
      lairImage: staticImages[tier],
      rewardImage: rewardImages[tier][amount],
    };
  };

  return (
    <div
      className="min-h-screen flex flex-col p-4 min-w-[320px] max-w-[100vw] overflow-x-hidden"
      style={{
        backgroundImage: `url(${texture})`,
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mt-8 md:absolute md:top-[10%] left-1/2 md:-translate-x-1/2 flex flex-col items-center">
        <h1 className="text-[#858585] mb-2 !font-[AveriaSerifLibre-Regular] text-lg md:text-xl text-center">
          Purchase Your Loot Box
        </h1>
        <img src={titleDecor} alt="Title Decoration" className="mb-4 w-32" />
      </div>

      <div className="md:absolute top-[22%] md:top-[25%] left-1/2 md:-translate-x-1/2 w-full">
        <div className="flex flex-col items-center">
          <div className="flex items-start justify-between w-screen px-16">
            <div className="flex gap-2 ml-24">
              <div className="flex flex-col items-end mt-36">
                <div className="text-right space-y-5 mb-5">
                  <p
                    className="text-lg !font-[AveriaSerifLibre-Regular]"
                    style={textGradientStyle}
                  >
                    DREAM LAIR
                  </p>
                  <p
                    className="text-lg !font-[AveriaSerifLibre-Regular]"
                    style={textGradientStyle}
                  >
                    COSMETIC
                  </p>
                  <p
                    className="text-lg !font-[AveriaSerifLibre-Regular]"
                    style={textGradientStyle}
                  >
                    DREAMSLIPS
                  </p>
                  <div className="h-12"></div>
                  <p
                    className="text-lg !font-[AveriaSerifLibre-Regular]"
                    style={textGradientStyle}
                  >
                    INITIATED VILLAGER
                  </p>
                  <p
                    className="text-lg !font-[AveriaSerifLibre-Regular]"
                    style={textGradientStyle}
                  >
                    CARD PACK
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <h2
                  className="text-2xl mb-5 !font-[AveriaSerifLibre-Regular]"
                  style={textGradientStyle}
                >
                  LOOT BOX
                </h2>
                <p
                  className="text-xl mb-4 !font-[AveriaSerifLibre-Regular]"
                  style={textGradientStyle}
                >
                  0.05 ETH
                </p>

                <div className="relative w-[400px] origin-top scale-[0.7] md:scale-[0.85] xl:scale-100">
                  <img
                    src={mintInfoBg}
                    alt="Gacha Info"
                    className="w-full object-contain drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]"
                  />
                  <div className="absolute inset-0 flex flex-col px-8">
                    <div className="mt-[18%] space-y-8">
                      <p className="text-gray-400 !font-[AveriaSerifLibre] text-xs">
                        1 x Common, Uncommon, Rare, Epic, Legendary, or Oneiric
                      </p>
                      <p className="text-gray-400 !font-[AveriaSerifLibre] text-xs">
                        1 x Cosmetic for use in our Dreamrunner aRPG
                      </p>
                      <p className="text-gray-400 !font-[AveriaSerifLibre] text-xs">
                        Between 1-100(1x) of purchase price in $Dream allocation
                      </p>
                    </div>

                    <div className="mt-auto mb-[10%] space-y-8">
                      <p className="text-gray-400 !font-[AveriaSerifLibre] text-xs">
                        Initiated Villager for use in Knights of the Ether -
                        [10%]
                      </p>
                      <p className="text-gray-400 !font-[AveriaSerifLibre] text-xs">
                        Card Pack for use in our Blightfell TCG - [30%]
                      </p>
                    </div>
                  </div>
                </div>
                <p
                  className="mt-4 text-center text-sm max-w-[300px] !font-[AveriaSerifLibre]"
                  style={textGradientStyle}
                >
                  Minters receive a Loot Box with Cosmetic, Card Packs,
                  Character NFTs, and Dreamslips
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center mr-72 mt-16">
              <img
                src={legendaryStatic}
                alt="Legendary Lair"
                className="w-[200px] object-contain drop-shadow-[0_0_15px_rgba(0,0,0,0.7)] mb-8"
              />

              <div className="flex items-center gap-8">
                <div className="flex flex-col items-center">
                  <p
                    className="text-lg !font-[AveriaSerifLibre] mb-2"
                    style={textGradientStyle}
                  >
                    CHOOSE AMOUNT
                  </p>
                  <div className="flex items-center gap-2">
                    <span
                      className="text-2xl !font-[AveriaSerifLibre]"
                      style={textGradientStyle}
                    >
                      1
                    </span>
                    <button
                      className="text-2xl !font-[AveriaSerifLibre]"
                      style={textGradientStyle}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="relative scale-90">
                  <img
                    src={magicCircle}
                    alt="Magic Circle"
                    className="w-[140px] object-contain drop-shadow-[0_0_15px_rgba(0,0,0,0.7)]"
                  />
                  <button
                    onClick={handleSignMessage}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  >
                    <img
                      src={connectDream}
                      alt="Sign Message"
                      className="w-32 object-contain"
                    />
                    <span
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-base w-full text-center !font-[AveriaSerifLibre]"
                      style={{
                        background:
                          "linear-gradient(180deg, #858585 0%, #4a4a4a 50%, #858585 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.8))",
                      }}
                    >
                      Sign
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isAuthenticated && (
        <div className="text-[#4CAF50] font-averia italic !font-[AveriaSerifLibre] text-center">
          Thanks, you have been added to our list ✓
        </div>
      )}

      <div className="mt-auto w-full text-center">
        <a
          href="https://dreampro.ai"
          className="text-[#fcdfc5] !font-[AveriaSerifLibre] text-xs md:text-sm hover:text-[#858585] transition-colors"
          style={{
            background:
              "linear-gradient(180deg, #fcdfc5 0%, #a88d6b 50%, #fcdfc5 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.8))",
          }}
        >
          &lt; RETURN TO HOME
        </a>
        <span
          className="text-[#fcdfc5] !font-[AveriaSerifLibre] text-xs md:text-sm"
          style={{
            background:
              "linear-gradient(180deg, #fcdfc5 0%, #a88d6b 50%, #fcdfc5 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.8))",
          }}
        >
          {" | "}
        </span>
        <span
          className="text-[#fcdfc5] !font-[AveriaSerifLibre] text-xs md:text-sm opacity-50"
          style={{
            background:
              "linear-gradient(180deg, #fcdfc5 0%, #a88d6b 50%, #fcdfc5 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.8))",
          }}
        >
          ALTERNATE MINT PAGE &gt;
        </span>
      </div>

      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <h1
              className="text-6xl mb-12 font-['AveriaSerifLibre-Regular']"
              style={{
                background:
                  "linear-gradient(180deg, #4CAF50 0%, #388E3C 50%, #4CAF50 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.9))",
              }}
            >
              OPEN YOUR PACKS
            </h1>

            <div className="relative w-[800px] h-[400px] flex items-center justify-center">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={pack}
                  alt="Dream Pack"
                  className={`absolute w-[180px] transition-all cursor-pointer
                    ${
                      i === 0
                        ? "left-[3%] -translate-x-1/2 -rotate-12 hover:scale-110"
                        : ""
                    }
                    ${
                      i === 1
                        ? "left-[25%] -translate-x-1/2 -rotate-6 hover:scale-110"
                        : ""
                    }
                    ${
                      i === 2
                        ? "left-1/2 -translate-x-1/2 scale-125 drop-shadow-[0_0_15px_rgba(45,212,191,0.5)]"
                        : ""
                    }
                    ${
                      i === 3
                        ? "left-[75%] -translate-x-1/2 rotate-6 hover:scale-110"
                        : ""
                    }
                    ${
                      i === 4
                        ? "left-[97%] -translate-x-1/2 rotate-12 hover:scale-110"
                        : ""
                    }
                    ${i !== 2 ? "z-10" : "z-20"}
                  `}
                  onClick={handleConfirm}
                />
              ))}
            </div>

            <button
              className="mt-8 px-8 py-2 rounded-lg text-lg font-['AveriaSerifLibre-Regular'] bg-[#858585] hover:bg-[#6e6e6e] transition-colors"
              style={{
                boxShadow:
                  "0 4px 6px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2)",
              }}
              onClick={handleConfirm}
            >
              OPEN
            </button>
          </div>
        </div>
      )}

      {showVideo && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <video
            ref={video1Ref}
            className="w-screen h-screen object-cover"
            playsInline
            muted
          >
            <source src={withBG} type="video/mp4" />
          </video>
          <div
            className="flex gap-0 w-screen h-screen items-center justify-center"
            style={{ display: "none" }}
            ref={video2Ref}
          >
            <video
              className="w-[900px] h-[900px] object-cover -mr-16"
              playsInline
              muted
            >
              <source src={video001} type="video/mp4" />
            </video>
            <video
              className="w-[900px] h-[900px] object-cover -ml-16"
              playsInline
              muted
            >
              <source src={video001} type="video/mp4" />
            </video>
          </div>
        </div>
      )}

      {(leftRewardVisible || rightRewardVisible) && rewardTier && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50">
          <div className="flex flex-col h-screen items-center justify-center">
            <div className="absolute top-[15%] text-center">
              <h1
                className="text-4xl mb-2 font-['AveriaSerifLibre-Regular']"
                style={{
                  background:
                    "linear-gradient(180deg, #4CAF50 0%, #388E3C 50%, #4CAF50 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.9))",
                }}
              >
                CONGRATULATIONS
              </h1>
              <p
                className="text-xl font-['AveriaSerifLibre-Regular']"
                style={{
                  background:
                    "linear-gradient(180deg, #fcdfc5 0%, #a88d6b 50%, #fcdfc5 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.9))",
                }}
              >
                Here are your rewards
              </p>
            </div>

            <div className="flex gap-0 w-screen items-center justify-center">
              <div className="relative w-[900px] h-[900px] -mr-16 flex items-center justify-center flex-col">
                {leftRewardVisible && (
                  <>
                    <img
                      src={rewardTier.lairImage}
                      alt="Dream Lair Reward"
                      className="w-[250px] h-[250px] object-contain"
                    />
                    <div className="mt-4 text-center">
                      <p
                        className="text-xl font-['AveriaSerifLibre-Regular']"
                        style={{
                          background:
                            "linear-gradient(180deg, #fcdfc5 0%, #a88d6b 50%, #fcdfc5 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.9))",
                        }}
                      >
                        {rewardTier.tier} Lair
                      </p>
                    </div>
                  </>
                )}
              </div>
              <div className="relative w-[900px] h-[900px] -ml-16 flex items-center justify-center flex-col">
                {rightRewardVisible && (
                  <>
                    <img
                      src={rewardTier.rewardImage}
                      alt="Dream Slip Reward"
                      className="w-[250px] h-[250px] object-contain"
                    />
                    <div className="mt-4 text-center">
                      <p
                        className="text-xl font-['AveriaSerifLibre-Regular']"
                        style={{
                          background:
                            "linear-gradient(180deg, #fcdfc5 0%, #a88d6b 50%, #fcdfc5 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.9))",
                        }}
                      >
                        {rewardTier.tier} Dreamslip
                      </p>
                      <p
                        className="text-xl font-['AveriaSerifLibre-Regular'] mt-1"
                        style={{
                          background:
                            "linear-gradient(180deg, #fcdfc5 0%, #a88d6b 50%, #fcdfc5 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.9))",
                        }}
                      >
                        {rewardTier.amount} DREAM
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>

            <button
              className="absolute bottom-[15%] px-8 py-2 rounded-lg text-lg font-['AveriaSerifLibre-Regular'] bg-[#858585] hover:bg-[#6e6e6e] transition-colors"
              style={{
                boxShadow:
                  "0 4px 6px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2)",
                transform: "translateY(-1px)",
              }}
              onClick={() => {
                setLeftRewardVisible(false);
                setRightRewardVisible(false);
                setShowVideo(false);
              }}
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GachaMint;
