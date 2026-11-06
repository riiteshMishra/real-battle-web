import { FiMenu, FiX } from "react-icons/fi";

interface MobileMenuToggleProps {
  open: boolean;
  onToggle: () => void;
  toggleRef: React.RefObject<HTMLButtonElement | null>;
}

export default function MobileMenuToggle({
  open,
  onToggle,
  toggleRef,
}: MobileMenuToggleProps) {
  return (
    <button
      ref={toggleRef}
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      aria-controls="mobile-menu"
      aria-label={open ? "Close menu" : "Open menu"}
      className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-dim hover:bg-elevated lg:hidden"
    >
      {open ? (
        <FiX aria-hidden="true" className="size-5" />
      ) : (
        <FiMenu aria-hidden="true" className="size-5" />
      )}
    </button>
  );
}