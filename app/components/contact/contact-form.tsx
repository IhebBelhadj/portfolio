// components/contact/ContactForm.tsx
"use client";
import { type UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { contactFormSchema } from "./schema";

type ContactFormProps = {
  form: UseFormReturn<z.infer<typeof contactFormSchema>>;
  onSubmit: (values: z.infer<typeof contactFormSchema>) => void;
};

export function ContactForm({ form, onSubmit }: ContactFormProps) {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 text-sm"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground">_name:</FormLabel>
              <FormControl>
                <Input
                  placeholder="Jonathan Davis"
                  {...field}
                  className="border-border"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground">_email:</FormLabel>
              <FormControl>
                <Input
                  placeholder="jonathan-davis@gmail.com"
                  {...field}
                  className="border-border"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground">_message:</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Your message here..."
                  className="border-border h-32 resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-primary text-background hover:bg-primary/90 hover:cursor-pointer"
        >
          submit-message
        </Button>
      </form>
    </Form>
  );
}
