// app/contact/page.tsx
"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { contactFormSchema } from "~/components/contact/schema";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "~/components/ui/resizable";
import { ContactForm } from "~/components/contact/contact-form";
import { ContactCodePreview } from "~/components/contact/contact-code-preview";
import { ThankYouMessage } from "~/components/contact/thanks-message";
import { ContactSidebar } from "~/components/contact/contact-sidebar";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const watchedValues = form.watch();

  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    console.log(values);
    setIsSubmitted(true);
  }

  function handleReset() {
    form.reset({ name: "", email: "", message: "" });
    setIsSubmitted(false);
  }

  return (
    <div className="h-[calc(100vh-44px)] pt-11">
      {" "}
      <ResizablePanelGroup
        direction="horizontal"
        className="h-full rounded-lg border-none"
      >
        <ResizablePanel defaultSize={20} minSize={15} maxSize={25}>
          <ContactSidebar />
        </ResizablePanel>

        <ResizableHandle withHandle className="bg-border" />

        <ResizablePanel defaultSize={40} minSize={30}>
          <div className="h-full p-8">
            {isSubmitted ? (
              <ThankYouMessage onReset={handleReset} />
            ) : (
              <ContactForm form={form} onSubmit={onSubmit} />
            )}
          </div>
        </ResizablePanel>

        <ResizableHandle withHandle className="bg-border" />

        <ResizablePanel defaultSize={40} minSize={30}>
          <ContactCodePreview values={watchedValues} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
