import Icon from "./Icon";

export default function LoginButton() {
  return (
    <button
      className="
        flex items-center gap-[0.5rem]
        px-[2rem] py-[0.75rem]
        border border-[var(--color-primary-600)]
        rounded-[2.4375rem]
      "
    >
      <Icon name="user" size={16} />
      <span className="text-[0.875rem] font-semibold text-[var(--text-primary)]">
        Login
      </span>
    </button>
  );
}
