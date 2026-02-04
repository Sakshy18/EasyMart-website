interface CategoryPillProps {
  id: string;
  label: string;
  icon: string;
  isActive?: boolean;
  onClick?: (id: string) => void;
}

export default function CategoryPill({
  id,
  label,
  icon,
  isActive = false,
  onClick,
}: CategoryPillProps) {
  return (
    <button
      onClick={() => onClick?.(id)}
      className={`
    flex items-center gap-[8px]
    px-[14px] py-[8px]
    rounded-full
    whitespace-nowrap
    transition-colors
    ${
      isActive
        ? "border border-[var(--color-primary-500)] bg-[var(--color-primary-50)]"
        : "bg-[var(--color-black-50)]"
    }
  `}
    >
      <span
        className={`
          w-[26px] h-[26px]
          flex items-center justify-center
          rounded-full
          ${
            isActive
              ? "bg-[var(--color-primary-400)]"
              : "bg-[var(--color-black-100)]"
          }
        `}
      >
        <img src={icon} alt={label} className="w-[18px] h-[18px]" />
      </span>

      <span className="text-[14px] font-regular text-[var(--color-black-900)]">
        {label}
      </span>
    </button>
  );
}
