"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  useMutation,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { z } from "zod";
import { useState } from "react";

const formSchema = z.object({
  customerName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  customerEmail: z.string().email({
    message: "Please enter a valid email address.",
  }),
  companyName: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type ContactFormData = z.infer<typeof formSchema>;

const queryClient = new QueryClient();

async function submitContactForm(data: ContactFormData) {
  const response = await fetch(
    "https://n8n.graphland.dev/webhook/3aec6658-2e30-4599-96e1-525e980c4abb",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "admin123",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to submit form");
  }

  return response.json();
}

function ContactFormInner() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const form = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      customerName: "",
      customerEmail: "",
      companyName: "",
      budget: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: submitContactForm,
    onSuccess: () => {
      setSubmitStatus("success");
      form.reset();
    },
    onError: (error) => {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    },
  });

  function onSubmit(values: ContactFormData) {
    setSubmitStatus("idle");
    mutation.mutate(values);
  }

  const budgetOptions = [
    { value: "Under $10,000", label: "Under $10,000" },
    { value: "$10,000 - $25,000", label: "$10,000 - $25,000" },
    { value: "$25,000 - $50,000", label: "$25,000 - $50,000" },
    { value: "$50,000 - $100,000", label: "$50,000 - $100,000" },
    { value: "Over $100,000", label: "Over $100,000" },
  ];

  if (submitStatus === "success") {
    return (
      <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/10">
        <div className="text-center py-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
          <p className="text-gray-300 mb-6">
            Thank you for reaching out. We&apos;ll get back to you within 24
            hours.
          </p>
          <Button onClick={() => setSubmitStatus("idle")} variant="outline">
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/10">
      <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>

      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
          <p className="text-red-400 text-sm">
            Something went wrong. Please try again or contact us directly at
            contact@graphland.dev
          </p>
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="customerName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="customerEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">Email *</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">Company</FormLabel>
                <FormControl>
                  <Input placeholder="Your company" {...field} />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">Budget Range</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {budgetOptions.map((option) => (
                      <SelectItem
                        key={option.value}
                        value={option.value}
                        className="text-white hover:bg-gray-700"
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">Message *</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your project..."
                    rows={5}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={mutation.isPending}
            className="w-full"
          >
            {mutation.isPending ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default function ContactForm() {
  return (
    <QueryClientProvider client={queryClient}>
      <ContactFormInner />
    </QueryClientProvider>
  );
}
