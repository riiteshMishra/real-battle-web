import type { IconType } from "react-icons";

interface RewardCardProps {
  title: string;
  description: string;
  icon: IconType;
}

export default function RewardCard({
  title,
  description,
  icon: Icon,
}: RewardCardProps) {
  return (
    <li className="flex items-start gap-3.5">
      <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg border border-success/25 bg-success-soft">
        <Icon aria-hidden="true" className="size-3.5 text-success" />
      </span>

      <div>
        <h3 className="text-[13px] font-semibold text-foreground">{title}</h3>
        <p className="mt-1 text-[12px] leading-5 text-muted-foreground">
          {description}
        </p>
      </div>
    </li>
  );
}
