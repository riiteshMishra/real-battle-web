import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-16 w-full rounded-lg border border-input bg-card px-2.5 py-2 text-base transition-colors outline-none placeholder:text-dim focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-brand aria-invalid:ring-3 aria-invalid:ring-brand/25 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
