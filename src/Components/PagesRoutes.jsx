import { Route, Routes, useLocation } from "react-router-dom";
import ResetPassword from "./LoginForm/ResetPassword";
import ForgetPassword from "./LoginForm/forgetpswd";
import Otp from "./LoginForm/Otp";
import SignIn from "./LoginForm/SignIn";
import SignUp from "./LoginForm/SignUp";
import Deshboard from "./Pages/Deshboard/deshboard";
import RateImages from "./Pages/RateImages/RateImages";
import TagImages from "./Pages/TagImages/TagImages";
import MyProfile from "./Pages/MyProfile/MyProfile";
import SplashScreen from "./Ui-Components/DropAnimation";
import Explore from "./Pages/Explore/explore";
import Generate from "./Pages/Explore/generate";
import GenerateEdit from "./Pages/Explore/generateEdit";
import SideBAr from "./Commons/SideBar/SideBar";
import MobileNav from "./Commons/MobileNav/nav";
import SubmitYourArtwork from "./Pages/SubmitYourArtwork/SubmitYourArtwork";
import DreamLair from "./Pages/DreamLair/DreamLair";
import DiscordCallback from "./Pages/DreamLair/DiscordCallback";

const sidebarRoutes = [
  "/Deshboard",
  "/RateImages",
  "/TagImages",
  "/MyProfile",
  "/explore",
  "/Generate",
  "/GenerateEdit",
  "/Submit-Your-Artwork",
];

const PagesRoutes = () => {
  const location = useLocation();

  const shouldShowSidebar = sidebarRoutes.includes(location.pathname);
  const shouldShowMobileNav = shouldShowSidebar; // Shared condition
  const contentWidthClass = shouldShowSidebar
    ? "md:w-full lg:w-[81%] 2xl:w-full h-full sm-w-full"
    : "w-full"; // 100% width when sidebar not shown

  return (
    <>
      <div className="flex justify-between">
        <div
          className={`lg:w-[19%] 2xl:w-[300px] sm-hidden ${
            !shouldShowSidebar && "hidden"
          }`}
        >
          {shouldShowSidebar && <SideBAr />}
        </div>
        <div className={contentWidthClass}>
          <Routes>
            <Route exact path="/" element={<SplashScreen />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/ForgetPassword" element={<ForgetPassword />} />
            <Route path="/otp" element={<Otp />} />
            <Route path="/ResetPassword" element={<ResetPassword />} />
            <Route path="/Deshboard" element={<Deshboard />} />
            <Route path="/RateImages" element={<RateImages />} />
            <Route path="/TagImages" element={<TagImages />} />
            <Route path="/MyProfile" element={<MyProfile />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/Generate" element={<Generate />} />
            <Route path="/GenerateEdit" element={<GenerateEdit />} />
            <Route
              path="/Submit-Your-Artwork"
              element={<SubmitYourArtwork />}
            />
            <Route path="/dreamlair" element={<DreamLair />} />
            <Route path="/discord-auth" element={<DiscordCallback />} />
          </Routes>
        </div>
      </div>
      {shouldShowMobileNav && <MobileNav />}
    </>
  );
};

export default PagesRoutes;
