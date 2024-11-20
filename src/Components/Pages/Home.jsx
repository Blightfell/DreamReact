import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import texture from "../../assets/images/textures/Texture.png";
import connectDream from "../../assets/images/buttons/connectwallet.png";
import connectDreamActive from "../../assets/images/buttons/connectwallet.png";
import twitterButton from "../../assets/images/buttons/twitterbutton.png";
import whitepaperButton from "../../assets/images/buttons/whitepaperbutton.png";
import discordButton from "../../assets/images/buttons/discordbutton.png";
import leftFlair from "../../assets/images/leftflair.png";
import rightFlair from "../../assets/images/rightflair.png";
import titleDecor from "../../assets/images/buttons/titledecor.png";
import videobox from "../../assets/images/bg/videobox.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="min-h-screen flex flex-col p-4 min-w-[320px] max-w-[100vw] overflow-x-hidden"
      style={{
        backgroundImage: `url(${texture})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#3B3F3F",
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

      <div className="flex flex-col items-center justify-center flex-grow">
        <Link
          to="/dreamlair-mint"
          className="group cursor-pointer flex flex-col items-center"
        >
          <h1 className="text-[#858585] mb-2 font-averia italic !font-[AveriaSerifLibre] text-lg md:text-xl text-center hover:text-[#a0a0a0] transition-all duration-200 group-hover:scale-105 group-hover:text-[#a0a0a0]">
            Mint Your Dream Lair
          </h1>
          <img
            src={titleDecor}
            alt="Title Decoration"
            className="mb-8 w-32 group-hover:opacity-80 transition-all duration-200 group-hover:scale-105"
          />
        </Link>

        <div className="w-full mb-8 relative flex justify-center">
          <div className="relative w-full max-w-[800px]">
            <img
              src={videobox}
              alt=""
              className="w-full h-auto object-contain"
            />
            <video
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[92%] rounded-lg"
              autoPlay
              loop
              muted
              controls
              playsInline
              src="https://s3.us-east-1.amazonaws.com/assets.knightsoftheether.com/dreampro/optimized.mp4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
