"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckCircle2,
  Loader2,
  Mail,
  MessageSquare,
  Send,
  User,
  XCircle,
} from "lucide-react";

import {
  contactFormSchema,
  type ContactFormData,
} from "@/src/lib/contact/validations";
import { sendMessage } from "@/src/services/operations/contact/contact-api";
import { siteConfig } from "@/src/config/site";
import { Input } from "@/src/components/ui/Input";
import { Textarea } from "@/src/components/ui/Textarea";
import { Button } from "@/src/components/ui/Button";

interface FormStatus {
  type: "idle" | "success" | "error";
  message: string;
}

const fieldErrors = "mt-1.5 text-xs text-brand";

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
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus({ type: "idle", message: "" });

    try {
      const response = await sendMessage(data);

      if (!response) {
        throw new Error("Failed to send message");
      }

      reset();
      setStatus({
        type: "success",
        message: "Message received. Our team will get back to you.",
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
      className="surface-card relative scroll-mt-28 overflow-hidden rounded-3xl p-6 backdrop-blur-xl sm:p-8"
    >
      <div className="relative">
        <div className="mb-8">
          <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
            <MessageSquare size={21} aria-hidden="true" />
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Send us a message
          </h2>

          <p className="mt-2 max-w-lg text-sm leading-6 text-muted-foreground">
            Tournament issue, account problem, payment question ya fair-play
            report — form bhar do, team review karegi.
          </p>
        </div>

        {status.type !== "idle" && (
          <div
            role={status.type === "error" ? "alert" : "status"}
            aria-live={status.type === "error" ? "assertive" : "polite"}
            className={`mb-6 flex items-start gap-3 rounded-xl border p-4 text-sm ${
              status.type === "success"
                ? "border-success/30 bg-success-soft text-success"
                : "border-brand/30 bg-brand-soft text-brand"
            }`}
          >
            {status.type === "success" ? (
              <CheckCircle2 className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
            ) : (
              <XCircle className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
            )}

            <span>{status.message}</span>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Name
              </label>

              <div className="relative">
                <User
                  aria-hidden="true"
                  className="pointer-events-none absolute top-1/2 left-3 size-3.5 -translate-y-1/2 text-dim"
                />

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
                <p id="name-error" className={fieldErrors}>
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email
              </label>

              <div className="relative">
                <Mail
                  aria-hidden="true"
                  className="pointer-events-none absolute top-1/2 left-3 size-3.5 -translate-y-1/2 text-dim"
                />

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
                <p id="email-error" className={fieldErrors}>
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="mb-2 block text-sm font-medium">
              Subject
            </label>

            <div className="relative">
              <MessageSquare
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-3 size-3.5 -translate-y-1/2 text-dim"
              />

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
              <p id="subject-error" className={fieldErrors}>
                {errors.subject.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium">
              Message
            </label>

            <Textarea
              id="message"
              placeholder="Match ID, tournament name and what happened..."
              disabled={isSubmitting}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              className="min-h-36 resize-none"
              {...register("message")}
            />

            {errors.message && (
              <p id="message-error" className={fieldErrors}>
                {errors.message.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="group h-12 w-full cursor-pointer gap-2 rounded-xl text-sm font-semibold"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                Sending message...
              </>
            ) : (
              <>
                Send Message
                <Send
                  aria-hidden="true"
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </>
            )}
          </Button>

          <p className="text-center text-[11px] text-dim">
            Replies are handled on business days. Include your match ID and
            tournament name where relevant.
          </p>
        </form>
      </div>
    </div>
  );
}
