interface ToggleSwitchProps {
  checked: boolean;
  onChange: (value: boolean) => void;
}

export default function ToggleSwitch({
  checked,
  onChange,
}: ToggleSwitchProps) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`
        w-[36px] h-[20px]
        rounded-full
        p-[2px]
        flex items-center
        transition-colors
        ${checked 
          ? "bg-[var(--color-primary-500)] justify-end" 
          : "bg-[#E7E6E7] justify-start"}
      `}
    >
      <div
        className="
          w-[16px] h-[16px]
          bg-white
          rounded-full
          shadow
        "
      />
    </button>
  );
}
