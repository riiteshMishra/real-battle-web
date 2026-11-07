import { FiMoreHorizontal } from "react-icons/fi";

interface MoreButtonProps {
  active: boolean;
  open: boolean;
  onOpen: () => void;
}

export default function MoreButton({ active, open, onOpen }: MoreButtonProps) {
  return (
    <li className="flex-1">
      <button
        type="button"
        onClick={onOpen}
        aria-expanded={open}
        aria-controls="mobile-more-sheet"
        className="flex min-h-[44px] w-full flex-col items-center justify-center gap-0.5 py-2 text-[10px] transition-colors"
      >
        <FiMoreHorizontal
          aria-hidden={true}
          className={`size-5 ${active ? "text-brand" : "text-muted-foreground"}`}
        />
        <span className={active ? "text-brand font-semibold" : "text-dim"}>More</span>
      </button>
    </li>
  );
}