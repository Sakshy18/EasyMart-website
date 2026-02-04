import Icon from "../../shared/ui/Icon";
import ViewByCategoryButton from "./ViewByCategoryButton";

interface Props {
  title: string;
  categoryId?: string;
  hideViewButton?: boolean;
}

export default function SectionHeader({
  title,
  categoryId,
  hideViewButton = false,
}: Props) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-[1.25rem] font-semibold text-[var(--color-black-800)]">
        {title}
      </h2>

      <div className="flex items-center gap-[1rem]">
        {!hideViewButton && categoryId && (
          <ViewByCategoryButton categoryId={categoryId} />
        )}

        <div className="hidden md:flex items-center gap-[0.75rem]">
          <button
            className="
              w-[3rem] h-[3rem]
              flex items-center justify-center
              rounded-full
              bg-[var(--color-black-50)]
              border border-[var(--color-black-100)]
              opacity-60
            "
          >
            <Icon name="arrowLeft" size={20} />
          </button>

          <button
            className="
              w-[3rem] h-[3rem]
              flex items-center justify-center
              rounded-full
              bg-white
              border border-[var(--color-black-100)]
            "
          >
            <Icon name="arrowRight" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
