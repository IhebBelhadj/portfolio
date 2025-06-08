"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { contactInfo, personalInfo, educationInfo } from "~/_data/about-data";

// Define a type for the items that will be displayed in the content panels
export type ContentKey =
  | "bio"
  | "interests"
  | "high-school"
  | "university"
  | "education";

type SidebarProps = {
  setActiveContent: (content: ContentKey) => void;
};

export function Sidebar({ setActiveContent }: SidebarProps) {
  return (
    <div className="text-muted-foreground flex flex-col text-sm">
      {/* Personal Info Accordion */}
      <Accordion
        type="single"
        collapsible
        defaultValue="personal-info"
        className="w-full"
      >
        <AccordionItem value="personal-info" className="border-none">
          <AccordionTrigger className="border-border border-b p-2 font-mono hover:no-underline">
            personal-info
          </AccordionTrigger>
          <AccordionContent className="p-2">
            {personalInfo.map((item) => (
              <button
                key={item.title}
                onClick={() => setActiveContent(item.title as ContentKey)}
                className="hover:bg-border flex w-full items-center gap-2 rounded px-2 py-1 text-left"
              >
                <item.icon className={`h-4 w-4 ${item.color}`} />
                {item.title}
              </button>
            ))}
            {/* Education Sub-Accordion */}
            <Accordion type="single" collapsible className="w-full pl-2">
              <AccordionItem value="education" className="border-none">
                <AccordionTrigger className="py-1 hover:no-underline">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">›</span> education
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-4">
                  {educationInfo.map((item) => (
                    <button
                      key={item.title}
                      onClick={() => setActiveContent(item.title as ContentKey)}
                      className="hover:bg-border flex w-full items-center gap-2 rounded px-2 py-1 text-left"
                    >
                      <item.icon className="h-4 w-4" />
                      {item.title}
                    </button>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Contacts Accordion */}
      <Accordion
        type="single"
        collapsible
        defaultValue="contacts"
        className="w-full"
      >
        <AccordionItem value="contacts" className="border-none">
          <AccordionTrigger className="border-border border-t border-b p-2 font-mono hover:no-underline">
            contacts
          </AccordionTrigger>
          <AccordionContent className="p-2">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:bg-border flex items-center gap-2 rounded px-2 py-1"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </a>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
