import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { arbitrum } from "wagmi/chains";

const config = getDefaultConfig({
  appName: "Dream Lair",
  projectId: "YOUR_PROJECT_ID",
  chains: [arbitrum],
  ssr: true, // Set to true if your app uses server-side rendering
});

export default config;
