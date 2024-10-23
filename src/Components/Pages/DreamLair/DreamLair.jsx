import React, { useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import connectDream from "../../../assets/images/buttons/connectDream.png";
import connectDreamActive from "../../../assets/images/buttons/connectDreamACTIVE.png";
import texture from "../../../assets/images/textures/Texture.png";

console.log("Texture path:", texture);

const DreamLair = () => {
  const { address, isConnected } = useAccount();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "YOUR_GA_MEASUREMENT_ID", {
        page_path: "/dreamlair",
      });
    }
  }, []);

  return (
    <div
      className="dream-lair-container min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${texture})`,
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-[#858585] mb-8 font-averia text-2xl italic !font-[AveriaSerifLibre]">
        Welcome to Dream Lair
      </h1>
      <ConnectButton.Custom>
        {({ openConnectModal, openAccountModal }) => (
          <button onClick={isConnected ? openAccountModal : openConnectModal}>
            <img
              src={isConnected ? connectDreamActive : connectDream}
              alt="Connect Wallet"
            />
          </button>
        )}
      </ConnectButton.Custom>
      {isConnected && (
        <p className="text-[#858585] mt-4 font-averia italic !font-[AveriaSerifLibre]">
          Connected: {address}
        </p>
      )}
    </div>
  );
};

export default DreamLair;
