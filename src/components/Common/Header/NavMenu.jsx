"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function NavMenu() {
  return (
    <div className="raleway-font">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="font-medium text-base mr-8">
            <Link href="/">Home</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-medium text-base">
              Research
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white">
              <div className="w-[550px]">
                <NavigationMenuLink
                  className="hover:text-gray-500"
                  href="/research/publications"
                >
                  Publications
                </NavigationMenuLink>
                <NavigationMenuLink
                  className="hover:text-gray-500"
                  href="/research/projects"
                >
                  Projects
                </NavigationMenuLink>
                <NavigationMenuLink
                  className="hover:text-gray-500"
                  href="/research/research-guidance"
                >
                  Research Guideline
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Talks/Workshops</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white">
              <div className="w-[550px]">
                <NavigationMenuLink
                  className="hover:text-gray-500"
                  href="/invited-talks-workshops"
                >
                  Keynote/Invited/Guest
                </NavigationMenuLink>
                <NavigationMenuLink
                  className="hover:text-gray-500"
                  href="/invited-talks-workshops"
                >
                  Chair/Co-chair
                </NavigationMenuLink>
                <NavigationMenuLink
                  className="hover:text-gray-500"
                  href="/invited-talks-workshops"
                >
                  Workshop/Seminars
                </NavigationMenuLink>
                <NavigationMenuLink
                  className="hover:text-gray-500"
                  href="/invited-talks-workshops"
                >
                  Oral Talks
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-medium text-base">
              Awards/Fellowships
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white">
              <div className="w-[550px]">
                <NavigationMenuLink
                  className="hover:text-gray-500"
                  href="/awards-fellowships/awards"
                >
                  Awards
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="mr-4">
            <Link
              href="/joint-works"
              legacyBehavior
              passHref
              className="font-medium text-base"
            >
              Joint Works
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href="/about"
              legacyBehavior
              passHref
              className="font-medium text-base"
            >
              About
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
