import React, { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect, useSignMessage } from "wagmi";
import connectDream from "../../../assets/images/buttons/button_blank.png";
import connectDreamActive from "../../../assets/images/buttons/button_blank_active.png";
import texture from "../../../assets/images/textures/Texture.png";
import ReactGA from "react-ga4";

const DreamLair = () => {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { signMessageAsync } = useSignMessage();
  const [entropy] = useState(Math.floor(Math.random() * 1000000));
  const [expires] = useState(Math.floor(Date.now() / 1000) + 60 * 60);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [utmCampaign, setUtmCampaign] = useState(null);

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
      className="dream-lair-container min-h-screen flex flex-col items-center justify-center p-4"
      style={{
        backgroundImage: `url(${texture})`,
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-[#858585] mb-8 font-averia text-xl sm:text-xl italic !font-[AveriaSerifLibre] text-center">
        Welcome to Dream Lair
      </h1>
      <div className="flex flex-col gap-4">
        <ConnectButton.Custom>
          {({ openConnectModal, openAccountModal, account }) => (
            <div className="flex flex-col items-center gap-2">
              <button
                onClick={account ? openAccountModal : openConnectModal}
                className="relative"
              >
                <img
                  src={account ? connectDreamActive : connectDream}
                  alt={account ? "Connected" : "Connect Wallet"}
                  className="relative"
                />
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#858585] font-averia italic !font-[AveriaSerifLibre] text-xl w-full text-center">
                  {account ? "Connected" : "Connect Wallet"}
                </span>
              </button>
              {isConnected && (
                <button
                  onClick={disconnect}
                  className="text-[#858585] underline hover:text-[#a0a0a0] transition-colors duration-300 font-averia italic !font-[AveriaSerifLibre]"
                >
                  Disconnect
                </button>
              )}
            </div>
          )}
        </ConnectButton.Custom>

        {isConnected && !isAuthenticated && (
          <button onClick={handleSignMessage} className="relative">
            <img src={connectDream} alt="Sign Message" className="relative" />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#858585] font-averia italic !font-[AveriaSerifLibre] text-2xl w-full text-center">
              Sign Message
            </span>
          </button>
        )}

        {isAuthenticated && (
          <div className="text-[#4CAF50] font-averia italic !font-[AveriaSerifLibre] text-center">
            Thanks, you have been added to our list ✓
          </div>
        )}
      </div>
      {isConnected && (
        <p className="text-[#858585] mt-4 font-averia italic !font-[AveriaSerifLibre] text-center break-all">
          Connected: {address}
        </p>
      )}
    </div>
  );
};

export default DreamLair;
