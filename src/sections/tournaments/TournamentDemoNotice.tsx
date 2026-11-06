import { FiAlertCircle } from "react-icons/fi";
import Reveal from "@/src/components/ui/Reveal";

interface TournamentDemoNoticeProps {
  note: string;
}

export default function TournamentDemoNotice({ note }: TournamentDemoNoticeProps) {
  return (
    <Reveal className="mt-4">
      <p className="flex items-start gap-2 rounded-xl border border-brand/25 bg-brand-soft px-4 py-3 text-[12px] leading-6 text-brand">
        <FiAlertCircle aria-hidden="true" className="mt-1 size-4 shrink-0" />
        <span>{note}</span>
      </p>
    </Reveal>
  );
}