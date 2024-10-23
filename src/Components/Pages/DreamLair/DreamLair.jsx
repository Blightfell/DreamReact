import React, { useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect } from "wagmi";
import connectDream from "../../../assets/images/buttons/connectDream.png";
import connectDreamActive from "../../../assets/images/buttons/connectDreamACTIVE.png";
import texture from "../../../assets/images/textures/Texture.png";

console.log("Texture path:", texture);

const DreamLair = () => {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "YOUR_GA_MEASUREMENT_ID", {
        page_path: "/dreamlair",
      });
    }
  }, []);

  return (
    <div
      className="dream-lair-container min-h-screen flex flex-col items-center justify-center p-4"
      style={{
        backgroundImage: `url(${texture})`,
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-[#858585] mb-8 font-averia text-xl sm:text-2xl italic !font-[AveriaSerifLibre] text-center">
        Welcome to Dream Lair
      </h1>
      <ConnectButton.Custom>
        {({ openConnectModal, openAccountModal, account }) => (
          <button onClick={account ? openAccountModal : openConnectModal}>
            <img
              src={account ? connectDreamActive : connectDream}
              alt="Connect Wallet"
            />
          </button>
        )}
      </ConnectButton.Custom>
      {isConnected && (
        <>
          <button
            onClick={disconnect}
            className="text-[#858585] mt-2 underline hover:text-[#a0a0a0] transition-colors duration-300 font-averia italic !font-[AveriaSerifLibre]"
          >
            Disconnect
          </button>
          <p className="text-[#858585] mt-4 font-averia italic !font-[AveriaSerifLibre] text-center break-all">
            Connected: {address}
          </p>
        </>
      )}
    </div>
  );
};

export default DreamLair;
