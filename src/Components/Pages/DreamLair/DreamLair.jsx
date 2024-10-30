import React, { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect, useSignMessage } from "wagmi";
import connectDream from "../../../assets/images/buttons/connectDream.png";
import connectDreamActive from "../../../assets/images/buttons/connectDreamACTIVE.png";
import texture from "../../../assets/images/textures/Texture.png";

import { useDiscordAuth } from "../../../context/DiscordAuthContext";

console.log("Texture path:", texture);

const DreamLair = () => {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { loginWithDiscord, discordUser } = useDiscordAuth();
  const { signMessageAsync } = useSignMessage();
  const [entropy] = useState(Math.floor(Math.random() * 1000000));
  const [expires] = useState(Math.floor(Date.now() / 1000) + 60 * 60);

  const DISCORD_CLIENT_ID = "1301017266296590447";

  const [discordUserState, setDiscordUserState] = useState(null);
  const [isDiscordLoggedIn, setIsDiscordLoggedIn] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("discord-user");
    if (user) {
      setDiscordUserState(JSON.parse(user));
    }
  }, []);

  useEffect(() => {
    const loggedIn = localStorage.getItem("discord-logged-in");
    if (loggedIn) {
      setIsDiscordLoggedIn(true);
    }
  }, []);

  const handleDiscordAuth = () => {
    const state = crypto.randomUUID();
    localStorage.setItem("discord-state", state);

    const baseUrl =
      window.location.hostname === "localhost"
        ? "http://localhost:5173"
        : "https://dreampro.ai";

    const redirectUri = encodeURIComponent(`${baseUrl}/discord-auth`);
    const authUrl = `https://discord.com/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&response_type=code&redirect_uri=${redirectUri}&scope=identify+email&state=${state}`;
    window.location.href = authUrl;
  };

  const handleDiscordLogout = () => {
    localStorage.removeItem("discord-logged-in");
    setIsDiscordLoggedIn(false);
  };

  const handleSignMessage = async () => {
    if (!isDiscordLoggedIn) {
      alert("Please connect your Discord account first");
      return;
    }

    const entropy = Math.floor(Math.random() * 1000000);
    const expires = Math.floor(Date.now() / 1000) + 60 * 60;
    const message = `Dream Lair\nAction: Login\nEntropy: ${entropy}\nExpires: ${expires}`;

    try {
      const signature = await signMessageAsync({ message });
      console.log("Message:", message);
      console.log("Signature:", signature);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Error signing:", error);
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
            {!isDiscordLoggedIn ? (
              <button
                onClick={handleDiscordAuth}
                className="bg-[#5865F2] text-white px-6 py-2 rounded-lg hover:bg-[#4752C4] transition-colors duration-300"
              >
                Connect Discord
              </button>
            ) : (
              <>
                <div className="flex flex-col items-center gap-2">
                  <div className="text-[#858585]">Connected to Discord</div>
                  <button
                    onClick={handleDiscordLogout}
                    className="text-[#858585] underline hover:text-[#a0a0a0]"
                  >
                    Disconnect Discord
                  </button>
                </div>

                {!isAuthenticated ? (
                  <button
                    onClick={handleSignMessage}
                    className="bg-[#4CAF50] text-white px-6 py-2 rounded-lg hover:bg-[#45a049] transition-colors duration-300"
                  >
                    Sign Message
                  </button>
                ) : (
                  <div className="text-[#4CAF50] font-averia italic !font-[AveriaSerifLibre]">
                    Authenticated ✓
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
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
