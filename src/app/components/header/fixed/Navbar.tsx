import React from "react";
import DesktopMenu from "@/app/components/menus/DesktopMenu";
import MobileMenu from "@/app/components/menus/MobileMenu";

type NavbarProps = {
  CompanyName: string;
};

const Navbar: React.FC<NavbarProps> = ({ CompanyName }) => {
  return (
    <div className="w-[100vw] h-[64px] z-50 bg-slate-900 fixed top-0">
      <div className="container mx-auto flex flex-row h-full justify-between items-center">
        {/* Company Name */}
        <div className="w-1/3 text-2xl text-white font-bold">{CompanyName}</div>

        {/* Desktop Menu (hidden on mobile) */}
        <div className="hidden w-1/3 lg:w-1/2 lg:flex">
          <DesktopMenu />
        </div>

        {/* Mobile Menu (hidden on large screens) */}
        <div className="flex w-1/3 lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
