import Icon from "./Icon";

type Props = {
  count: number;
};

export default function CartButton({ count }: Props) {
  return (
    <>
      <div
        className="
          hidden lg:flex
          items-center gap-[0.5rem]
          px-[0.75rem] py-[0.375rem]
          bg-[var(--color-primary-50)]
          border border-[var(--color-primary-50)]
          rounded-[2.4375rem]
        "
      >
        <div
          className="
            w-[2.5rem] h-[1.75rem]
            bg-white
            rounded-[2rem]
            flex items-center justify-center
          "
        >
          <Icon name="cart" size={16} color="var(--color-primary-600" />
          <span className="text-[0.75rem] font-semibold text-[var(--color-primary-600)] pl-[0.25rem]">
            {count}
          </span>
        </div>

        <span className="text-[0.875rem] font-medium text-[var(--text-primary)]">
          Cart
        </span>
      </div>

      <div
        className="
          flex lg:hidden
          items-center justify-center
          w-[3.4375rem]
          h-[2.5rem]
          bg-[var(--color-primary-50)]
          border border-[var(--color-primary-50)]
          rounded-[3rem]
        "
      >
        <div
          className="
            w-[3.125rem]
            h-[2.1875rem]
            bg-white
            rounded-full
            flex items-center justify-center gap-[0.25rem]
          "
        >
          <Icon name="cart" size={20} color="var(--color-primary-600" />
          <span className="text-[0.9375rem] font-semibold text-[var(--color-primary-600)]">
            {count}
          </span>
        </div>
      </div>
    </>
  );
}
