import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { contacts, findMeAlsoIn } from "~/_data/contact-data";

export function ContactSidebar() {
  return (
    <div className="text-muted-foreground flex flex-col text-sm">
      <Accordion
        type="multiple"
        defaultValue={["contacts", "find-me-also-in"]}
        className="w-full"
      >
        <AccordionItem value="contacts" className="border-none">
          <AccordionTrigger className="border-border text-foreground border-b p-2 hover:no-underline">
            contacts
          </AccordionTrigger>
          <AccordionContent className="space-y-1 p-2">
            {contacts.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:bg-border flex items-center gap-2 px-2 py-1"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </a>
            ))}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="find-me-also-in" className="border-none">
          <AccordionTrigger className="border-border text-foreground border-t border-b p-2 hover:no-underline">
            find-me-also-in
          </AccordionTrigger>
          <AccordionContent className="space-y-1 p-2">
            {findMeAlsoIn.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
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
