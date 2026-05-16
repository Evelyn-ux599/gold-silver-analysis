interface TagBadgeProps {
  label: string;
  className?: string;
}

export default function TagBadge({ label, className }: TagBadgeProps) {
  return (
    <span
      className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium border ${
        className ?? "bg-accent-blue/10 text-accent-blue border-accent-blue/20"
      }`}
    >
      {label}
    </span>
  );
}
