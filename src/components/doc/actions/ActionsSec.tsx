import ActionsHeader from "@/src/components/doc/actions/ActionsHeader";
import ContactLink from "@/src/components/doc/actions/ContactLink";
import DownloadButton from "@/src/components/doc/actions/DownloadButton";
import PrintButton from "@/src/components/doc/actions/PrintButton";

interface ActionsSecProps {
  title: string;
  description: string;
  email: string;
  contactTitle: string;
  contactSubtitle: string;
  fileName?: string;
  downloadTitle?: string;
}

export default function ActionsSec({
  title,
  description,
  email,
  contactTitle,
  contactSubtitle,
  fileName = "Real-Battle-Terms-of-Service.txt",
  downloadTitle = "Download Terms",
}: ActionsSecProps) {
  return (
    <section
      aria-labelledby="actions-title"
      className="mb-12 rounded-xl border border-border-subtle bg-surface p-6 md:p-8"
    >
      <ActionsHeader title={title} description={description} />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <DownloadButton
          fileName={fileName}
          content=""
          title={downloadTitle}
          subtitle="Save a copy for your records"
        />

        <PrintButton />

        <ContactLink
          email={email}
          title={contactTitle}
          subtitle={contactSubtitle}
        />
      </div>
    </section>
  );
}
