import React, { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect, useSignMessage } from "wagmi";
import connectDream from "../../../assets/images/buttons/connectwallet.png";
import connectDreamActive from "../../../assets/images/buttons/connectwallet.png";
import texture from "../../../assets/images/textures/Texture.png";
import ReactGA from "react-ga4";
import twitterButton from "../../../assets/images/buttons/twitterbutton.png";
import whitepaperButton from "../../../assets/images/buttons/whitepaperbutton.png";
import discordButton from "../../../assets/images/buttons/discordbutton.png";
import titleDecor from "../../../assets/images/buttons/titledecor.png";
import commonTextbox from "../../../assets/images/textboxes/commonbox.png";
import uncommonTextbox from "../../../assets/images/textboxes/uncommonbox.png";
import rareTextbox from "../../../assets/images/textboxes/rarebox.png";
import epicTextbox from "../../../assets/images/textboxes/epicbox.png";
import legendaryTextbox from "../../../assets/images/textboxes/legendarybox.png";
import onericTextbox from "../../../assets/images/textboxes/oneiricbox.png";
import magicCircle from "../../../assets/images/textboxes/magiccircle.png";
import buyNowDisabled from "../../../assets/images/buttons/buynowdisabled.png";
import buyNow from "../../../assets/images/buttons/buynow.png";
import commonGif from "../../../assets/images/tiers/optimized/Lair Common.gif";
import uncommonGif from "../../../assets/images/tiers/optimized/Lair Uncommon.gif";
import rareGif from "../../../assets/images/tiers/optimized/Lair Rare.gif";
import epicGif from "../../../assets/images/tiers/optimized/Lair Epic.gif";
import legendaryGif from "../../../assets/images/tiers/optimized/Lair Legendary.gif";
import onericGif from "../../../assets/images/tiers/optimized/Lair Oneiric.gif";
import commonStatic from "../../../assets/images/tiers/static/Lair Common_static.png";
import uncommonStatic from "../../../assets/images/tiers/static/Lair Uncommon_static.png";
import rareStatic from "../../../assets/images/tiers/static/Lair Rare_static.png";
import epicStatic from "../../../assets/images/tiers/static/Lair Epic_static.png";
import legendaryStatic from "../../../assets/images/tiers/static/Lair Legendary_static.png";
import onericStatic from "../../../assets/images/tiers/static/Lair Oneiric_static.png";
import cellBackground from "../../../assets/images/buttons/cellbackground.png";
import cellOverlay from "../../../assets/images/buttons/celloverlay.png";
import { TIER_DATA } from "./tierData";

const TieredMint = () => {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { signMessageAsync } = useSignMessage();
  const [entropy] = useState(Math.floor(Math.random() * 1000000));
  const [expires] = useState(Math.floor(Date.now() / 1000) + 60 * 60);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [utmCampaign, setUtmCampaign] = useState(null);
  const [selectedCell, setSelectedCell] = useState(0);
  const [isBuyEnabled, setIsBuyEnabled] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const campaign = urlParams.get("utm_campaign");
    if (campaign) {
      setUtmCampaign(campaign);
      console.log("Campaign detected:", campaign);
    }
  }, []);

  useEffect(() => {
    if (isConnected && address) {
      const eventData = {
        category: "Wallet",
        action: "Connect",
        label: "Wallet Connected",
        value: 1,
        wallet_address: address,
        utm_campaign: utmCampaign || "direct",
      };
      ReactGA.event(eventData);
    }
  }, [isConnected, address, utmCampaign]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "ArrowLeft":
          setSelectedCell((prev) => (prev > 0 ? prev - 1 : prev));
          break;
        case "ArrowRight":
          setSelectedCell((prev) => (prev < 5 ? prev + 1 : prev));
          break;
        case "ArrowUp":
          setSelectedCell((prev) => (prev >= 3 ? prev - 3 : prev));
          break;
        case "ArrowDown":
          setSelectedCell((prev) => (prev < 3 ? prev + 3 : prev));
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSignMessage = async () => {
    try {
      const message = `Dream Lair\nAction: Login\nEntropy: ${entropy}\nExpires: ${expires}`;
      const signature = await signMessageAsync({ message });

      setIsAuthenticated(true);
      const eventData = {
        category: "Authentication",
        action: "Sign",
        label: "Message Signed",
        value: 1,
        wallet_address: address,
        utm_campaign: utmCampaign || "direct",
      };
      ReactGA.event(eventData);
    } catch (error) {
      console.error("Error details:", error);
      alert("Authentication failed");
    }
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
      <div className="md:absolute top-[3%] md:top-[6%] right-[8%] flex items-center gap-4">
        <ConnectButton.Custom>
          {({ openConnectModal, openAccountModal, account }) => {
            const isWalletReady = account?.address;
            return (
              <button
                onClick={isWalletReady ? openAccountModal : openConnectModal}
                className="relative"
              >
                <img
                  src={isWalletReady ? connectDreamActive : connectDream}
                  alt={isWalletReady ? "Connected" : "Connect Wallet"}
                  className="h-8 w-auto"
                />
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#858585] font-averia italic !font-[AveriaSerifLibre] text-sm w-full text-center">
                  {isWalletReady ? "Connected" : "Connect Wallet"}
                </span>
              </button>
            );
          }}
        </ConnectButton.Custom>

        <button className="relative">
          <img
            src={twitterButton}
            alt="Twitter"
            className="h-8 w-auto drop-shadow-[0_0_12px_rgba(0,0,0,0.7)]"
          />
        </button>
        <button className="relative">
          <img
            src={whitepaperButton}
            alt="Whitepaper"
            className="h-8 w-auto drop-shadow-[0_0_12px_rgba(0,0,0,0.7)]"
          />
        </button>
        <button className="relative">
          <img
            src={discordButton}
            alt="Discord"
            className="h-8 w-auto drop-shadow-[0_0_12px_rgba(0,0,0,0.7)]"
          />
        </button>
      </div>

      <div className="mt-8 md:absolute md:top-[15%] left-1/2 md:-translate-x-1/2 flex flex-col items-center">
        <h1 className="text-[#858585] mb-2 font-averia italic !font-[AveriaSerifLibre] text-lg md:text-xl text-center">
          Your Dream Lair Awaits
        </h1>
        <img src={titleDecor} alt="Title Decoration" className="mb-8 w-32" />
      </div>

      <div className="md:absolute top-[22%] md:top-[30%] left-1/2 md:-translate-x-1/2 w-full">
        <div className="flex flex-col md:flex-row md:items-start md:justify-center md:gap-8">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-[25px] lg:gap-[25px] w-fit mx-auto">
            {["Common", "Uncommon", "Rare", "Epic", "Legendary", "Oneiric"].map(
              (label, index) => {
                const gifMap = [
                  commonGif,
                  uncommonGif,
                  rareGif,
                  epicGif,
                  legendaryGif,
                  onericGif,
                ];
                const staticMap = [
                  commonStatic,
                  uncommonStatic,
                  rareStatic,
                  epicStatic,
                  legendaryStatic,
                  onericStatic,
                ];

                return (
                  <div
                    key={index}
                    className={`flex flex-col items-center gap-2 transition-all duration-200 w-[85px] md:w-[85px] lg:w-[115px] ${
                      selectedCell === index
                        ? "scale-125 md:scale-115 lg:scale-125"
                        : ""
                    }`}
                    onClick={() => setSelectedCell(index)}
                  >
                    <div className="relative">
                      <img
                        src={cellBackground}
                        alt="Cell Background"
                        className="w-[85px] h-[85px] md:w-[85px] md:h-[85px] lg:w-[115px] lg:h-[115px] object-contain cursor-pointer transform-gpu drop-shadow-[0_0_15px_rgba(0,0,0,0.7)]"
                      />
                      <img
                        src={
                          selectedCell === index
                            ? gifMap[index]
                            : staticMap[index]
                        }
                        alt={`${label} Animation`}
                        className="absolute top-0 left-0 w-[85px] h-[85px] md:w-[85px] md:h-[85px] lg:w-[115px] lg:h-[115px] object-contain"
                        style={{
                          pointerEvents: "none",
                          WebkitTransform: "translate3d(0,0,0)",
                          transform: "translate3d(0,0,0)",
                          WebkitBackfaceVisibility: "hidden",
                          backfaceVisibility: "hidden",
                        }}
                      />
                      <img
                        src={cellOverlay}
                        alt="Cell Overlay"
                        className="absolute top-0 left-0 w-[85px] h-[85px] md:w-[85px] md:h-[85px] lg:w-[115px] lg:h-[115px] object-contain"
                        style={{ pointerEvents: "none" }}
                      />
                    </div>
                    <span
                      className="text-[#fcdfc5] !font-[AveriaSerifLibre] text-sm md:text-sm lg:text-lg"
                      style={{
                        background:
                          "linear-gradient(180deg, #fcdfc5 0%, #a88d6b 50%, #fcdfc5 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.8))",
                      }}
                    >
                      {label}
                    </span>
                  </div>
                );
              }
            )}
          </div>

          <div className="mt-12 md:mt-4 md:absolute md:top-[130%] md:left-1/2 md:-translate-x-1/2 md:w-full">
            {selectedCell !== null && (
              <div className="flex items-center justify-center w-full px-2 md:px-4">
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
                  <div
                    className="relative w-[500px] origin-top
                    scale-[0.7]  // mobile
                    md:scale-[0.85]  // medium screens 
                    xl:scale-100" // extra large screens
                  >
                    <img
                      src={
                        [
                          commonTextbox,
                          uncommonTextbox,
                          rareTextbox,
                          epicTextbox,
                          legendaryTextbox,
                          onericTextbox,
                        ][selectedCell]
                      }
                      alt="Tier Description"
                      className="w-full object-contain drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]"
                    />
                    <div className="absolute inset-0 flex flex-col p-6 pt-2">
                      <h2
                        className="text-xl md:text-2xl mb-8 !font-[AveriaSerifLibre]"
                        style={{
                          background:
                            "linear-gradient(180deg, #fcdfc5 0%, #a88d6b 50%, #fcdfc5 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.9))",
                        }}
                      >
                        {Object.keys(TIER_DATA)[selectedCell]} [$
                        {TIER_DATA[Object.keys(TIER_DATA)[selectedCell]].price}]
                      </h2>
                      <div className="flex justify-center gap-8">
                        <ul className="space-y-1 !font-[AveriaSerifLibre] font-bold leading-[1.2] -ml-4 w-[180px]">
                          <li
                            className="!font-[AveriaSerifLibre] text-[16px] md:text-[18px] mb-1"
                            style={{
                              background:
                                "linear-gradient(180deg, #fcdfc5 0%, #a88d6b 50%, #fcdfc5 100%)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.9))",
                            }}
                          >
                            Includes:
                          </li>
                          <li
                            style={{ color: "#d4b69c" }}
                            className="text-[14px] md:text-[14px] flex justify-between"
                          >
                            <span>Airdrop Multiplier:</span>
                            <span>
                              {
                                TIER_DATA[Object.keys(TIER_DATA)[selectedCell]]
                                  .multiplier
                              }
                            </span>
                          </li>
                          <li
                            style={{ color: "#d4b69c" }}
                            className="text-[14px] md:text-[14px] flex justify-between"
                          >
                            <span>Monthly $Dream Emissions:</span>
                            <span>
                              {
                                TIER_DATA[Object.keys(TIER_DATA)[selectedCell]]
                                  .monthlyEmissions
                              }
                            </span>
                          </li>
                          <li
                            style={{ color: "#d4b69c" }}
                            className="text-[14px] md:text-[14px] flex justify-between"
                          >
                            <span>Total $Dream:</span>
                            <span>
                              {
                                TIER_DATA[Object.keys(TIER_DATA)[selectedCell]]
                                  .totalEmissions
                              }
                            </span>
                          </li>
                        </ul>

                        <ul className="space-y-1 !font-[AveriaSerifLibre] font-bold leading-[1.2] w-[180px]">
                          <li
                            className="!font-[AveriaSerifLibre] text-[14px] md:text-[16px] mb-1"
                            style={{
                              background:
                                "linear-gradient(180deg, #fcdfc5 0%, #a88d6b 50%, #fcdfc5 100%)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.9))",
                            }}
                          >
                            Break Even Dates:
                          </li>
                          <li
                            style={{ color: "#d4b69c" }}
                            className="text-[14px] md:text-[14px] flex justify-between"
                          >
                            <span>(25m FDV):</span>
                            <span>
                              {
                                TIER_DATA[Object.keys(TIER_DATA)[selectedCell]]
                                  .breakEven.fdv25m
                              }{" "}
                              months
                            </span>
                          </li>
                          <li
                            style={{ color: "#d4b69c" }}
                            className="text-[14px] md:text-[14px] flex justify-between"
                          >
                            <span>(50m FDV):</span>
                            <span>
                              {
                                TIER_DATA[Object.keys(TIER_DATA)[selectedCell]]
                                  .breakEven.fdv50m
                              }{" "}
                              months
                            </span>
                          </li>
                          <li
                            style={{ color: "#d4b69c" }}
                            className="text-[14px] md:text-[14px] flex justify-between"
                          >
                            <span>(100m FDV):</span>
                            <span>
                              {
                                TIER_DATA[Object.keys(TIER_DATA)[selectedCell]]
                                  .breakEven.fdv100m
                              }{" "}
                              months
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className="relative -mt-12 md:-mt-8 md:mt-0 
                    scale-[1.1] 
                    sm:scale-[1.1] 
                    md:scale-[0.85] 
                    xl:scale-100
                    transform-gpu
                    mb-8"
                  >
                    <img
                      src={magicCircle}
                      alt="Magic Circle"
                      className="w-[180px] object-contain drop-shadow-[0_0_15px_rgba(0,0,0,0.7)]"
                    />
                    <button
                      onClick={handleSignMessage}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    >
                      <img
                        src={connectDream}
                        alt="Sign Message"
                        className="w-44 md:w-32 object-contain"
                      />
                      <span
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#858585] font-averia italic !font-[AveriaSerifLibre] text-base md:text-xl w-full text-center"
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
            )}
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
    </div>
  );
};

export default TieredMint;
