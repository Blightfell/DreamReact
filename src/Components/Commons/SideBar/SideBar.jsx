import { NavLink } from "react-router-dom";
import LogoIcon from "../../Ui-Components/LogoIcon";
import "./SideBar.css";

const SideBAr = () => {
  const navItems = [
    {
      to: "/",
      iconSrc: "Assets/Images/All Icons/Group 28.svg",
      label: "Explore",
    },
    {
      to: "/MyProfile",
      iconSrc: "Assets/Images/All Icons/Group 27.svg",
      label: "My Profile",
    },
    {
      to: "/Deshboard",
      iconSrc: "Assets/Images/All Icons/Group 43.svg",
      label: "Dashboard",
    },
    {
      to: "/RateImages",
      iconSrc: "Assets/Images/All Icons/Group 26.svg",
      label: "Rate Images",
    },
    {
      to: "/TagImages",
      iconSrc: "Assets/Images/All Icons/Group 41.svg",
      label: "Tag Images",
    },
  ];
  const navItemsSupports = [
    {
      to: "/",
      iconSrc: "Assets/Images/All Icons/Group 29.svg",
      label: "Help & Support",
    },
    {
      to: "/",
      iconSrc: "Assets/Images/All Icons/Group 31.svg",
      label: "Community",
    },
  ];
  return (
    <div>
      <nav className="sidebar">
        <div className="border-b logo-sidebar border-[#2C2E2E] py-[38px] px-10">
          <LogoIcon />
        </div>
        <ul className="sidebar-menu lg:py-8 2xl:py-10 2xl:px-6 lg:px-4">
          {navItems.map((item, index) => (
            <li key={index} className="mb-4" >
              <NavLink className="flex items-center gap-2 py-2 px-4" to={item.to}>
                <img src={item.iconSrc} alt={`${item.label} Icon`} />
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="nav-bottom border-t border-[#2C2E2E]  mt-auto">
          <ul className="sidebar-menu lg:py-8 2xl:py-10 2xl:px-6 lg:px-4">
            {navItemsSupports.map((item, index) => (
              <li key={index} className="mb-4" >
                <NavLink className="flex items-center gap-2 py-2 px-4" to={item.to}>
                  <img src={item.iconSrc} alt={`${item.label} Icon`} />
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default SideBAr
