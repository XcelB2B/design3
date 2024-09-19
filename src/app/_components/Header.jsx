"use client";
import React, { useState } from "react";

import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Header() {
  return (
    <div className=" backdrop-blur-md border-b border-[#888888] sticky top-0 z-50 bg-black/30">
      <Navbar className="top-0 md:top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn(
        "backdrop-blur-md border-b border-[#888888] sticky top-0 z-50 bg-black/30",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href="/" className="text-sm md:text-base text-white">
          Home
        </Link>

        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/services">Web Development Services</HoveredLink>
            <HoveredLink href="/services">UI/UX Design Services</HoveredLink>
            <HoveredLink href="/services">
              Search Engine Optimization Services
            </HoveredLink>
            <HoveredLink href="/services">Branding Services</HoveredLink>
            <HoveredLink href="/services">
              Digital Marketing Services
            </HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/about">Learn About Us</HoveredLink>
            <HoveredLink href="/faq">Frequently Asked Questions</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/contact">Contact Us</HoveredLink>
            <HoveredLink href="/careers">Career</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
