// app/contact/page.tsx
"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { contactFormSchema } from "~/components/contact/schema";
import { ContactForm } from "~/components/contact/contact-form";
import { ContactCodePreview } from "~/components/contact/contact-code-preview";
import { ThankYouMessage } from "~/components/contact/thanks-message";
import { ContactSidebar } from "~/components/contact/contact-sidebar";
import { ContactPageLayout } from "~/components/contact/contact-page-layout"; // <-- Import the new layout

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
      <ContactPageLayout
        sidebar={<ContactSidebar />}
        form={<ContactForm form={form} onSubmit={onSubmit} />}
        codePreview={<ContactCodePreview values={watchedValues} />}
        isSubmitted={isSubmitted}
        thankYouMessage={<ThankYouMessage onReset={handleReset} />}
      />
    </div>
  );
}
