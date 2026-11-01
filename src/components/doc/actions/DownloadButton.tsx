"use client";

import { Download } from "lucide-react";
import { Button } from "@/src/components/ui/Button";

interface DownloadButtonProps {
  fileName: string;
  content: string;
  title: string;
  subtitle: string;
}

export default function DownloadButton({
  fileName,
  content,
  title,
  subtitle,
}: DownloadButtonProps) {
  const handleDownload = () => {
    const file = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");

    link.href = url;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  return (
    <Button
      type="button"
      variant="outline"
      onClick={handleDownload}
      className="h-auto min-h-16 justify-start gap-3 px-4 py-4 text-left"
    >
      <Download aria-hidden="true" className="size-5 shrink-0 text-brand" />

      <span>
        <span className="block font-semibold text-foreground">{title}</span>
        <span className="mt-1 block text-xs font-normal text-dim">
          {subtitle}
        </span>
      </span>
    </Button>
  );
}
