import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import DreamLair from "./Pages/DreamLair/DreamLair";
import DreamLairMint from "./Pages/DreamLair/DreamLairMint";
import DiscordCallback from "./Pages/DreamLair/DiscordCallback";

const PagesRoutes = () => {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dreamlair" element={<DreamLair />} />
        <Route path="/dreamlair-mint" element={<DreamLairMint />} />
        <Route path="/discord-auth" element={<DiscordCallback />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default PagesRoutes;
