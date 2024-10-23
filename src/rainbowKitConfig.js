import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { arbitrum } from "wagmi/chains";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";

const { wallets } = getDefaultWallets({
  appName: "dreamlair",
  projectId: "3ce3f1ebb2e8e4bc49354e9e1d7bffcf",
});

const config = getDefaultConfig({
  appName: "dreamlair",
  projectId: "3ce3f1ebb2e8e4bc49354e9e1d7bffcf", // Make sure this is set
  chains: [arbitrum],
  ssr: true,
});

export default config;
