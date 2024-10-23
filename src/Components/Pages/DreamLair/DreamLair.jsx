import React, { useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import connectDream from "../../../assets/images/buttons/connectDream.png";
import connectDreamActive from "../../../assets/images/buttons/connectDreamACTIVE.png";

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
    <div className="dream-lair-container bg-[#0f0f0f] min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-[#858585] mb-8 font-['Engria',sans-serif] text-2xl font-normal italic">
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
      {isConnected && <p className="text-white mt-4">Connected: {address}</p>}
    </div>
  );
};

export default DreamLair;
