interface Props {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export default function SubCategoryPill({
  label,
  active = false,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`
        h-[36px]
        px-[16px]
        rounded-full
        text-[14px]
        font-medium
        whitespace-nowrap
        transition

        ${
          active
            ? "bg-[var(--color-primary-600)] text-white"
            : "bg-white text-[var(--color-black-700)] border border-[var(--color-black-100)]"
        }
      `}
    >
      {label}
    </button>
  );
}
