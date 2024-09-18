"use client";
import React, { useState } from "react";

import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Header() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-0 md:top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/" className="text-sm md:text-base text-black">
          Home
        </Link>

        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-development">
              Web Development Services
            </HoveredLink>
            <HoveredLink href="/ui-ux-design">
              UI/UX Design Services
            </HoveredLink>
            <HoveredLink href="/seo">
              Search Engine Optimization Services
            </HoveredLink>
            <HoveredLink href="/branding">Branding Services</HoveredLink>
            <HoveredLink href="/digital-marketing">
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
