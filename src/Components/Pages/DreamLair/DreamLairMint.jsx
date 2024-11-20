import React, { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import texture from "../../../assets/images/textures/Texture.png";
import connectDream from "../../../assets/images/buttons/connectwallet.png";
import connectDreamActive from "../../../assets/images/buttons/connectwallet.png";
import twitterButton from "../../../assets/images/buttons/twitterbutton.png";
import whitepaperButton from "../../../assets/images/buttons/whitepaperbutton.png";
import discordButton from "../../../assets/images/buttons/discordbutton.png";
import TieredMint from "./TieredMint";
import mintChoiceBG from "../../../assets/images/bg/mintchoiceBGoptimized.png";
import mintInfoBg from "../../../assets/images/bg/mintinfobgoptimized.png";
import flameIcon from "../../../assets/images/fire.png";
import skullIcon from "../../../assets/images/skull.png";
import leftFlair from "../../../assets/images/leftflair.png";
import rightFlair from "../../../assets/images/rightflair.png";
import tieredImg from "../../../assets/images/tieredimg.png";
import gachaImg from "../../../assets/images/gachaimg.png";

const DreamLairMint = () => {
  const [selectedMintType, setSelectedMintType] = useState(null);

  const handleBack = () => {
    setSelectedMintType(null);
  };

  const renderMintSelection = () => (
    <div className="flex flex-col justify-center md:h-[60vh] min-h-fit w-full md:translate-y-[30px]">
      <div className="flex w-full justify-center max-md:gap-8 md:gap-32 md:flex-row flex-col mt-16 md:mt-0">
        <div className="text-center md:w-auto w-full relative">
          <img src={flameIcon} alt="" className="w-6 mx-auto mb-2" />
          <h2
            className="text-2xl md:text-3xl mb-2 !font-[AveriaSerifLibre-Regular] uppercase"
            style={{
              background:
                "linear-gradient(180deg, #fcdfc5 0%, #a88d6b 50%, #fcdfc5 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.9))",
            }}
          >
            Tiered Mint
          </h2>
          <img src={leftFlair} alt="" className="w-48 mx-auto mb-2" />
          <p
            className="text-sm mb-2 max-md:mb-8 italic !font-[AveriaSerifLibre-Regular] text-white/80 max-w-[300px] mx-auto"
            style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.9))" }}
          >
            Choose your Rarity and know exactly what you will recieve with your
            purchase.
          </p>
          <button
            // onClick={() => setSelectedMintType("tiered")}
            className="relative md:translate-x-0 translate-x-12"
          >
            <div className="absolute max-md:right-[265px] right-[285px] top-[20%] text-right">
              <p className="text-base !font-[AveriaSerifLibre-Regular] text-gray-300">
                Common
              </p>
              <p className="text-base !font-[AveriaSerifLibre-Regular] text-[#90B74E]">
                Uncommon
              </p>
              <p className="text-base !font-[AveriaSerifLibre-Regular] text-[#4E7CFF]">
                Rare
              </p>
              <p className="text-base !font-[AveriaSerifLibre-Regular] text-[#A34EFF]">
                Epic
              </p>
              <p className="text-base !font-[AveriaSerifLibre-Regular] text-[#FFB84E]">
                Legendary
              </p>
              <p className="text-base !font-[AveriaSerifLibre-Regular] text-gray-300">
                Oneiric
              </p>
            </div>
            <img
              src={mintInfoBg}
              alt=""
              className="w-[275px] md:w-[275px] w-[250px] drop-shadow-[0_0_12px_rgba(0,0,0,0.7)]"
            />
            <img
              src={tieredImg}
              alt=""
              className="absolute top-[40px] left-1/2 -translate-x-1/2 w-[180px] z-10 drop-shadow-[0_0_12px_rgba(0,0,0,0.7)]"
            />
            <div className="relative -mt-[180px] mb-[90px] text-center">
              <p
                className="text-sm italic !font-[AveriaSerifLibre-Regular] text-white/80 max-w-[215px] mx-auto mb-9 max-md:mt-4 max-md:mb-5"
                style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.9))" }}
              >
                Secure your Dream Lair with 6 Rarity Tiers for you to explore
                and choose from.
              </p>
              <p
                className="text-sm italic !font-[AveriaSerifLibre-Regular] text-white/80 max-w-[215px] mx-auto max-md:mt-2"
                style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.9))" }}
              >
                No RNG - know the exact Lair and $Dream Emissions you'll recieve
                with your purchase.
              </p>
            </div>
          </button>
        </div>

        <div className="text-center md:w-auto w-full relative">
          <img src={skullIcon} alt="" className="w-6 mx-auto mb-2" />
          <h2
            className="text-2xl md:text-3xl mb-2 !font-[AveriaSerifLibre-Regular] uppercase"
            style={{
              background:
                "linear-gradient(180deg, #fcdfc5 0%, #a88d6b 50%, #fcdfc5 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.9))",
            }}
          >
            Gacha Mint
          </h2>
          <img src={rightFlair} alt="" className="w-48 mx-auto mb-2" />
          <p
            className="text-sm mb-2 max-md:mb-8 italic !font-[AveriaSerifLibre-Regular] text-white/80 max-w-[300px] mx-auto"
            style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.9))" }}
          >
            Try your luck and recieve a random tier of Dream Lair and $Dream
            token allocation.
          </p>
          <button
            // onClick={() => setSelectedMintType("gacha")}
            className="relative md:translate-x-0 -translate-x-12"
          >
            <div className="absolute right-[-80px] top-[20%] text-left w-[70px]">
              <p className="text-base !font-[AveriaSerifLibre-Regular] text-gray-300">
                Common
              </p>
              <p className="text-base !font-[AveriaSerifLibre-Regular] text-[#90B74E]">
                Uncommon
              </p>
              <p className="text-base !font-[AveriaSerifLibre-Regular] text-[#4E7CFF]">
                Rare
              </p>
              <p className="text-base !font-[AveriaSerifLibre-Regular] text-[#A34EFF]">
                Epic
              </p>
            </div>
            <img
              src={mintInfoBg}
              alt=""
              className="w-[275px] md:w-[275px] w-[250px] drop-shadow-[0_0_12px_rgba(0,0,0,0.7)]"
            />
            <img
              src={gachaImg}
              alt=""
              className="absolute top-[15px] left-1/2 -translate-x-1/2 w-[180px] z-10 drop-shadow-[0_0_12px_rgba(0,0,0,0.7)]"
            />
            <div className="relative -mt-[180px] mb-[90px] text-center">
              <p
                className="text-sm italic !font-[AveriaSerifLibre-Regular] text-white/80 max-w-[215px] mx-auto mb-8 max-md:mt-4"
                style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.9))" }}
              >
                Recieve a Dreamslip holding 1 to 10,000% of your mint price in
                $Dream allocation.
              </p>
              <p
                className="text-sm italic !font-[AveriaSerifLibre-Regular] text-white/80 max-w-[215px] mx-auto max-md:mt-4"
                style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.9))" }}
              >
                Hold your $Dream reward or immediately redeem your slip for 25%
                of it's value in Eth.
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="min-h-screen flex flex-col p-4 min-w-[320px] max-w-[100vw] overflow-x-hidden"
      style={{
        backgroundImage: selectedMintType
          ? `url(${texture})`
          : `url(${mintChoiceBG})`,
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {selectedMintType && (
        <div className="md:absolute top-[3%] md:top-[6%] left-[8%]">
          <button onClick={handleBack} className="relative">
            <img src={connectDream} alt="Back" className="h-8 w-auto" />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#858585] font-averia text-sm w-full text-center">
              Back
            </span>
          </button>
        </div>
      )}

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

      {selectedMintType === null && (
        <>
          {renderMintSelection()}
          <div className="text-center mt-[0px]">
            <h1
              className="text-3xl md:text-4xl mb-2 !font-[AveriaSerifLibre-Bold]"
              style={{
                background:
                  "linear-gradient(180deg, #fcdfc5 0%, #a88d6b 50%, #fcdfc5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.9))",
              }}
            >
              DREAM LAIR MINT
            </h1>
            <p
              className="text-lg md:text-xl !font-[AveriaSerifLibre-Regular]"
              style={{
                background:
                  "linear-gradient(180deg, #fcdfc5 0%, #a88d6b 50%, #fcdfc5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.9))",
              }}
            >
              Mint your way, with our dual mint structure
            </p>
          </div>
        </>
      )}
      {selectedMintType === "tiered" && <TieredMint />}
      {selectedMintType === "gacha" && <div>Gacha Mint Coming Soon</div>}
    </div>
  );
};

export default DreamLairMint;
