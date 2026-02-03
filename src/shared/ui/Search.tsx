import Icon from "./Icon";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../features/search/searchSlice";
import type { AppDispatch } from "../../store";

type Props = {
  placeholder: string;
  size?: "desktop" | "mobile";
};

export default function Search({
  placeholder,
  size = "desktop",
}: Props) {
   const dispatch = useDispatch<AppDispatch>();
  const isMobile = size === "mobile";

  return (
    <div
      className={`
        flex items-center gap-[var(--space-2)]
        bg-[var(--color-white)]
        border border-[var(--color-stroke-light)]
        shadow-[var(--shadow-soft)]
        ${isMobile
          ? "w-[14.25rem] h-[2.5rem] p-[var(--space-2)] rounded-[var(--radius-sm)]"
          : "w-[28.625rem] h-[4rem] p-[var(--space-4)] rounded-[var(--radius-lg)]"}
      `}
    >
      {/* Icon bubble */}
      <div
        className={`
          flex items-center justify-center
          bg-[var(--color-primary-50)]
          rounded-full
          ${isMobile
            ? "w-[1.5rem] h-[1.5rem]"
            : "w-[2rem] h-[2rem]"}
        `}
      >
        <Icon name="search" size={isMobile ? 15 : 20} color="var(--color-primary-600)" />
      </div>

      <input
        placeholder={placeholder}
        className={`
          flex-1 bg-transparent outline-none
          font-regular
          ${isMobile ? "text-[0.75rem]" : "text-[0.875rem]"}
          text-[var(--color-black-900)]
          placeholder:text-[var(--color-black-400)]
        `}
         onChange={(e) => dispatch(setSearchQuery(e.target.value))}
      />
    </div>
  );
}
