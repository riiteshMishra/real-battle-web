"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Mail,
  MessageSquare,
  Send,
  User,
  Loader2,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import {
  contactFormSchema,
  type ContactFormData,
} from "@/src/lib/contact/validations";

import { sendMessage } from "@/src/services/oprations/contact/contact-api";
import { siteConfig } from "@/src/config/site";

import { Input } from "@/src/components/common/shadcn/input";
import { Textarea } from "@/src/components/common/shadcn/textarea";
import { Button } from "@/src/components/common/button";

interface FormStatus {
  type: "idle" | "success" | "error";
  message: string;
}

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus({
      type: "idle",
      message: "",
    });

    try {
      const response = await sendMessage(data);

      if (!response) {
        throw new Error("Failed to send message");
      }

      reset();

      setStatus({
        type: "success",
        message: "Your message has been sent successfully.",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus({
        type: "error",
        message: `Something went wrong. Please try again, or email ${siteConfig.email}.`,
      });
    }
  };

  return (
    <div
      id="support"
      className="border-foreground/10 bg-background/60 relative scroll-mt-28 overflow-hidden rounded-3xl border p-6 shadow-[0_20px_70px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:p-8 lg:col-span-3"
    >
      {/* DECORATIVE GLOW */}
      <div className="bg-accent/10 pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full blur-3xl" />

      <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative">
        {/* HEADER */}
        <div className="mb-8">
          <div className="bg-accent text-foreground mb-4 flex h-11 w-11 items-center justify-center rounded-xl">
            <MessageSquare size={21} />
          </div>

          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Send us a message
          </h2>

          <p className="text-foreground/55 mt-2 max-w-lg text-sm leading-6">
            Have a question, feedback, or need help? Fill out the form and the
            support team will review it.
          </p>
        </div>

        {/* STATUS */}
        {status.type !== "idle" && (
          <div
            role={status.type === "error" ? "alert" : "status"}
            aria-live={status.type === "error" ? "assertive" : "polite"}
            className={`mb-6 flex items-start gap-3 rounded-xl border p-4 text-sm ${
              status.type === "success"
                ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                : "border-red-500/20 bg-red-500/10 text-red-600 dark:text-red-400"
            }`}
          >
            {status.type === "success" ? (
              <CheckCircle2 className="mt-0.5 size-5 shrink-0" />
            ) : (
              <XCircle className="mt-0.5 size-5 shrink-0" />
            )}

            <span>{status.message}</span>
          </div>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* NAME + EMAIL */}
          <div className="grid gap-5 sm:grid-cols-2">
            {/* NAME */}
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Name
              </label>

              <div className="relative">
                <User className="text-foreground/40 pointer-events-none absolute top-1/2 left-3 size-3.5 -translate-y-1/2" />

                <Input
                  id="name"
                  placeholder="Your name"
                  disabled={isSubmitting}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className="h-11 pl-10 placeholder:text-sm"
                  {...register("name")}
                />
              </div>

              {errors.name && (
                <p id="name-error" className="mt-1.5 text-xs text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email
              </label>

              <div className="relative">
                <Mail className="text-foreground/40 pointer-events-none absolute top-1/2 left-3 size-3.5 -translate-y-1/2" />

                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  disabled={isSubmitting}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="h-11 pl-10 placeholder:text-sm"
                  {...register("email")}
                />
              </div>

              {errors.email && (
                <p id="email-error" className="mt-1.5 text-xs text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* SUBJECT */}
          <div>
            <label htmlFor="subject" className="mb-2 block text-sm font-medium">
              Subject
            </label>

            <div className="relative">
              <MessageSquare className="text-foreground/40 pointer-events-none absolute top-1/2 left-3 size-3.5 -translate-y-1/2" />

              <Input
                id="subject"
                placeholder="How can we help?"
                disabled={isSubmitting}
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? "subject-error" : undefined}
                className="h-11 pl-10 placeholder:text-sm"
                {...register("subject")}
              />
            </div>

            {errors.subject && (
              <p id="subject-error" className="mt-1.5 text-xs text-red-500">
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* MESSAGE */}
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium">
              Message
            </label>

            <Textarea
              id="message"
              placeholder="Tell us what's on your mind..."
              disabled={isSubmitting}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              className="min-h-36 resize-none"
              {...register("message")}
            />

            {errors.message && (
              <p id="message-error" className="mt-1.5 text-xs text-red-500">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* SUBMIT */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="group shadow-accent/20 hover:shadow-accent/25 h-12 w-full cursor-pointer gap-2 rounded-xl text-sm font-semibold shadow-lg transition-all hover:shadow-xl"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Sending message...
              </>
            ) : (
              <>
                Send Message
                <Send className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </>
            )}
          </Button>

          <p className="text-foreground/40 text-center text-[11px]">
            Support replies are handled on business days. Include your match ID
            and tournament name where relevant.
          </p>
        </form>
      </div>
    </div>
  );
}
