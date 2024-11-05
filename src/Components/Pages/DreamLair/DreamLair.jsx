import React, { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect, useSignMessage } from "wagmi";
import connectDream from "../../../assets/images/buttons/connectDream.png";
import connectDreamActive from "../../../assets/images/buttons/connectDreamACTIVE.png";
import texture from "../../../assets/images/textures/Texture.png";
import ReactGA from "react-ga4";

console.log("Texture path:", texture);

const DreamLair = () => {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { signMessageAsync } = useSignMessage();
  const [entropy] = useState(Math.floor(Math.random() * 1000000));
  const [expires] = useState(Math.floor(Date.now() / 1000) + 60 * 60);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (isConnected) {
      ReactGA.event({
        category: "Wallet",
        action: "Connect",
        label: "Wallet Connected",
      });
    }
  }, [isConnected]);

  const handleSignMessage = async () => {
    try {
      const message = `Dream Lair\nAction: Login\nEntropy: ${entropy}\nExpires: ${expires}`;
      const signature = await signMessageAsync({ message });

      const payload = {
        sig: signature,
      };
      console.log("Sending payload to backend:", payload);

      const response = await fetch(
        "https://master-server.merlynlabs.io/discord_token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const responseData = await response.json();
      console.log("Backend response:", {
        status: response.status,
        data: responseData,
      });

      if (response.ok) {
        setIsAuthenticated(true);
        ReactGA.event({
          category: "Authentication",
          action: "Sign",
          label: "Message Signed",
        });
      }
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
      <h1 className="text-[#858585] mb-8 font-averia text-xl sm:text-2xl italic !font-[AveriaSerifLibre] text-center">
        Welcome to Dream Lair
      </h1>
      <div className="flex flex-col gap-4">
        <ConnectButton.Custom>
          {({ openConnectModal, openAccountModal, account }) => (
            <div className="flex flex-col items-center gap-2">
              <button onClick={account ? openAccountModal : openConnectModal}>
                <img
                  src={account ? connectDreamActive : connectDream}
                  alt="Connect Wallet"
                />
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
          <button
            onClick={handleSignMessage}
            className="bg-[#4CAF50] text-white px-6 py-2 rounded-lg hover:bg-[#45a049] transition-colors duration-300"
          >
            Sign Message
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
