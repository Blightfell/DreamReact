import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { arbitrum } from "wagmi/chains";

const config = getDefaultConfig({
  appName: "Dream Lair",
  projectId: "YOUR_WALLETCONNECT_PROJECT_ID", // Make sure this is set
  chains: [arbitrum],
  ssr: true,
});

export default config;
