import "./App.css";
import PagesRoutes from "./Components/PagesRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { RainbowKitProvider, ConnectButton } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import config from "./rainbowKitConfig";
import ReactGA from "react-ga4";
import { DiscordAuthProvider } from "./context/DiscordAuthContext";

const queryClient = new QueryClient();

// Initialize GA4
ReactGA.initialize("G-MR5RGZ4W02");

const App = () => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <DiscordAuthProvider>
            <Router>
              <PagesRoutes />
            </Router>
          </DiscordAuthProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App;
