import ContactForm from "@/src/components/forms/ContactForm";
import ContactHeader from "@/src/components/doc/contact/ContactHeader";
import ContactNote from "@/src/components/doc/contact/ContactNote";

interface ContactSectionProps {
  title: string;
  description: string;
  note?: string;
}

export default function ContactSection({
  title,
  description,
}: ContactSectionProps) {
  return (
    <section
      aria-labelledby="contact-title"
      className="mb-12 rounded-xl border border-border-subtle bg-card p-6 md:p-8"
    >
      <ContactHeader title={title} description={description} />
      <ContactForm />
      <ContactNote />
    </section>
  );
}
