"use client";

import * as React from "react";
import { BookOpen, Braces, FileBraces } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "bymarcant",
    email: "https://github.com/MarcAnt",
  },
  navMain: [
    {
      title: "Documentation",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#docs",
        },
      ],
    },
    {
      title: "Props",
      icon: Braces,
      isActive: true,
      items: [
        {
          title: "value",
          url: "#prop-value",
        },
        {
          title: "onChange",
          url: "#prop-onChange",
        },
        {
          title: "disabled",
          url: "#prop-disabled",
        },
        {
          title: "disabledHours",
          url: "#prop-disabledHours",
        },
        {
          title: "disabledMinutes",
          url: "#prop-disabledMinutes",
        },
        {
          title: "disabledSeconds",
          url: "#prop-disabledSeconds",
        },
        {
          title: "required",
          url: "#prop-required",
        },
        {
          title: "name",
          url: "#prop-name",
        },
        {
          title: "id",
          url: "#prop-id",
        },
        {
          title: "className",
          url: "#prop-className",
        },
        {
          title: "iconClockClassName",
          url: "#prop-iconClockClassName",
        },
        {
          title: "amPmButtonClassName",
          url: "#prop-amPmButtonClassName",
        },
        {
          title: "controlsClassName",
          url: "#prop-controlsClassName",
        },
        {
          title: "dataTestId",
          url: "#prop-dataTestId",
        },
        {
          title: "hoursPlaceholder",
          url: "#prop-hoursPlaceholder",
        },
        {
          title: "minutesPlaceholder",
          url: "#prop-minutesPlaceholder",
        },
        {
          title: "secondsPlaceholder",
          url: "#prop-secondsPlaceholder",
        },
        {
          title: "iconAriaLabel",
          url: "#prop-iconAriaLabel",
        },
        {
          title: "secondsAriaLabel",
          url: "#prop-secondsAriaLabel",
        },
        {
          title: "minutesAriaLabel",
          url: "#prop-minutesAriaLabel",
        },
        {
          title: "hoursAriaLabel",
          url: "#prop-hoursAriaLabel",
        },
        {
          title: "amPmAriaLabel",
          url: "#prop-amPmAriaLabel",
        },
        {
          title: "ariaLabel",
          url: "#prop-ariaLabel",
        },
        {
          title: "hoursInputTitle",
          url: "#prop-hoursInputTitle",
        },
        {
          title: "minutesInputTitle",
          url: "#prop-minutesInputTitle",
        },
        {
          title: "secondsInputTitle",
          url: "#prop-secondsInputTitle",
        },
        {
          title: "hasSeconds",
          url: "#prop-hasSeconds",
        },
        {
          title: "readOnly",
          url: "#prop-readOnly",
        },
        {
          title: "readOnlyHours",
          url: "#prop-readOnlyHours",
        },
        {
          title: "readOnlyMinutes",
          url: "#prop-readOnlyMinutes",
        },
        {
          title: "readOnlySeconds",
          url: "#prop-readOnlySeconds",
        },
        {
          title: "hideControls",
          url: "#prop-hideControls",
        },
        {
          title: "hour12",
          url: "#prop-hour12",
        },
        {
          title: "format",
          url: "#prop-format",
        },
        {
          title: "maxTime",
          url: "#prop-maxTime",
        },
        {
          title: "minTime",
          url: "#prop-minTime",
        },
        {
          title: "stepHours",
          url: "#prop-stepHours",
        },
        {
          title: "stepMinutes",
          url: "#prop-stepMinutes",
        },
        {
          title: "stepSeconds",
          url: "#prop-stepSeconds",
        },
        {
          title: "setZeroOnBlur",
          url: "#prop-setZeroOnBlur",
        },
      ],
    },
    {
      title: "Examples",
      icon: FileBraces,
      items: [
        {
          title: "Basic",
          url: "#example-basic",
        },
        {
          title: "With seconds",
          url: "#example-withSeconds",
        },
        {
          title: "Current time",
          url: "#example-currentTime",
        },
        {
          title: "Tailwind CSS styles",
          url: "#example-styled",
        },
        {
          title: "Disabled",
          url: "#example-disabled",
        },
        {
          title: "Disabled by input",
          url: "#example-disabledInputs",
        },
        {
          title: "ReadOnly",
          url: "#example-readOnly",
        },
        {
          title: "ReadOnly by input",
          url: "#example-readOnlyInputs",
        },
        {
          title: "am/pm button (hour12)",
          url: "#example-hour12",
        },
        {
          title: "Format",
          url: "#example-format",
        },
        {
          title: "hideControls",
          url: "#example-hideControls",
        },
        {
          title: "Min and Max time",
          url: "#example-maxAndMinTime",
        },
        {
          title: "Step hours, minutes or seconds",
          url: "#example-stepTime",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a
                target="_blank"
                href="https://www.npmjs.com/package/@bymarcant/easy-time-input"
                rel="noopener noreferrer"
              >
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Easy Time Input</span>
                  <span className="truncate text-xs">by @MarcAnt</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
