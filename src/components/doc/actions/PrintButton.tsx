"use client";

import { Printer } from "lucide-react";
import { Button } from "@/src/components/ui/Button";

export default function PrintButton() {
  return (
    <Button
      type="button"
      variant="outline"
      onClick={() => window.print()}
      className="h-auto min-h-16 justify-start gap-3 px-4 py-4 text-left"
    >
      <Printer aria-hidden="true" className="size-5 shrink-0 text-muted-foreground" />

      <span>
        <span className="block font-semibold text-foreground">Print Terms</span>
        <span className="mt-1 block text-xs font-normal text-dim">
          Print or save as PDF
        </span>
      </span>
    </Button>
  );
}
